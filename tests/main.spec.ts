import { expect } from '@playwright/test'
import { test } from '@fixtures'

test.describe('Main Page', { tag: ['@main'] }, () => {
  test('search section is loaded', async ({ main }) => {
    await main.expectSpinnerToBeHidden()
  })

  test('navigation bar loaded', async ({ main, page }) => {
    await main.expectSpinnerToBeHidden()

    const tablist = page.getByRole('tablist').first()
    const stableTabLabels = ['Stays', 'Flights', 'Tours', 'Visa']

    await expect(tablist).toBeVisible()
    await expect
      .poll(async () => tablist.getByRole('tab').count())
      .toBeGreaterThanOrEqual(stableTabLabels.length)

    for (const label of stableTabLabels) {
      await expect.soft(tablist.getByRole('tab', { name: new RegExp(label, 'i') })).toBeVisible()
    }
  })

  test('can load mobile apps banner', { tag: ['@smoke'] }, async ({ main }) => {
    await expect(main.googlePlayBanner).toBeVisible()
    await expect(main.appleStoreBanner).toBeVisible()
  })
})
