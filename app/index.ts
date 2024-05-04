import { Page } from "@playwright/test";
import { AuthController } from "../api/api.controller";
import { testConfig } from "../testConfig";

export class Application extends AuthController {

  async headlessLogin() {
    await this.login({
      email: testConfig.email,
      password: testConfig.password,
    });
  }

  async setCookieLogin(page: Page) {
    await page.evaluate((cookie: string) => {
      document.cookie = cookie;
    }, this.setCookie);
  }
}