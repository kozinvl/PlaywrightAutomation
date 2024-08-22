import { expect } from '@playwright/test'
import { BasePage } from '../abstractClasses'

export class MainPage extends BasePage {
  public readonly pagePath = '/'

  private homeBanner = this.page.locator('.homepage')
  private homeLoadingSpinner = this.page.locator('.loading_home')
  public readonly navigationBar: { [key: string]: string[] } = {
    '.navbar-nav': this.navigationItems(),
  }

  public readonly mobileBanner = this.page.locator('.mobile_apps')
  public readonly playStoreBanner = this.mobileBanner.getByRole('link', { name: 'Playstore' })
  public readonly appleStoreBanner = this.mobileBanner.getByRole('link', { name: 'App Store' })

  navigationItems(): string[] {
    return ['Flights', 'Hotels', 'Tours', 'Cars', 'Blogs']
  }

  async expectLoaded(): Promise<void> {
    await expect(this.homeBanner).toBeVisible()
    await expect(this.homeLoadingSpinner).toBeVisible()
  }

  async expectSpinnerToBeHidden(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded')

    await expect(this.homeLoadingSpinner).toBeHidden()
  }
}
