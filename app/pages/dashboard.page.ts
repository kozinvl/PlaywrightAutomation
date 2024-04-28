import { expect } from "@playwright/test";
import { BasePage } from "../abstractClasses";

export class DashboardPage extends BasePage {
  public pagePath = "/";

  private homeBanner = this.page.locator(".homepage");
  private homeLoadingSpinner = this.page.locator(".loading_home");

  async expectLoaded() {
    await expect(this.homeBanner).toBeVisible();
    await expect(this.homeLoadingSpinner).toBeVisible();
  }

  async expectSpinnerLoaded() {
    this.page.waitForLoadState("domcontentloaded");

    await expect(this.homeLoadingSpinner).not.toBeVisible();
  }
}
