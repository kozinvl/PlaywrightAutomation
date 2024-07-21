import { expect } from '@playwright/test'
import { BasePage } from '../abstractClasses'

export class DashboardPage extends BasePage {
  public readonly pagePath = '/dashboard'

  public walletCard = this.page.locator('.card')
  public myBookings = this.page.getByRole('link', { name: 'My Bookings' })

  /**
   * Asserts that the 'My Bookings' element is visible.
   */
  async expectLoaded(): Promise<void> {
    await expect(this.myBookings).toBeVisible()
  }
}
