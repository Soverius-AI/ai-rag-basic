import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import type { ContextSegment, Retrieved } from '../types';

const PREVIEW_WORDS = 20;

const SEGMENT_COLOR: Record<ContextSegment['type'], string> = {
  system: 'bg-warning',
  history: 'bg-info',
  query: 'bg-success',
  chunk: 'bg-primary',
  remaining: 'bg-base-content/10',
};

@Component({
  selector: 'app-context-inspector',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'contents' },
  imports: [TranslocoPipe],
  template: `
    <aside class="flex flex-col gap-4 overflow-y-auto border-l border-base-300 bg-base-200 p-4">
      <div class="card bg-neutral text-neutral-content">
        <div class="card-body gap-3 p-4">
          <div class="flex justify-between text-xs uppercase tracking-wider text-base-content/60">
            <span>{{ 'inspector.tokenBudget' | transloco }}</span>
            <span class="font-mono">{{ usedTokens() }} / {{ budget() }}</span>
          </div>
          <div class="flex h-9 overflow-hidden rounded-lg bg-base-300">
            @for (seg of segments(); track $index) {
              <div
                class="h-full transition-[width] duration-300 {{ segmentColor(seg.type) }}"
                [style.width.%]="(seg.tokenCount / budget()) * 100"
                [title]="seg.label + ': ' + seg.tokenCount"
              ></div>
            }
          </div>
          <div class="flex flex-wrap gap-3 text-xs text-base-content/60">
            <span class="flex items-center gap-1.5"><i class="size-2.5 rounded-sm bg-warning"></i>{{ 'inspector.legendSystem' | transloco }}</span>
            <span class="flex items-center gap-1.5"><i class="size-2.5 rounded-sm bg-info"></i>{{ 'inspector.legendHistory' | transloco }}</span>
            <span class="flex items-center gap-1.5"><i class="size-2.5 rounded-sm bg-success"></i>{{ 'inspector.legendQuery' | transloco }}</span>
            <span class="flex items-center gap-1.5"><i class="size-2.5 rounded-sm bg-primary"></i>{{ 'inspector.legendDocs' | transloco }}</span>
            <span class="flex items-center gap-1.5"><i class="size-2.5 rounded-sm bg-base-content/10"></i>{{ 'inspector.legendFree' | transloco }}</span>
          </div>
        </div>
      </div>

      <div class="card bg-neutral text-neutral-content">
        <div class="card-body p-4">
          <div class="flex justify-between text-xs uppercase tracking-wider text-base-content/60">
            <span>{{ 'inspector.title' | transloco }}</span>
            <span class="font-mono">{{ 'inspector.hits' | transloco: { count: retrieved().length } }}</span>
          </div>
          @if (retrieved().length === 0) {
            <p class="text-sm text-base-content/60">{{ 'inspector.noQuery' | transloco }}</p>
          }
          <div class="divide-y divide-base-300">
            @for (hit of retrieved(); track hit.chunk.id) {
              <div class="py-2.5 first:pt-0">
                <div class="flex justify-between gap-2 text-xs text-base-content/60">
                  <span>{{ hit.chunk.sectionPath }}</span>
                  <span class="whitespace-nowrap font-mono text-success">{{ hit.score.toFixed(3) }}</span>
                </div>
                @if (isExpanded(hit.chunk.id)) {
                  <p class="my-1 whitespace-pre-wrap text-sm">{{ hit.chunk.content }}</p>
                  <button class="text-xs text-primary hover:underline" (click)="toggle(hit.chunk.id)">
                    {{ 'inspector.showLess' | transloco }}
                  </button>
                } @else {
                  <p class="my-1 text-sm text-base-content/70">{{ preview(hit.chunk.content) }}</p>
                  <button
                    class="text-xs text-base-content/50 hover:text-primary"
                    (click)="toggle(hit.chunk.id)"
                  >
                    {{ 'inspector.showMore' | transloco: { count: hit.chunk.content.length } }}
                  </button>
                }
                @if (hit.chunk.url) {
                  <a
                    class="text-sm text-primary hover:underline"
                    [href]="hit.chunk.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    >{{ 'inspector.openArticle' | transloco }}</a
                  >
                }
              </div>
            }
          </div>
        </div>
      </div>
    </aside>
  `,
})
export class ContextInspectorComponent {
  readonly usedTokens = input.required<number>();
  readonly budget = input.required<number>();
  readonly segments = input.required<ContextSegment[]>();
  readonly retrieved = input.required<Retrieved[]>();

  private readonly expandedIds = signal<ReadonlySet<string>>(new Set());

  segmentColor(type: ContextSegment['type']): string {
    return SEGMENT_COLOR[type];
  }

  isExpanded(chunkId: string): boolean {
    return this.expandedIds().has(chunkId);
  }

  toggle(chunkId: string): void {
    this.expandedIds.update((ids) => {
      const next = new Set(ids);
      if (next.has(chunkId)) next.delete(chunkId);
      else next.add(chunkId);
      return next;
    });
  }

  preview(content: string): string {
    const words = content.split(/\s+/);
    if (words.length <= PREVIEW_WORDS) return content;
    return words.slice(0, PREVIEW_WORDS).join(' ') + ' …';
  }
}
