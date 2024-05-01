import { expect } from "@playwright/test";
import { testFixture } from "../fixtures/";

testFixture.describe("Dashboard Page", () => {
  testFixture("search trip section loaded", async ({ dashboard }) => {
    await dashboard.expectSpinnerLoaded();
  });

  testFixture.skip('navigation bar loaded', async ({ dashboard, page }) => {
    for (const [navBar, navItems] of Object.entries(dashboard.navigationBar)) {
      for (const eachItem of navItems) {
        await expect(page.locator(navBar, { hasText: eachItem })).toBeVisible();
      }
    }
  });
});
