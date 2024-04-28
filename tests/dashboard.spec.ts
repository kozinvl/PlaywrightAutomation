import { test } from "@playwright/test";
import { DashboardPage } from "../app/pages/dashboard.page";

test.describe("Dashboard Page", () => {
  test("search section", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);

    await dashboardPage.open();
    await dashboardPage.isLoaded();

    await dashboardPage.expectSpinnerLoaded();
  });
});
