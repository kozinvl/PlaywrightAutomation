import { expect } from '@playwright/test'
import { test } from '@fixtures'

test.describe('Main Page', () => {
  // eslint-disable-next-line playwright/expect-expect
  test('search section is loaded', async ({ main }) => {
    await main.expectSpinnerLoaded()
  })

  test('navigation bar loaded', async ({ main, page }) => {
    for (const [navBar, navItems] of Object.entries(main.navigationBar)) {
      for (const eachItem of navItems) {
        await expect(page.locator(navBar, { hasText: eachItem })).toBeVisible()
      }
    }
  })
})
