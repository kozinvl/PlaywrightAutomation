import { test, expect } from '@playwright/test'
import { Application } from '../app'
import { DashboardPage   } from '@pages'

test.describe('Dashboard Page', () => {
  test.describe('HeadlessLogin', () => {
    test('can login', async ({ request, page }) => {
      const app = new Application(request)
      await app.headlessLogin()
      await app.setCookieLogin(page)

      const dashboard = new DashboardPage(page)
      await dashboard.open()

      await expect(dashboard.walletCard).toBeVisible()
    })
  })
})
