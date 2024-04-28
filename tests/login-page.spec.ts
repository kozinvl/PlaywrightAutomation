import { test, expect } from "@playwright/test";
import { FormAuthenticationPage } from "../app/pages/login.page";
import { DashboardPage } from '../app/pages/dashboard.page'

test.describe("Authentication Page", () => {
  test("there is login form", async ({ page }) => {
    const formAuthPage = new FormAuthenticationPage(page);
    await formAuthPage.open()
    
    expect(await formAuthPage.isLoaded()).toBeTruthy()
    
  });

  test("there is signup", async ({ page }) => {
    const formAuthPage = new FormAuthenticationPage(page);
    await formAuthPage.open();

    await expect(formAuthPage.signUpButton).toBeVisible();
  });
});
