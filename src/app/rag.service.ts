import { Injectable, inject, signal } from '@angular/core';
import { ContextAssemblerService, type AssembledContext } from './context-assembler.service';
import { EmbeddingsService } from './embeddings.service';
import { LlmService } from './llm.service';
import type { ContextSegment, ConversationTurn, Retrieved, StatusMessage, ThinkingStep } from './types';
import { VectorDbService } from './vector-db.service';

@Injectable({ providedIn: 'root' })
export class RagService {
  private static readonly TOP_K = 12;
  private static readonly MAX_SOURCE_SECTIONS = 5;

  private readonly db = inject(VectorDbService);
  private readonly embeddings = inject(EmbeddingsService);
  private readonly llm = inject(LlmService);
  private readonly context = inject(ContextAssemblerService);

  private readyStatus: StatusMessage = { key: 'status.initializing' };

  readonly budget = this.context.budget;

  readonly status = signal<StatusMessage>({ key: 'status.initializing' });
  readonly progress = signal<number | null>(0);
  readonly ready = signal(false);
  readonly generating = signal(false);
  readonly answer = signal('');
  readonly retrieved = signal<Retrieved[]>([]);
  readonly thinking = signal<ThinkingStep[]>([]);
  readonly contextSegments = signal<ContextSegment[]>([]);
  readonly usedTokens = signal(0);
  readonly useRag = signal(true);

  async load(): Promise<void> {
    await this.db.init((percent, key, params) => {
      this.progress.set(percent);
      this.status.set({ key, params });
    });

    this.progress.set(null);
    this.status.set({ key: 'status.loadingModel' });
    const device = await this.llm.load((key, params, percent) => {
      this.status.set({ key, params });
      this.progress.set(percent);
    });

    this.readyStatus = { key: 'status.ready', params: { device: device.toUpperCase() } };
    this.status.set(this.readyStatus);
    this.ready.set(true);
  }

  async ask(question: string, history: ConversationTurn[]): Promise<void> {
    if (!question.trim()) return;

    this.generating.set(true);
    this.answer.set('');
    this.thinking.set([]);

    try {
      const assembled = await this.assembleContext(question, history);
      this.contextSegments.set(assembled.segments);
      this.usedTokens.set(assembled.usedTokens);

      this.status.set({ key: 'status.generating' });
      await this.llm.generate(assembled.system, history, assembled.prompt, (token) =>
        this.answer.update((a) => a + token),
      );
    } finally {
      this.generating.set(false);
      this.status.set(this.readyStatus);
    }
  }

  private async assembleContext(question: string, history: ConversationTurn[]): Promise<AssembledContext> {
    if (!this.useRag()) {
      this.retrieved.set([]);
      return this.context.buildControlContext(question, history);
    }

    const searchQuery = history.length > 0 ? await this.rewriteQuery(question, history) : question;
    const queryVec = await this.embeddings.embed(searchQuery);
    const hits = await this.db.search(queryVec, RagService.TOP_K);
    this.retrieved.set(hits);
    const sectionIds = uniqueSectionIds(hits).slice(0, RagService.MAX_SOURCE_SECTIONS);
    const sections = await this.db.getSections(sectionIds);

    for (const section of sections) {
      this.pushThinking('read', section.title, this.context.countTokens(section.content));
    }

    return this.context.buildRagContext(searchQuery, sections, history);
  }

  private async rewriteQuery(question: string, history: ConversationTurn[]): Promise<string> {
    this.status.set({ key: 'status.rewriting' });
    const { system, prompt } = this.context.buildRewritePrompt(question, history);
    const rewritten = (await this.llm.complete(system, prompt, 64)).trim();
    const query = rewritten || question;
    const tokens = this.context.countTokens(system + prompt + rewritten);
    this.pushThinking('rewrite', query, tokens);
    return query;
  }

  private pushThinking(kind: ThinkingStep['kind'], label: string, tokens?: number): void {
    this.thinking.update((steps) => [...steps, { kind, label, tokens }]);
  }
}

function uniqueSectionIds(hits: Retrieved[]): string[] {
  const ids: string[] = [];
  const seen = new Set<string>();
  for (const hit of hits) {
    const id = hit.chunk.sectionId;
    if (!seen.has(id)) {
      seen.add(id);
      ids.push(id);
    }
  }
  return ids;
}
