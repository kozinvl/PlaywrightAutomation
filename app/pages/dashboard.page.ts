import { expect } from '@playwright/test'
import { BasePage } from '../abstractClasses'

export class DashboardPage extends BasePage {
  public readonly pagePath = '/dashboard'

  public walletCard = this.page.locator('.card')
  public myBookings = this.page.getByRole('link', { name: 'My Bookings' })

  async expectLoaded() {
    await expect(this.myBookings).toBeVisible()
  }
}
