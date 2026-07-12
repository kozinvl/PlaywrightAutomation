import { expect } from '@playwright/test'
import { BasePage } from '../abstractClasses'

export class MainPage extends BasePage {
  public readonly pagePath = '/'

  private background = this.page.locator('.bg-background')
  private homeLoadingSpinner = this.page.locator('.loading_home')
  private demoWarningContinueButton = this.page.getByRole('button', {
    name: 'I understand & Continue',
  })
  public readonly navigationBar: { [key: string]: string[] } = {
    tab: this.navigationItems(),
  }

  public readonly googlePlayBanner = this.page.getByRole('link', { name: 'Google Play' })
  public readonly appleStoreBanner = this.page.getByRole('link', { name: 'App Store' })

  navigationItems(): string[] {
    return ['Stays', 'Flights', 'Tours', 'bus', 'eSIM', 'ferries', 'Umrah', 'Visa']
  }

  async dismissDemoWarningModal(): Promise<void> {
    try {
      if (await this.demoWarningContinueButton.isVisible({ timeout: 3000 })) {
        await this.demoWarningContinueButton.click()
      }
    } catch {
      // The warning modal is optional and can be absent.
    }
  }

  async expectLoaded(): Promise<void> {
    await this.dismissDemoWarningModal()

    await expect(this.background).toBeVisible()
  }

  async expectSpinnerToBeHidden(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded')

    await expect(this.homeLoadingSpinner).toBeHidden()
  }
}
