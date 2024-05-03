import type { Page } from "@playwright/test";

export abstract class PageHolder {
  constructor(protected page: Page) {}
}

export abstract class Component {
  
  abstract expectLoaded(message?: string): Promise<void>;
  
  constructor(protected page: Page) {}

  async isLoaded(): Promise<boolean> {
    try {
      await this.expectLoaded();
      return true
    } catch { return false }
  }
}

export abstract class BasePage extends Component {
  public abstract pagePath: string;

  async open(path?: string) {
    await this.page.goto(path ?? this.pagePath);

    await this.expectLoaded();
  }
}
