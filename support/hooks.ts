import {
  AfterAll,
  BeforeAll,
  setWorldConstructor,
  World,
  setDefaultTimeout,
} from '@cucumber/cucumber'
import { chromium, Browser, Page } from 'playwright'
export { expect } from '@playwright/test'

export let browser: Browser
export let page: Page

setWorldConstructor(World)
setDefaultTimeout(60 * 1000)

BeforeAll({ timeout: 60 * 1000 }, async function () {
  browser = await chromium.launch({ headless: false })
  const context = await browser.newContext({
    baseURL: 'https://phptravels.net',
  })
  page = await context.newPage()
  return page
})

AfterAll({ timeout: 60 * 1000 }, async function () {
  return await browser.close()
})
