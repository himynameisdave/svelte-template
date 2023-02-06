import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import type { InlineConfig } from 'vitest';

const config: UserConfig & { test: InlineConfig } = {
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },
};

export default config;
