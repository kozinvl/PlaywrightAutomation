import { test as base } from "@playwright/test";
import { DashboardPage } from "../app/pages/dashboard.page";

export const testFixture = base.extend<{ dashboard: DashboardPage }>({
  dashboard: async ({ page }, use) => {
    const dashboard = new DashboardPage(page);
    await dashboard.open();

    await use(dashboard);
  },
});