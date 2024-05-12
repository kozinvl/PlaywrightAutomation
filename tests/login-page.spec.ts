import { test, expect } from '@playwright/test'
import { FormAuthenticationPage, DashboardPage } from '@pages'

test.describe('Authentication Page', () => {
  let formAuthPage: FormAuthenticationPage

  test.beforeEach(async ({ page }) => {
    formAuthPage = new FormAuthenticationPage(page)
    await formAuthPage.open()
  })

  test('there is login form', async () => {
    expect(await formAuthPage.isLoaded()).toBeTruthy()
  })

  test('there is signup', async () => {
    await expect(formAuthPage.signUpButton).toBeVisible()
  })

  test('there is successful authentication', async ({ page }) => {
    await formAuthPage.performAuthentication()

    await expect(new DashboardPage(page).walletCard).toBeVisible()
  })
})
