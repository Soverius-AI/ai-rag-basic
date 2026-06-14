// Flat ESLint config (ESM — the package is "type": "module").
// Run with the eslint CLI directly (`npm run lint`); the Angular CLI's `ng lint`
// is gated to a newer Node than this environment provides.
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import globals from 'globals';

export default tseslint.config(
  {
    // Never lint build output, generated data, or the host page (not a
    // component template). Component templates are inline, linted via the
    // TS processor below.
    ignores: ['dist/', 'out-tsc/', '.angular/', 'coverage/', 'public/', 'src/index.html'],
  },
  {
    // Angular application code (browser).
    files: ['src/**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'app', style: 'camelCase' }],
      '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'app', style: 'kebab-case' }],
    },
  },
  {
    // Angular component templates (inline + .html).
    files: ['src/**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
  },
  {
    // Offline pipeline scripts (Node).
    files: ['pipeline/**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
);
