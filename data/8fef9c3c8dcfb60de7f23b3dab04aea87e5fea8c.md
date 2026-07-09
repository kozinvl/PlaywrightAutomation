# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: main.spec.ts >> Main Page >> navigation bar loaded
- Location: tests/main.spec.ts:9:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('tab', { name: 'Cars' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeVisible" with timeout 5000ms
  - waiting for getByRole('tab', { name: 'Cars' })

```

```yaml
- banner:
  - link "PHPTARVELS":
    - /url: https://phptravels.net/
    - img "PHPTARVELS"
  - navigation:
    - button "Services expand_more":
      - img
      - text: Services expand_more
    - button "Company expand_more":
      - img
      - text: Company expand_more
    - link "Blogs":
      - /url: https://phptravels.net/page/blog
      - img
      - text: Blogs
  - button "USD":
    - img
    - text: USD
  - button "English flag en":
    - img "English flag"
    - text: en
  - link "login Login":
    - /url: https://phptravels.net/login
  - button "person_add Signup expand_more"
- img "Hero"
- heading "Travel the way you love!" [level=1]
- paragraph: Let's help you plan your next journey the one that will leave a lifetime of memories.
- tablist:
  - tab "tour Tours"
  - tab "directions_bus bus"
  - tab "sim_card eSIM"
  - tab "directions_boat ferries"
  - tab "flight_takeoff Flights"
  - tab "hotel Stays"
  - tab "mosque Umrah"
  - tab "card_membership Visa"
- tabpanel:
  - img
  - text: Destination Search By City expand_more
  - img
  - text: Start Date
  - textbox "Start Date": July 12, 2026
  - text: schedule Duration Any Duration expand_more category Tour Type Any Type expand_more
  - img
  - text: Travelers 1 Traveler expand_more
  - button "Search Tours":
    - img
- heading "Featured eSIMs" [level=2]
- paragraph: Featured countries. Open each country to view all available packages.
- button "Scroll featured eSIM left" [disabled]: chevron_left
- button "Scroll featured eSIM right" [disabled]: chevron_right
- link "Country AM AM Armenia eSIM Armenia":
  - /url: https://phptravels.net/esim/40/am/all/
  - text: Country AM
  - img "AM"
  - heading "Armenia eSIM" [level=3]
  - paragraph: Armenia
- link "Country AR AR Argentina eSIM Argentina":
  - /url: https://phptravels.net/esim/40/ar/all/
  - text: Country AR
  - img "AR"
  - heading "Argentina eSIM" [level=3]
  - paragraph: Argentina
- link "Country AQ AQ Antarctica eSIM Antarctica":
  - /url: https://phptravels.net/esim/40/aq/all/
  - text: Country AQ
  - img "AQ"
  - heading "Antarctica eSIM" [level=3]
  - paragraph: Antarctica
- link "Country AI AI Anguilla eSIM Anguilla":
  - /url: https://phptravels.net/esim/40/ai/all/
  - text: Country AI
  - img "AI"
  - heading "Anguilla eSIM" [level=3]
  - paragraph: Anguilla
- link "Country AO AO Angola eSIM Angola":
  - /url: https://phptravels.net/esim/40/ao/all/
  - text: Country AO
  - img "AO"
  - heading "Angola eSIM" [level=3]
  - paragraph: Angola
- link "Country AD AD Andorra eSIM Andorra":
  - /url: https://phptravels.net/esim/40/ad/all/
  - text: Country AD
  - img "AD"
  - heading "Andorra eSIM" [level=3]
  - paragraph: Andorra
- link "Country AS AS American Samoa eSIM American Samoa":
  - /url: https://phptravels.net/esim/40/as/all/
  - text: Country AS
  - img "AS"
  - heading "American Samoa eSIM" [level=3]
  - paragraph: American Samoa
- link "Country DZ DZ Algeria eSIM Algeria":
  - /url: https://phptravels.net/esim/40/dz/all/
  - text: Country DZ
  - img "DZ"
  - heading "Algeria eSIM" [level=3]
  - paragraph: Algeria
- heading "Popular Tours" [level=2]
- text: verified We price match task_alt Tour Booking Guarantee workspace_premium Tour Quality Guarantee
- button "Dubai"
- button "New York"
- button "Barcelona"
- button "Tokyo"
- button "Maldives"
- button "Paris"
- button "London"
- button "Rome"
- text: 10% OFF location_on Dubai
- 'img "Dubai: Skip-The-Line Ticket to Dubai Miracle Garden"'
- 'heading "Dubai: Skip-The-Line Ticket to Dubai Miracle Garden" [level=3]'
- text: schedule 2 Days / 1 Night From USD 151.41 /Person
- img
- text: "5.0"
- link:
  - /url: https://phptravels.net/tour/dubai-skip-the-line-ticket-to-dubai-miracle-garden/100/tours/12-07-2026/2/2-0
- text: 15% OFF location_on Dubai
- img "Private Dubai Airport Transfer DXB to Dubai City"
- heading "Private Dubai Airport Transfer DXB to Dubai City" [level=3]
- text: schedule 4 Days / 3 Nights From USD 284.13 /Person
- img
- text: "5.0"
- link:
  - /url: https://phptravels.net/tour/private-dubai-airport-transfer-dxb-to-dubai-city/101/tours/12-07-2026/4/2-0
- text: 23% OFF location_on Dubai
- img "Dubai Frame"
- heading "Dubai Frame" [level=3]
- text: schedule 2 Days / 1 Night From USD 454.23 /Person
- img
- text: "5.0"
- link:
  - /url: https://phptravels.net/tour/dubai-frame/102/tours/12-07-2026/2/2-0
- text: 24% OFF location_on Dubai
- img "Ain Dubai Dubai Eye"
- heading "Ain Dubai Dubai Eye" [level=3]
- text: schedule 3 Days / 2 Nights From USD 302.40 /Person
- img
- text: "5.0"
- link:
  - /url: https://phptravels.net/tour/ain-dubai-dubai-eye/103/tours/12-07-2026/3/2-0
- text: 13% OFF location_on Dubai
- 'img "Dubai City Tour: Experience Top Attractions of Dubai"'
- 'heading "Dubai City Tour: Experience Top Attractions of Dubai" [level=3]'
- text: schedule 4 Days / 3 Nights From USD 630.63 /Person
- img
- text: "5.0"
- link:
  - /url: https://phptravels.net/tour/dubai-city-tour-experience-top-attractions-of-dubai/104/tours/12-07-2026/4/2-0
- text: 22% OFF location_on Dubai
- img "Ski Dubai"
- heading "Ski Dubai" [level=3]
- text: schedule 7 Days / 6 Nights From USD 767.55 /Person
- img
- text: "5.0"
- link:
  - /url: https://phptravels.net/tour/ski-dubai/105/tours/12-07-2026/7/2-0
- text: 15% OFF location_on Dubai
- 'img "Dubai City Tour : Explore Old & Modern Dubai"'
- 'heading "Dubai City Tour : Explore Old & Modern Dubai" [level=3]'
- text: schedule 6 Days / 5 Nights From USD 362.25 /Person
- img
- text: "5.0"
- link:
  - /url: https://phptravels.net/tour/dubai-city-tour-explore-old-modern-dubai/106/tours/12-07-2026/6/2-0
- text: 8% OFF location_on Dubai
- 'img "Dubai Private Transfer: Cruise Port to Dubai Hotel"'
- 'heading "Dubai Private Transfer: Cruise Port to Dubai Hotel" [level=3]'
- text: schedule 3 Days / 2 Nights From USD 270.27 /Person
- img
- text: "5.0"
- link:
  - /url: https://phptravels.net/tour/dubai-private-transfer-cruise-port-to-dubai-hotel/107/tours/12-07-2026/3/2-0
- img "Mobile Apps"
- heading "Travel on the go with our app" [level=1]
- paragraph: Book from your phone anytime, anywhere.
- link "Download on the App Store":
  - /url: https://play.google.com/store/apps/details?id=com.phptravels.android
  - img
  - text: Download on the App Store
- link "Get it on Google Play":
  - /url: https://apps.apple.com/us/app/phptravels/id6776969102
  - img
  - text: Get it on Google Play
- contentinfo:
  - link "PHPTARVELS":
    - /url: https://phptravels.net/
    - img "PHPTARVELS"
  - paragraph: Your trusted travel partner for unforgettable journeys. Discover the world with our comprehensive booking services.
  - text: headset_mic
  - paragraph: 24/7 Support
  - paragraph: Always here to help
  - link "Email Support":
    - /url: mailto:email@agency.com
    - text: mail
  - link "WhatsApp Support":
    - /url: https://wa.me/123456789
    - img
  - heading "Company" [level=4]
  - list:
    - listitem:
      - link "Contact us":
        - /url: https://phptravels.net/page/contact-us
    - listitem:
      - link "About us":
        - /url: https://phptravels.net/page/about-us
    - listitem:
      - link "Cookies Policy":
        - /url: https://phptravels.net/page/cookies-policy
    - listitem:
      - link "Privacy Policy":
        - /url: https://phptravels.net/page/privacy-policy
    - listitem:
      - link "Become a Supplier":
        - /url: https://phptravels.net/page/become-a-supplier
    - listitem:
      - link "Terms of Use":
        - /url: https://phptravels.net/page/terms-of-use
  - heading "Support" [level=4]
  - list:
    - listitem:
      - link "Affiliate Program":
        - /url: https://phptravels.net/page/affiliate-program
    - listitem:
      - link "Investors":
        - /url: https://phptravels.net/page/investors
    - listitem:
      - link "Careers and Jobs":
        - /url: https://phptravels.net/page/careers-and-jobs
    - listitem:
      - link "How to Book":
        - /url: https://phptravels.net/page/how-to-book
    - listitem:
      - link "File a Claim":
        - /url: https://phptravels.net/page/file-a-claim
    - listitem:
      - link "Refund Policy":
        - /url: https://phptravels.net/page/refund-policy
  - heading "Explore" [level=4]
  - list:
    - listitem:
      - link "Best Travel Deals":
        - /url: https://phptravels.net/page/best-travel-deals
    - listitem:
      - link "Travel Documents":
        - /url: https://phptravels.net/page/travel-documents
    - listitem:
      - link "Travel Insurance":
        - /url: https://phptravels.net/page/travel-insurance
    - listitem:
      - link "Disruption":
        - /url: https://phptravels.net/page/disruption
    - listitem:
      - link "FAQ / Answers":
        - /url: https://phptravels.net/page/frequently-asked-questions
    - listitem:
      - link "Accessibility":
        - /url: https://phptravels.net/page/accessibility
  - heading "Get In Touch" [level=4]
  - text: location_on
  - paragraph: 71 St, Suite 900 San Francisco, United States
  - text: call
  - link "+123456789":
    - /url: tel:+123456789
  - text: mail
  - link "email@agency.com":
    - /url: mailto:email@agency.com
  - link "Facebook":
    - /url: https://facebook.com/phptravels
    - img
  - link "Twitter":
    - /url: https://twitter.com/phptravels
    - img
  - link "Instagram":
    - /url: https://instagram.com/phptravels
    - img
  - link "YouTube":
    - /url: https://youtube.com/@phptravels
    - img
  - link "LinkedIn":
    - /url: https://linkedin.com/company/phptravels
    - img
  - paragraph: © 2026 PHPTARVELS. All rights reserved.
  - paragraph:
    - text: Powered by
    - link "PHPTRAVELS":
      - /url: https://phptravels.com
  - link "Privacy Policy":
    - /url: https://phptravels.net/page/privacy-policy
  - text: •
  - link "Terms of Use":
    - /url: https://phptravels.net/page/terms-of-use
  - text: •
  - link "Cookies Policy":
    - /url: https://phptravels.net/page/cookies-policy
  - text: •
  - link "Refund Policy":
    - /url: https://phptravels.net/page/refund-policy
  - text: verified_user SSL Secure
  - link "verified IATA":
    - /url: https://iata.co
  - text: credit_card PCI DSS
- text: ⚠️
- 'heading "Important Notice: Demo Environment" [level=2]'
- paragraph: Please read this information carefully before using the system
- text: currency_exchange
- heading "Pricing May Not Reflect Real Rates" [level=3]
- paragraph: Prices displayed in this demo environment are simulated and may differ significantly from real-world rates. Live rates require valid supplier API credentials to be configured in your account settings.
- text: vpn_key
- heading "Configure Your Own API Credentials" [level=3]
- paragraph:
  - text: To access real supplier data and accurate pricing, you must add your own API keys through
  - strong: Admin Settings → Modules
  - text: . This will enable live data integration and replace all demo content with real-time information.
- text: credit_card
- heading "Testing Environment Only - NO Real Payments" [level=3]
- paragraph: This is a testing platform for development purposes. Do not use real payment methods or credit card information. All payment gateway integrations are configured in sandbox/testing mode exclusively.
- text: storage
- heading "Demo Data May Be Reset Periodically" [level=3]
- paragraph: Demo environment data, including bookings, reservations, and settings, may be reset periodically for maintenance. Do not rely on this system for storing critical business information or live customer data.
- text: help
- heading "Need Help or Ready for Production?" [level=3]
- paragraph:
  - text: For comprehensive documentation, technical support, API integration guides, and assistance with moving to production, visit
  - link "phptravels.com":
    - /url: https://phptravels.com
- link "Learn More":
  - /url: https://phptravels.com/pricing
- button "I Understand & Continue"
```

# Test source

```ts
  1  | import { expect } from '@playwright/test'
  2  | import { test } from '@fixtures'
  3  | 
  4  | test.describe('Main Page', { tag: ['@main'] }, () => {
  5  |   test('search section is loaded', async ({ main }) => {
  6  |     await main.expectSpinnerToBeHidden()
  7  |   })
  8  | 
  9  |   test('navigation bar loaded', async ({ main, page }) => {
  10 |     for (const [navBar, navItems] of Object.entries(main.navigationBar)) {
  11 |       for (const eachItem of navItems) {
> 12 |         await expect.soft(page.getByRole('tab', { name: eachItem })).toBeVisible()
     |                                                                      ^ Error: expect(locator).toBeVisible() failed
  13 |       }
  14 |     }
  15 |   })
  16 | 
  17 |   test('can load mobile apps banner', { tag: ['@smoke'] }, async ({ main }) => {
  18 |     await expect(main.googlePlayBanner).toBeVisible()
  19 |     await expect(main.appleStoreBanner).toBeVisible()
  20 |   })
  21 | })
  22 | 
```