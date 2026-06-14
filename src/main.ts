import { provideHttpClient } from '@angular/common/http';
import { isDevMode, provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideTransloco } from '@jsverse/transloco';
import { AppComponent } from './app/app.component';
import { TranslocoHttpLoader } from './app/transloco-loader';

// Angular 22 is zoneless by default; this app is fully signal-based, so no zone.js.
bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient(),
    // provideTransloco returns an EnvironmentProviders[] — spread so each entry
    // lands at the top level of the providers array (otherwise TRANSLOCO_LOADER
    // is nested one level deep and never registered → NG0203).
    ...provideTransloco({
      config: {
        availableLangs: ['de', 'en'],
        defaultLang: 'de',
        fallbackLang: 'de',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
}).catch((err) => console.error(err));
