import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { ChatPanelComponent } from './components/chat-panel.component';
import { ContextInspectorComponent } from './components/context-inspector.component';
import { TopbarComponent } from './components/topbar.component';
import { RagService } from './rag.service';
import type { ChatMessage, Source } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TopbarComponent, ChatPanelComponent, ContextInspectorComponent, TranslocoPipe],
  host: { class: 'flex flex-col h-screen bg-base-100 text-base-content' },
  template: `
    <app-topbar
      [useRag]="rag.useRag()"
      [ready]="rag.ready()"
      [statusText]="rag.status().key | transloco: rag.status().params"
      [progress]="rag.progress()"
      [lang]="lang()"
      (toggleRag)="rag.useRag.set($event)"
      (langChange)="setLang($event)"
    />
    <main class="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-[1fr_360px]">
      <app-chat-panel
        [messages]="messages()"
        [ready]="rag.ready()"
        [generating]="rag.generating()"
        [streamingAnswer]="rag.answer()"
        [streamingThinking]="rag.thinking()"
        [(draft)]="draft"
        (send)="send()"
      />
      <app-context-inspector
        [usedTokens]="rag.usedTokens()"
        [budget]="rag.budget"
        [segments]="rag.contextSegments()"
        [retrieved]="rag.retrieved()"
      />
    </main>
  `,
})
export class AppComponent {
  readonly rag = inject(RagService);
  private readonly transloco = inject(TranslocoService);

  readonly draft = signal('');
  readonly messages = signal<ChatMessage[]>([]);
  readonly lang = signal(this.transloco.getActiveLang());

  constructor() {
    void this.rag.load();
  }

  setLang(lang: string): void {
    this.transloco.setActiveLang(lang);
    this.lang.set(lang);
  }

  async send(): Promise<void> {
    const question = this.draft().trim();
    if (!question || !this.rag.ready() || this.rag.generating()) return;

    // Build history before appending the current question.
    const history = this.messages().map((m) => ({ role: m.role, content: m.text }));
    this.messages.update((m) => [...m, { role: 'user', text: question }]);
    this.draft.set('');

    await this.rag.ask(question, history);

    const sources: Source[] = [];
    const seen = new Set<string>();
    for (const hit of this.rag.retrieved()) {
      if (seen.has(hit.chunk.documentId)) continue;
      seen.add(hit.chunk.documentId);
      sources.push({ title: hit.chunk.title, url: hit.chunk.url });
    }

    // Display trace only; future history is rebuilt from message text.
    this.messages.update((m) => [
      ...m,
      { role: 'assistant', text: this.rag.answer(), sources, thinking: this.rag.thinking() },
    ]);
  }
}
