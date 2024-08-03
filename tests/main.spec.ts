import { expect } from '@playwright/test'
import { test } from '@fixtures'

test.describe('Main Page', () => {
  test('search section is loaded', async ({ main }) => {
    await main.expectSpinnerToBeHidden()
  })

  test('navigation bar loaded', async ({ main, page }) => {
    for (const [navBar, navItems] of Object.entries(main.navigationBar)) {
      for (const eachItem of navItems) {
        await expect(page.locator(navBar, { hasText: eachItem })).toBeVisible()
      }
    }
  })
})
