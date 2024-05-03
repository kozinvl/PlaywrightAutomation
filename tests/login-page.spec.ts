import { test, expect } from "@playwright/test";
import { FormAuthenticationPage } from "../app/pages/login.page";
import { testConfig } from "../testConfig";
import { Application } from "../app";

test.describe("Authentication Page", () => {
  let formAuthPage: FormAuthenticationPage;

  test.beforeEach(async ({ page }) => {
    formAuthPage = new FormAuthenticationPage(page);
    await formAuthPage.open();
  });

  test("there is login form", async () => {
    expect(await formAuthPage.isLoaded()).toBeTruthy();
  });

  test("there is signup", async () => {
    await expect(formAuthPage.signUpButton).toBeVisible();
  });

  test("there is successful authentication", async () => {
    await formAuthPage.performAuthentication({
      email: testConfig.email,
      password: testConfig.password,
    });
  });

  test.describe("API logging", () => {
    test('can login', async ({ request, page }) => {
      const loginPage = new Application(request);
      await loginPage.headlessLogin();
      await loginPage.setCookieLogin(page);

      await page.goto("https://phptravels.net/dashboard");
    });
  });
});
