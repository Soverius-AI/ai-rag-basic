import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import type { ThinkingStep } from '../types';

const PREVIEW_WORDS = 10;

@Component({
  selector: 'app-thinking-trace',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block max-w-[85%] self-start' },
  imports: [TranslocoPipe],
  template: `
    <div class="mb-2 rounded-lg border border-base-300 bg-base-200/50 px-3 py-2 text-sm">
      <button
        type="button"
        class="flex w-full items-center gap-2 text-left text-xs font-semibold uppercase tracking-wide text-base-content/50"
        [disabled]="live()"
        (click)="toggle()"
      >
        @if (live()) {
          <span class="loading loading-spinner loading-xs"></span>
        } @else {
          <span class="inline-block transition-transform" [class.rotate-90]="expanded()">▸</span>
        }
        {{ 'chat.thinking' | transloco }}
        @if (totalTokens()) {
          <span class="font-mono normal-case text-base-content/40">
            · {{ 'thinking.tokens' | transloco: { count: totalTokens() } }}
          </span>
        }
      </button>

      @if (expanded()) {
        <ul class="mt-1.5 space-y-1.5">
          @for (step of steps(); track $index) {
            <li>
              <div class="flex items-baseline justify-between gap-2">
                <span class="text-base-content/80">
                  @switch (step.kind) {
                    @case ('rewrite') {
                      • {{ 'thinking.rewrite' | transloco: { query: step.label } }}
                    }
                    @default {
                      • {{ 'thinking.loaded' | transloco: { title: step.label } }}
                    }
                  }
                </span>
                @if (step.tokens !== undefined) {
                  <span class="shrink-0 font-mono text-[0.65rem] text-base-content/40">
                    {{ 'thinking.tokens' | transloco: { count: step.tokens } }}
                  </span>
                }
              </div>
              @if (step.detail) {
                <p class="ml-3 mt-0.5 whitespace-pre-wrap text-xs text-base-content/55">{{ step.detail }}</p>
              }
            </li>
          }
        </ul>
      } @else {
        <p class="mt-1 truncate text-xs text-base-content/55">{{ preview() }}</p>
      }
    </div>
  `,
})
export class ThinkingTraceComponent {
  readonly steps = input.required<ThinkingStep[]>();
  readonly live = input<boolean>(false);

  private readonly userExpanded = signal(false);

  readonly expanded = computed(() => this.live() || this.userExpanded());

  readonly totalTokens = computed(() => this.steps().reduce((sum, step) => sum + (step.tokens ?? 0), 0));

  readonly preview = computed(() => {
    const text = this.steps()
      .map((step) => step.detail || step.label)
      .join(' ');
    const words = text.split(/\s+/).filter(Boolean);
    return words.length <= PREVIEW_WORDS ? text : words.slice(0, PREVIEW_WORDS).join(' ') + ' …';
  });

  toggle(): void {
    if (this.live()) return;
    this.userExpanded.update((open) => !open);
  }
}
