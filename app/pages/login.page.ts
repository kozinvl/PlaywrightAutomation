import { expect } from '@playwright/test'
import { BasePage } from '../abstractClasses'
import { testConfig } from '../../testConfig'

export class FormAuthenticationPage extends BasePage {
  public readonly pagePath = '/login'

  private signInButton = this.page.getByRole('button', { name: 'Sign In' })
  private emailInput = this.page.getByRole('textbox', { name: 'Email Address' })
  private passwordInput = this.page.getByRole('textbox', { name: 'Password' })
  public signUpButton = this.page.getByRole('link', { name: 'Signup' })

  /**
   * Dismisses the demo warning modal if it appears on page load.
   * Clicks the "I understand & continue" button to close the overlay.
   *
   * @return {Promise<void>} A Promise that resolves when the modal is dismissed or not present.
   */
  async dismissDemoWarningModal(): Promise<void> {
    const continueButton = this.page.getByRole('button', { name: 'I understand & continue' })
    if (await continueButton.isVisible({ timeout: 3000 })) {
      await continueButton.click()
    }
  }

  async expectLoaded(): Promise<void> {
    await this.dismissDemoWarningModal()

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
