# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: main.spec.ts >> Main Page >> navigation bar loaded
- Location: tests/main.spec.ts:9:7

# Error details

```
Error: expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 4
Received:    2

Call Log:
- Timeout 5000ms exceeded while waiting on the predicate
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - link "PHPTARVELS" [ref=e5] [cursor=pointer]:
          - /url: https://phptravels.net/
          - img "PHPTARVELS" [ref=e6]
        - navigation "Menu" [ref=e8]:
          - button "Services" [ref=e10] [cursor=pointer]
          - button "Services" [ref=e20] [cursor=pointer]
          - button "More" [ref=e30] [cursor=pointer]
      - generic [ref=e35]:
        - generic [ref=e36]:
          - button "Currency" [ref=e38] [cursor=pointer]:
            - generic [ref=e44]: USD
          - button "Language" [ref=e48] [cursor=pointer]:
            - generic [ref=e49]: en
        - link "Support" [ref=e53] [cursor=pointer]:
          - /url: https://phptravels.net/page/contact-us
        - link "Login" [ref=e58] [cursor=pointer]:
          - /url: https://phptravels.net/login
        - button "Signup" [ref=e64] [cursor=pointer]
  - generic [ref=e74]:
    - generic [ref=e75]:
      - heading "Travel the way you love!" [level=1] [ref=e76]
      - paragraph [ref=e77]: Let’s help you plan your next journey the one that will leave a lifetime of memories.
      - generic [ref=e78]:
        - generic [ref=e79]: All travel services, one search
        - generic [ref=e85]: Instant Booking
        - generic [ref=e89]: Best Prices Guaranteed
    - tablist [ref=e96]:
      - tab "flight_takeoff Flights" [selected] [ref=e97] [cursor=pointer]:
        - generic [ref=e98]:
          - generic [ref=e99]: flight_takeoff
          - generic [ref=e100]: Flights
      - tab "mosque Umrah" [ref=e101] [cursor=pointer]:
        - generic [ref=e102]:
          - generic [ref=e103]: mosque
          - generic [ref=e104]: Umrah
    - tabpanel [ref=e106]:
      - generic [ref=e109]:
        - generic [ref=e110]:
          - generic [ref=e111]:
            - button "One Way" [pressed] [ref=e112] [cursor=pointer]
            - button "Round Trip" [ref=e114] [cursor=pointer]
            - button "Multi-City" [ref=e116] [cursor=pointer]
            - button "Open Return Soon" [disabled] [ref=e118]:
              - generic [ref=e119]: Open Return
              - generic [ref=e120]: Soon
          - button "airline_seat_recline_normal Economy expand_more" [ref=e122] [cursor=pointer]:
            - generic [ref=e123]: airline_seat_recline_normal
            - generic [ref=e124]: Economy
            - generic [ref=e125]: expand_more
        - generic [ref=e126]:
          - generic [ref=e127]:
            - generic [ref=e128] [cursor=pointer]:
              - generic: flight_takeoff
              - generic [ref=e129]:
                - generic [ref=e130]: Departure From
                - generic [ref=e131]: Departure City or Airport
            - button "Swap" [ref=e132] [cursor=pointer]:
              - generic [ref=e133]: swap_horiz
          - generic [ref=e135] [cursor=pointer]:
            - generic: flight_land
            - generic [ref=e136]:
              - generic [ref=e137]: Arrival To
              - generic [ref=e138]: Arrival City or Airport
          - generic [ref=e141] [cursor=pointer]:
            - generic: Departure Date
            - textbox "Departure Date" [ref=e142]
          - generic [ref=e146] [cursor=pointer]:
            - generic [ref=e147]: Passengers
            - generic [ref=e148]: 1 Passenger
          - button "Search Flights" [ref=e150] [cursor=pointer]:
            - generic [ref=e151]: Search
    - generic [ref=e155]:
      - link "Group Tours" [ref=e156] [cursor=pointer]:
        - /url: https://phptravels.net/page/group-tours
      - link "Travel Visas" [ref=e164] [cursor=pointer]:
        - /url: https://phptravels.net/visa
      - link "Travel Insurance" [ref=e169] [cursor=pointer]:
        - /url: https://phptravels.net/page/travel-insurance
  - generic [ref=e174]:
    - generic [ref=e178]:
      - generic [ref=e179]:
        - heading "Featured Umrah Packages" [level=2] [ref=e180]
        - link "View All" [ref=e186] [cursor=pointer]:
          - /url: https://phptravels.net/umrah
      - generic [ref=e190]:
        - 'link "Economy Spiritual Journey: Jeddah Umrah Experience Join us for an unforgettable 7-day Umrah pilgrimage based in the beautiful city of Jeddah. This package includes accommodations in a 5-star hotel and guided visits to holy sites. E Jeddah 7 Days / 7 Nights From USD 1,200.00 / Person" [ref=e191] [cursor=pointer]':
          - /url: https://phptravels.net/umrah/detail/spiritual-journey-jeddah-umrah-experience/14/umrah/09-10-2026/7/1-0/any
          - generic [ref=e192]: Economy
          - 'heading "Spiritual Journey: Jeddah Umrah Experience" [level=3] [ref=e193]'
          - paragraph [ref=e194]: Join us for an unforgettable 7-day Umrah pilgrimage based in the beautiful city of Jeddah. This package includes accommodations in a 5-star hotel and guided visits to holy sites. E
          - generic [ref=e195]:
            - generic [ref=e196]: Jeddah
            - generic [ref=e198]: 7 Days / 7 Nights
            - generic [ref=e200]: From USD 1,200.00 / Person
        - generic [ref=e201]:
          - generic [ref=e202]: Umrah Packages
          - link "Economy Luxury Umrah Experience in Jeddah Jeddah 7 Days / 7 Nights From USD 2,500.00 / Person" [ref=e203] [cursor=pointer]:
            - /url: https://phptravels.net/umrah/detail/luxury-umrah-experience-in-jeddah/13/umrah/09-10-2026/7/1-0/any
            - generic [ref=e205]:
              - generic [ref=e206]: Economy
              - heading "Luxury Umrah Experience in Jeddah" [level=3] [ref=e207]
              - generic [ref=e208]:
                - generic [ref=e209]: Jeddah
                - generic [ref=e211]: 7 Days / 7 Nights
                - generic [ref=e213]: From USD 2,500.00 / Person
          - 'link "Premium Jeddah Spiritual Journey: 7 Days Umrah Jeddah 7 Days / 7 Nights From USD 1,200.00 / Person" [ref=e214] [cursor=pointer]':
            - /url: https://phptravels.net/umrah/detail/jeddah-spiritual-journey-7-days-umrah/12/umrah/09-10-2026/7/1-0/any
            - generic [ref=e216]:
              - generic [ref=e217]: Premium
              - 'heading "Jeddah Spiritual Journey: 7 Days Umrah" [level=3] [ref=e218]'
              - generic [ref=e219]:
                - generic [ref=e220]: Jeddah
                - generic [ref=e222]: 7 Days / 7 Nights
                - generic [ref=e224]: From USD 1,200.00 / Person
          - link "Economy Exclusive 7-Day Umrah Experience in Makkah Makkah 7 Days / 7 Nights From USD 2,200.00 / Person" [ref=e225] [cursor=pointer]:
            - /url: https://phptravels.net/umrah/detail/exclusive-7-day-umrah-experience-in-makkah/11/umrah/09-10-2026/7/1-0/any
            - generic [ref=e227]:
              - generic [ref=e228]: Economy
              - heading "Exclusive 7-Day Umrah Experience in Makkah" [level=3] [ref=e229]
              - generic [ref=e230]:
                - generic [ref=e231]: Makkah
                - generic [ref=e233]: 7 Days / 7 Nights
                - generic [ref=e235]: From USD 2,200.00 / Person
          - link "Economy Spiritual Journey to Makkah Makkah 7 Days / 7 Nights From USD 1,200.00 / Person" [ref=e236] [cursor=pointer]:
            - /url: https://phptravels.net/umrah/detail/spiritual-journey-to-makkah/10/umrah/09-10-2026/7/1-0/any
            - generic [ref=e238]:
              - generic [ref=e239]: Economy
              - heading "Spiritual Journey to Makkah" [level=3] [ref=e240]
              - generic [ref=e241]:
                - generic [ref=e242]: Makkah
                - generic [ref=e244]: 7 Days / 7 Nights
                - generic [ref=e246]: From USD 1,200.00 / Person
    - generic [ref=e260]:
      - generic [ref=e261]:
        - paragraph [ref=e262]: Mobile Apps
        - heading [level=2] [ref=e263]:
          - text: Your whole trip,
          - emphasis [ref=e264]: in your pocket.
        - paragraph [ref=e265]: Search, book and manage flights, stays, tours, visas and eSIMs from one screen, with every ticket and voucher at hand.
        - generic [ref=e266]:
          - link "Download on the App Store" [ref=e267] [cursor=pointer]:
            - /url: https://play.google.com/store/apps/details?id=com.phptravels.android
            - generic [ref=e270]:
              - generic [ref=e271]: Download on the
              - generic [ref=e272]: App Store
          - link "Get it on Google Play" [ref=e273] [cursor=pointer]:
            - /url: https://apps.apple.com/us/app/phptravels/id6776969102
            - generic [ref=e276]:
              - generic [ref=e277]: Get it on
              - generic [ref=e278]: Google Play
      - generic [aria-hidden] [ref=e279]:
        - generic [ref=e281]:
          - generic [ref=e282]:
            - generic [ref=e283]: 9:41
            - generic [ref=e284]: ●●●
          - generic [ref=e285]:
            - generic [ref=e286]: Flights · Confirmed
            - generic [ref=e287]: DXBLHR
            - generic [ref=e289]:
              - generic [ref=e290]:
                - generic [ref=e291]: Date
                - generic [ref=e292]: 12 Oct
              - generic [ref=e293]:
                - generic [ref=e294]: Time
                - generic [ref=e295]: 07:30
              - generic [ref=e296]:
                - generic [ref=e297]: Seat
                - generic [ref=e298]: 14A
          - generic [ref=e349]:
            - generic [ref=e350]: Stays · Confirmed
            - text: London · 12–15 Oct · 2 Adults
          - generic [ref=e351]:
            - generic [ref=e352]: eSIM · Active
            - text: United Kingdom · 5 GB · 15 Days
        - generic [ref=e354]:
          - generic [ref=e355]:
            - generic [ref=e356]: 9:41
            - generic [ref=e357]: ●●●
          - generic [ref=e358]:
            - generic [ref=e359]: Welcome
            - generic [ref=e360]: Where to next?
          - generic [ref=e361]: Search…
          - generic [ref=e366]:
            - generic [ref=e367]: Flights
            - generic [ref=e371]: Stays
            - generic [ref=e375]: Cars
            - generic [ref=e379]: Tours
            - generic [ref=e384]: Visa
            - generic [ref=e390]: eSIM
          - generic [ref=e395]:
            - generic [ref=e397]:
              - generic [ref=e398]: DXB → LHR
              - generic [ref=e399]: Emirates · 7h 35m
            - emphasis [ref=e400]: $669
          - generic [ref=e401]:
            - generic [ref=e403]:
              - generic [ref=e404]: Makkah · 7 Days
              - generic [ref=e405]: Umrah · 4★
            - emphasis [ref=e406]: $1,200
      - list [ref=e407]:
        - listitem [ref=e408]:
          - generic [ref=e409]: "01"
          - generic [ref=e410]:
            - heading "Book in a few taps" [level=3] [ref=e411]
            - paragraph [ref=e412]: Flights, stays, tours, visas and eSIMs in one app, with one account and your saved travellers.
        - listitem [ref=e413]:
          - generic [ref=e414]: "02"
          - generic [ref=e415]:
            - heading "Every ticket at hand" [level=3] [ref=e416]
            - paragraph [ref=e417]: Tickets, vouchers and invoices of all your bookings, ready to show at the counter.
        - listitem [ref=e418]:
          - generic [ref=e419]: "03"
          - generic [ref=e420]:
            - heading "Updates as they happen" [level=3] [ref=e421]
            - paragraph [ref=e422]: Confirmations, changes and reminders reach you the moment they happen.
  - contentinfo [ref=e423]:
    - generic [ref=e425]:
      - generic [ref=e426]:
        - link "PHPTARVELS" [ref=e427] [cursor=pointer]:
          - /url: https://phptravels.net/
          - img "PHPTARVELS" [ref=e428]
        - paragraph [ref=e429]: Your trusted travel partner for unforgettable journeys. Discover the world with our comprehensive booking services.
        - list [ref=e430]:
          - listitem [ref=e431]:
            - generic [ref=e436]: 71 St, Suite 900 San Francisco, United States
          - listitem [ref=e437]:
            - link "+123456789" [ref=e441] [cursor=pointer]:
              - /url: tel:+123456789
          - listitem [ref=e442]:
            - link "email@agency.com" [ref=e447] [cursor=pointer]:
              - /url: mailto:email@agency.com
      - generic [ref=e448]:
        - generic [ref=e449]:
          - heading "Company" [level=4] [ref=e450]
          - list [ref=e451]:
            - listitem [ref=e452]:
              - link "Contact us" [ref=e453] [cursor=pointer]:
                - /url: https://phptravels.net/page/contact-us
            - listitem [ref=e454]:
              - link "About us" [ref=e455] [cursor=pointer]:
                - /url: https://phptravels.net/page/about-us
            - listitem [ref=e456]:
              - link "Cookies Policy" [ref=e457] [cursor=pointer]:
                - /url: https://phptravels.net/page/cookies-policy
            - listitem [ref=e458]:
              - link "Privacy Policy" [ref=e459] [cursor=pointer]:
                - /url: https://phptravels.net/page/privacy-policy
            - listitem [ref=e460]:
              - link "Become a Supplier" [ref=e461] [cursor=pointer]:
                - /url: https://phptravels.net/page/become-a-supplier
            - listitem [ref=e462]:
              - link "Terms of Use" [ref=e463] [cursor=pointer]:
                - /url: https://phptravels.net/page/terms-of-use
        - generic [ref=e464]:
          - heading "Support" [level=4] [ref=e465]
          - list [ref=e466]:
            - listitem [ref=e467]:
              - link "Affiliate Program" [ref=e468] [cursor=pointer]:
                - /url: https://phptravels.net/page/affiliate-program
            - listitem [ref=e469]:
              - link "Investors" [ref=e470] [cursor=pointer]:
                - /url: https://phptravels.net/page/investors
            - listitem [ref=e471]:
              - link "Careers and Jobs" [ref=e472] [cursor=pointer]:
                - /url: https://phptravels.net/page/careers-and-jobs
            - listitem [ref=e473]:
              - link "How to Book" [ref=e474] [cursor=pointer]:
                - /url: https://phptravels.net/page/how-to-book
            - listitem [ref=e475]:
              - link "File a Claim" [ref=e476] [cursor=pointer]:
                - /url: https://phptravels.net/page/file-a-claim
            - listitem [ref=e477]:
              - link "Refund Policy" [ref=e478] [cursor=pointer]:
                - /url: https://phptravels.net/page/refund-policy
        - generic [ref=e479]:
          - heading "Explore" [level=4] [ref=e480]
          - list [ref=e481]:
            - listitem [ref=e482]:
              - link "Best Travel Deals" [ref=e483] [cursor=pointer]:
                - /url: https://phptravels.net/page/best-travel-deals
            - listitem [ref=e484]:
              - link "Travel Documents" [ref=e485] [cursor=pointer]:
                - /url: https://phptravels.net/page/travel-documents
            - listitem [ref=e486]:
              - link "Travel Insurance" [ref=e487] [cursor=pointer]:
                - /url: https://phptravels.net/page/travel-insurance
            - listitem [ref=e488]:
              - link "Disruption" [ref=e489] [cursor=pointer]:
                - /url: https://phptravels.net/page/disruption
            - listitem [ref=e490]:
              - link "FAQ / Answers" [ref=e491] [cursor=pointer]:
                - /url: https://phptravels.net/page/frequently-asked-questions
            - listitem [ref=e492]:
              - link "Accessibility" [ref=e493] [cursor=pointer]:
                - /url: https://phptravels.net/page/accessibility
      - generic [ref=e494]:
        - generic [ref=e495]:
          - heading "Follow us" [level=4] [ref=e496]
          - generic [ref=e497]:
            - link "Facebook" [ref=e498] [cursor=pointer]:
              - /url: https://facebook.com/phptravels
            - link "X" [ref=e501] [cursor=pointer]:
              - /url: https://twitter.com/phptravels
            - link "Instagram" [ref=e504] [cursor=pointer]:
              - /url: https://instagram.com/phptravels
            - link "YouTube" [ref=e507] [cursor=pointer]:
              - /url: https://youtube.com/@phptravels
            - link "LinkedIn" [ref=e510] [cursor=pointer]:
              - /url: https://linkedin.com/company/phptravels
          - heading "Mobile Apps" [level=4] [ref=e513]
          - generic [ref=e514]:
            - link "Download on the App Store" [ref=e515] [cursor=pointer]:
              - /url: https://play.google.com/store/apps/details?id=com.phptravels.android
              - generic [ref=e518]:
                - generic [ref=e519]: Download on the
                - generic [ref=e520]: App Store
            - link "Get it on Google Play" [ref=e521] [cursor=pointer]:
              - /url: https://apps.apple.com/us/app/phptravels/id6776969102
              - generic [ref=e524]:
                - generic [ref=e525]: Get it on
                - generic [ref=e526]: Google Play
        - generic [ref=e532]:
          - generic [ref=e533]: 24/7 Support
          - generic [ref=e534]: Always here to help
    - generic [ref=e536]:
      - generic [ref=e537]: SSL Secure
      - link "IATA" [ref=e543] [cursor=pointer]:
        - /url: https://iata.co
      - generic [ref=e549]: Secure Payments
      - generic [ref=e555]: Best Price Guaranteed
    - generic [ref=e562]:
      - paragraph [ref=e563]: © 2026 PHPTARVELS. All rights reserved.
      - list [ref=e564]:
        - listitem [ref=e565]:
          - link "Privacy Policy" [ref=e566] [cursor=pointer]:
            - /url: https://phptravels.net/page/privacy-policy
        - listitem [ref=e567]:
          - link "Terms of Use" [ref=e568] [cursor=pointer]:
            - /url: https://phptravels.net/page/terms-of-use
        - listitem [ref=e569]:
          - link "Cookies Policy" [ref=e570] [cursor=pointer]:
            - /url: https://phptravels.net/page/cookies-policy
        - listitem [ref=e571]:
          - link "Refund Policy" [ref=e572] [cursor=pointer]:
            - /url: https://phptravels.net/page/refund-policy
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
  10 |     await main.expectSpinnerToBeHidden()
  11 | 
  12 |     const tablist = page.getByRole('tablist').first()
  13 |     const stableTabLabels = ['Stays', 'Flights', 'Tours', 'Visa']
  14 | 
  15 |     await expect(tablist).toBeVisible()
  16 |     await expect
  17 |       .poll(async () => tablist.getByRole('tab').count())
> 18 |       .toBeGreaterThanOrEqual(stableTabLabels.length)
     |        ^ Error: expect(received).toBeGreaterThanOrEqual(expected)
  19 | 
  20 |     for (const label of stableTabLabels) {
  21 |       await expect.soft(tablist.getByRole('tab', { name: new RegExp(label, 'i') })).toBeVisible()
  22 |     }
  23 |   })
  24 | 
  25 |   test('can load mobile apps banner', { tag: ['@smoke'] }, async ({ main }) => {
  26 |     await expect(main.googlePlayBanner).toBeVisible()
  27 |     await expect(main.appleStoreBanner).toBeVisible()
  28 |   })
  29 | })
  30 | 
```