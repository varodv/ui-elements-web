import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      exclude: [
        ...coverageConfigDefaults.exclude,
        '**/*.stories.ts',
        'storybook-static',
        'src/index.ts',
        'src/*/index.ts',
      ],
    },
  },
});
