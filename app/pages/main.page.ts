import { expect } from '@playwright/test'
import { BasePage } from '../abstractClasses'

export class MainPage extends BasePage {
  public readonly pagePath = '/'

  private homeBanner = this.page.locator('.homepage')
  private homeLoadingSpinner = this.page.locator('.loading_home')
  public readonly navigationBar: { [key: string]: string[] } = {
    '.navbar-nav': this.navigationItems(),
  }

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
