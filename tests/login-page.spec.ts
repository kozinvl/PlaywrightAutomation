import { test, expect } from "@playwright/test";
import { FormAuthenticationPage } from "../app/pages/login.page";

test.describe("Authentication Page", () => {
  let formAuthPage: FormAuthenticationPage;
  let credentials = {
    email: 'admin@phptravels.com',
    password: 'demoadmin',
  };

  test.beforeEach(async ({ page }) => {
    formAuthPage = new FormAuthenticationPage(page);
    await formAuthPage.open();
  });

  test('there is login form', async () => {
    expect(await formAuthPage.isLoaded()).toBeTruthy();
  });

  test('there is signup', async () => {
    await expect(formAuthPage.signUpButton).toBeVisible();
  });

  test('there is successful authentication', async () => {
    await formAuthPage.performAuthentication(credentials);
  });
});
