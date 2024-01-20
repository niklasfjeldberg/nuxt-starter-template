import { defineVitestConfig } from '@nuxt/test-utils/config';
import { coverageConfigDefaults, configDefaults } from 'vitest/config';

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    exclude: [...configDefaults.exclude, '.DEV/*', '**/_*.{vue,ts}'],
    coverage: {
      reportsDirectory: 'coverage',
      exclude: [
        ...coverageConfigDefaults.exclude,
        'types/**',
        'scripts/**',
        'data/configs/**',
        'pwa-assets.config.ts',
        '.DEV',
        '.nuxt',
        'node_modules',
        // '**/_*.{vue,ts}', // Skip all files that start with _
      ],
    },
  },
});
