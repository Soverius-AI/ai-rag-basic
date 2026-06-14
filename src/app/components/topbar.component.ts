import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-topbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'contents' },
  imports: [TranslocoPipe],
  template: `
    <header class="navbar gap-4 border-b border-base-300 bg-base-200 px-6">
      <div class="navbar-start min-w-0 gap-3">
        <img src="soverius-logo.svg" alt="Soverius" class="h-8 w-auto shrink-0" />
        <div class="min-w-0">
          <h1 class="text-lg font-semibold leading-tight">Browser-RAG mit Gemma 4</h1>
          <p class="truncate text-sm text-base-content/60">{{ 'topbar.subtitle' | transloco }}</p>
        </div>
      </div>
      <div class="navbar-end gap-3">
        <div class="join">
          @for (option of languages; track option.code) {
            <button
              type="button"
              class="btn btn-xs join-item"
              [class.btn-primary]="lang() === option.code"
              (click)="langChange.emit(option.code)"
            >
              {{ option.label }}
            </button>
          }
        </div>
        <label class="label cursor-pointer gap-2 text-sm font-semibold" [title]="'topbar.ragToggleTitle' | transloco">
          <input
            type="checkbox"
            class="toggle toggle-sm"
            [class.toggle-success]="useRag()"
            [class.toggle-warning]="!useRag()"
            [checked]="useRag()"
            (change)="onToggleRag($event)"
          />
          <span [class.text-success]="useRag()" [class.text-warning]="!useRag()">
            {{ (useRag() ? 'topbar.ragOn' : 'topbar.ragOff') | transloco }}
          </span>
        </label>
        @if (ready()) {
          <span class="badge badge-success badge-outline max-w-[44ch] truncate">{{ statusText() }}</span>
        } @else {
          <div class="flex items-center gap-2">
            <progress class="progress progress-primary w-40" [attr.value]="progress()" max="100"></progress>
            <span class="max-w-[34ch] truncate text-xs text-base-content/60">{{ statusText() }}</span>
          </div>
        }
      </div>
    </header>
  `,
})
export class TopbarComponent {
  readonly languages = [
    { code: 'de', label: 'DE' },
    { code: 'en', label: 'EN' },
  ];

  readonly useRag = input.required<boolean>();
  readonly ready = input.required<boolean>();
  readonly statusText = input.required<string>();
  readonly lang = input.required<string>();
  readonly progress = input<number | null>(0);
  readonly toggleRag = output<boolean>();
  readonly langChange = output<string>();

  onToggleRag(event: Event): void {
    this.toggleRag.emit((event.target as HTMLInputElement).checked);
  }
}
