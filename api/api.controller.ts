import { APIRequestContext, APIResponse } from "@playwright/test";
import { testConfig } from "../testConfig";

export class AuthController {
  public sessionCookies: string[];
  public setCookie: string;

  public constructor(protected request: APIRequestContext) {}

  /**
   * Logs in the user by sending a POST request to the login endpoint with the provided email and password.
   *
   * @param {Object} data - An object containing the email and password of the user.
   * @param {string} data.email - The email of the user.
   * @param {string} data.password - The password of the user.
   * @return {Promise<APIResponse>} A Promise that resolves to the APIResponse of the login request.
   */
  async login(data: { email: string; password: string }): Promise<APIResponse> {
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

  /**
   * Retrieves the API response by sending a GET request to the specified base URL.
   *
   * @return {Promise<APIResponse>} The API response object.
   */
  async getRequest(): Promise<APIResponse> {
    return await this.request.get(`${testConfig.baseURL}`);
  }

  /**
   * Retrieves the set-cookie header from the API response.
   *
   * @param {APIResponse} request - The API response object.
   * @return {string} The set-cookie header value.
   */
  private getSetCookieHeader(request: APIResponse): string {
    return (this.setCookie = request.headers()["set-cookie"]);
  }
}
