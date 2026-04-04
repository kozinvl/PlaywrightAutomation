import { expect } from '@playwright/test'
import { BasePage } from '../abstractClasses'

export class DashboardPage extends BasePage {
  public readonly pagePath = '/dashboard'

  public dashboardHeading = this.page.getByRole('heading', { name: 'Dashboard' })
  public walletCard = this.dashboardHeading

  /**
   * Confirms the authenticated dashboard shell is visible.
   */
  async expectLoaded(): Promise<void> {
    await expect(this.dashboardHeading).toBeVisible()
  }
}
