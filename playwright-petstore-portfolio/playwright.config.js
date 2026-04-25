// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30000,

  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    navigationTimeout: 15000,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  reporter: [['html', { open: 'never' }]],
});
