import { APIRequestContext, APIResponse } from '@playwright/test'
import { testConfig } from '../testConfig'

export class AuthController {
  public cookies: Awaited<ReturnType<APIRequestContext['storageState']>>['cookies'] = []

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
    const csrfToken = await this.getCsrfToken()

    const response = await this.request.post('/login', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Origin: testConfig.baseURL,
        Referer: `${testConfig.baseURL}/login`,
      },
      form: {
        csrf_token: csrfToken,
        email: data.email,
        password: data.password,
      },
    })

    if (!response.ok() || !response.url().includes('/dashboard')) {
      throw new Error(`Headless login failed with status ${response.status()} at ${response.url()}`)
    }

    await this.syncCookies()

    return response
  }

  /**
   * Gets the CSRF token from the login page that the current site requires for authentication.
   */
  async getCsrfToken(): Promise<string> {
    const response = await this.request.get('/login')
    const html = await response.text()
    const match = html.match(/name="csrf_token"\s+value="([^"]+)"/)

    if (!match) {
      throw new Error('csrf_token is not found on the login page')
    }

    return match[1]
  }

  /**
   * Copies the authenticated API request cookies so they can be applied to the browser context.
   */
  private async syncCookies(): Promise<void> {
    const storageState = await this.request.storageState()
    this.cookies = storageState.cookies.filter(cookie => cookie.domain.includes('phptravels.net'))

    if (this.cookies.length === 0) {
      throw new Error('Authenticated cookies were not captured from the API request context')
    }
  }
}
