import { expect } from '@playwright/test'
import { BasePage } from '../abstractClasses'
import { testConfig } from '../../testConfig'

export class FormAuthenticationPage extends BasePage {
  public readonly pagePath = '/login'

  private signInButton = this.page.getByRole('button', { name: 'Login' })
  private emailInput = this.page.locator('#email')
  private passwordInput = this.page.getByRole('textbox', { name: 'Password' })
  public signUpButton = this.page.getByRole('link', { name: 'Signup' })

  async expectLoaded(): Promise<void> {
    await expect(this.signInButton).toBeVisible()
    await expect(this.emailInput).toBeVisible()
    await expect(this.passwordInput).toBeVisible()
  }

  /**
   * Performs authentication using the provided credentials.
   *
   * @param {Object} credentials - The credentials for authentication.
   * @param {string} credentials.email - The email for authentication.
   * @param {string} credentials.password - The password for authentication.
   * @return {Promise<void>} A Promise that resolves when the authentication is complete.
   */
  async performAuthentication(
    credentials: { email: string; password: string } = {
      email: testConfig.email,
      password: testConfig.password,
    }
  ): Promise<void> {
    await this.passwordInput.fill(credentials.password)
    await this.emailInput.fill(credentials.email)

    await this.signInButton.click()
  }
}
