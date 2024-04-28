import { expect } from "@playwright/test";
import { BasePage } from "../abstractClasses";
import { Page } from "@playwright/test";

export class FormAuthenticationPage extends BasePage {
  public readonly pagePath = "/login";

  private signInButton = this.page.getByRole("button", { name: "Login" });
  private emailInput = this.page.getByLabel("Email Address");
  private passwordInput = this.page.getByPlaceholder("******");
  public readonly signUpButton = this.page.getByRole("link", { name: "Signup" });

  constructor(page: Page) {
    super(page);
  }

  async expectLoaded() {
    await expect(this.signInButton).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
  }

  async performAuthentication(email: string, password: string) {
    await this.expectLoaded();

    await this.passwordInput.fill(password);
    await this.emailInput.fill(email);

    await this.signInButton.click();
  }
}
