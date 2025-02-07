import { expect } from '@playwright/test'
import { BasePage } from '../abstractClasses'

export class MainPage extends BasePage {
  public readonly pagePath = '/'

  private homeBanner = this.page.locator('.homepage')
  private homeLoadingSpinner = this.page.locator('.loading_home')
  public readonly navigationBar: { [key: string]: string[] } = {
    tab: this.navigationItems(),
  }

  public readonly playStoreBanner = this.page.getByRole('link', { name: 'Playstore' })
  public readonly appleStoreBanner = this.page.getByRole('link', { name: 'App Store' })

  navigationItems(): string[] {
    return ['Flights', 'Hotels', 'Tours', 'Cars']
  }

  async expectLoaded(): Promise<void> {
    await expect(this.homeBanner).toBeVisible()
  }

  async expectSpinnerToBeHidden(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded')

    await expect(this.homeLoadingSpinner).toBeHidden()
  }
}
