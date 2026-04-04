import { expect } from '@playwright/test'
import { BasePage } from '../abstractClasses'

export class MainPage extends BasePage {
  public readonly pagePath = '/'

  private background = this.page.locator('.bg-background')
  private homeLoadingSpinner = this.page.locator('.loading_home')
  public readonly navigationBar: { [key: string]: string[] } = {
    tab: this.navigationItems(),
  }

  public readonly googlePlayBanner = this.page.getByRole('link', { name: 'Google Play' })
  public readonly appleStoreBanner = this.page.getByRole('link', { name: 'App Store' })

  navigationItems(): string[] {
    return ['Flights', 'Stays', 'Tours', 'Cars', 'Visa']
  }

  async expectLoaded(): Promise<void> {
    await expect(this.background).toBeVisible()
  }

  async expectSpinnerToBeHidden(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded')

    await expect(this.homeLoadingSpinner).toBeHidden()
  }
}
