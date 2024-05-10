import { expect } from '@playwright/test'
import { testFixture } from '../fixtures'

testFixture.describe('Main Page', () => {
  testFixture('search trip section loaded', async ({ main }) => {
    await main.expectSpinnerLoaded()
  })

  testFixture('navigation bar loaded', async ({ main, page }) => {
    for (const [navBar, navItems] of Object.entries(main.navigationBar)) {
      for (const eachItem of navItems) {
        await expect(page.locator(navBar, { hasText: eachItem })).toBeVisible()
      }
    }
  })
})
