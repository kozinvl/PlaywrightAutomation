import { test, expect } from "@playwright/test";
import { DashboardPage } from "../app/pages/dashboard.page";

test.describe('Dashboard Page', () => {
  test('search section loaded', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);

    await dashboardPage.open();
    await dashboardPage.isLoaded();

    await dashboardPage.expectSpinnerLoaded();
  });

  test('navigation bar loaded', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.open();

    for (const [navBar, MenuItems] of Object.entries(dashboardPage.navigationBar)) {
      for (const eachItem of MenuItems) {
        await expect(page.locator(navBar, { hasText: eachItem })).toBeVisible();
      }
    }
  });
});
