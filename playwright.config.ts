import { defineConfig, devices } from '@playwright/test'
import { testConfig } from './testConfig'
import dotenv from 'dotenv'
dotenv.config()

export default defineConfig({
  timeout: 30 * 1000,
  testDir: './tests',
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['list'], ['html']],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    locale: 'en-US',
    timezoneId: 'America/New_York',
    baseURL: testConfig.baseURL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    headless: process.env.CI ? true : false,
  },
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
      },
    },
  ],
})
