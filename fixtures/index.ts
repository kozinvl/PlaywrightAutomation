import { test as base } from "@playwright/test";
import { MainPage } from "../app/pages/main.page";

export const testFixture = base.extend<{ main: MainPage }>({
  main: async ({ page }, use) => {
    const main = new MainPage(page);
    await main.open();

    await use(main);
  },
});