import { Given, Then, When } from '@cucumber/cucumber'
import { page, expect } from '../support/hooks'
import { DashboardPage, FormAuthenticationPage } from '@pages'

let formAuthPage: FormAuthenticationPage

Given('Login page is open', async () => {
  formAuthPage = new FormAuthenticationPage(page)
  await formAuthPage.open()
})

When('I fill login credentials', async function () {
  await formAuthPage.performAuthentication()
})

Then('Dashboard should be displayed', async function () {
  await expect(new DashboardPage(page).walletCard).toBeVisible()
})
