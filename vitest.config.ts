import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      exclude: [
        ...coverageConfigDefaults.exclude,
        'src/**/index.ts',
        'src/**/*.types.ts',
        '**/*.stories.ts',
        'storybook-static',
      ],
    },
  },
});
