import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { MarkdownPipe } from '../markdown.pipe';
import type { ChatMessage, ThinkingStep } from '../types';
import { ThinkingTraceComponent } from './thinking-trace.component';

@Component({
  selector: 'app-chat-panel',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'contents' },
  imports: [ThinkingTraceComponent, TranslocoPipe, MarkdownPipe],
  template: `
    <section class="flex min-h-0 flex-col">
      <div class="flex flex-1 flex-col gap-2 overflow-y-auto p-6">
        @for (m of messages(); track $index) {
          @if (m.thinking; as thinking) {
            @if (thinking.length) {
              <app-thinking-trace [steps]="thinking" />
            }
          }
          <div class="chat" [class.chat-end]="m.role === 'user'" [class.chat-start]="m.role === 'assistant'">
            <div class="chat-bubble max-w-[82%]" [class.chat-bubble-primary]="m.role === 'user'">
              @if (m.role === 'user') {
                <span class="whitespace-pre-wrap">{{ m.text }}</span>
              } @else {
                <div class="markdown" [innerHTML]="m.text | markdown"></div>
              }
            </div>
            @if (m.sources && m.sources.length) {
              <div class="chat-footer mt-1 flex flex-wrap items-center gap-2 opacity-80">
                <span class="text-xs uppercase tracking-wide text-base-content/60">{{ 'chat.sources' | transloco }}</span>
                @for (s of m.sources; track s.url) {
                  <a
                    class="badge badge-outline badge-sm gap-1 text-primary hover:border-primary"
                    [href]="s.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    >↗ {{ s.title }}</a
                  >
                }
              </div>
            }
          </div>
        }
        @if (generating()) {
          @if (streamingThinking().length) {
            <app-thinking-trace [steps]="streamingThinking()" [live]="true" />
          }
          <div class="chat chat-start">
            <div class="chat-bubble">
              @if (streamingAnswer()) {
                <div class="markdown" [innerHTML]="streamingAnswer() | markdown"></div>
              } @else {
                …
              }
              <span class="loading loading-dots loading-xs align-middle"></span>
            </div>
          </div>
        }
        @if (messages().length === 0 && !generating()) {
          <p class="m-auto max-w-prose text-center text-base-content/60">{{ 'chat.hint' | transloco }}</p>
        }
      </div>

      <form class="flex gap-3 border-t border-base-300 bg-base-200 p-6" (submit)="onSubmit($event)">
        <input
          type="text"
          class="input input-bordered flex-1"
          [value]="draft()"
          (input)="onDraftInput($event)"
          [disabled]="!ready() || generating()"
          [placeholder]="'chat.placeholder' | transloco"
          autocomplete="off"
        />
        <button
          type="submit"
          class="btn btn-primary"
          [disabled]="!ready() || generating() || !draft().trim()"
        >
          {{ 'chat.send' | transloco }}
        </button>
      </form>
    </section>
  `,
})
export class ChatPanelComponent {
  readonly messages = input.required<ChatMessage[]>();
  readonly ready = input.required<boolean>();
  readonly generating = input.required<boolean>();
  readonly streamingAnswer = input.required<string>();
  readonly streamingThinking = input<ThinkingStep[]>([]);
  readonly draft = model<string>('');
  readonly send = output<void>();

  onDraftInput(event: Event): void {
    this.draft.set((event.target as HTMLInputElement).value);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.send.emit();
  }
}
