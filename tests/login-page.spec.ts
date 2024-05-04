import { test, expect } from "@playwright/test";
import { FormAuthenticationPage } from "../app/pages/login.page";
import { testConfig } from "../testConfig";
import { Application } from "../app";
import { DashboardPage } from "../app/pages/dashboard.page";

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

  test('there is successful authentication', async () => {
    await formAuthPage.performAuthentication({
      email: testConfig.email,
      password: testConfig.password,
    });
  });

  test.describe("HeadlessLogin", () => {
    test('can login', async ({ request, page }) => {
      const app = new Application(request);
      await app.headlessLogin();
      await app.setCookieLogin(page);

      const dashboard = new DashboardPage(page)
      await dashboard.open()

      await expect(dashboard.walletCard).toBeVisible()
    });
  });
});
