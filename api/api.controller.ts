import { APIRequestContext, APIResponse } from "@playwright/test";
import { testConfig } from "../testConfig";

export class AuthController {
  public sessionCookies: string[];
  public setCookie: string;

  public constructor(protected request: APIRequestContext) {}

  async login(data: { email: string; password: string }) {
    await this.getSessionCookies();

    return await this.request.post("https://phptravels.net/login", {
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-request-With": "XMLHttpRequest",
        Cookie: `${this.sessionCookies[0]}=${this.sessionCookies[1]}`,
      },
      form: {
        password: testConfig.password,
        email: testConfig.email,
      },
    });
  }

  async getSessionCookies() {
    const response = await this.getRequest();

    let cookies = this.getSetCookieHeader(response);

    let cleanCookies = cookies.substring(0, cookies.indexOf(";"));
    this.sessionCookies = cleanCookies.split("=");

    return this.sessionCookies;
  }

  async getRequest(): Promise<APIResponse> {
    return await this.request.get(`${testConfig.baseURL}`);
  }

  private getSetCookieHeader(request: APIResponse) {
    return (this.setCookie = request.headers()["set-cookie"]);
  }
}
