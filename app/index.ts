import { Page } from '@playwright/test'
import { AuthController } from '../api/api.controller'
import { testConfig } from '../testConfig'

export class Application extends AuthController {
  /**
   * A function that performs a headless login using the provided testConfig email and password.
   *
   * @return {Promise<void>} A promise that resolves when the login is successful.
   */
  async headlessLogin(): Promise<void> {
    await this.login({
      email: testConfig.email,
      password: testConfig.password,
    })
  }

  /**
   * Sets a cookie in the browser context using the provided page object.
   *
   * @param {Page} page - The page object representing the browser context.
   * @return {Promise<void>} A promise that resolves when the cookie is set.
   */
  async setCookieLogin(page: Page): Promise<void> {
    await page.goto('/', { waitUntil: 'commit' })

    await page.evaluate((cookie: string) => {
      document.cookie = cookie
    }, this.setCookie as string)
  }
}
