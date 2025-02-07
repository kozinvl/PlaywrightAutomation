import { expect } from '@playwright/test'
import { test } from '@fixtures'

test.describe('Main Page', { tag: ['@main'] }, () => {
  test('search section is loaded', async ({ main }) => {
    await main.expectSpinnerToBeHidden()
  })

  test('navigation bar loaded', async ({ main, page }) => {
    for (const [navBar, navItems] of Object.entries(main.navigationBar)) {
      for (const eachItem of navItems) {
        await expect.soft(page.getByRole('tab', { name: eachItem })).toBeVisible()
      }
    }
  })

  test('can load mobile apps banner', { tag: ['@smoke'] }, async ({ main }) => {
    await expect(main.playStoreBanner).toBeVisible()
    await expect(main.appleStoreBanner).toBeVisible()
  })
})
