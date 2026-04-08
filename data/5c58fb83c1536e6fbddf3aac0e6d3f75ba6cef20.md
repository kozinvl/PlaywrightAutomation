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

Locator: getByRole('tab', { name: 'Flights' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeVisible" with timeout 5000ms
  - waiting for getByRole('tab', { name: 'Flights' })

```

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('tab', { name: 'Tours' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeVisible" with timeout 5000ms
  - waiting for getByRole('tab', { name: 'Tours' })

```

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('tab', { name: 'Visa' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeVisible" with timeout 5000ms
  - waiting for getByRole('tab', { name: 'Visa' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - link "PHPTARVELS" [ref=e6] [cursor=pointer]:
          - /url: https://phptravels.net/
          - img "PHPTARVELS" [ref=e7]
        - navigation [ref=e8]:
          - button "Services expand_more" [ref=e10] [cursor=pointer]:
            - generic [ref=e11]: Services
            - generic [ref=e12]: expand_more
          - button "Company expand_more" [ref=e14] [cursor=pointer]:
            - generic [ref=e15]: Company
            - generic [ref=e16]: expand_more
          - link "Blogs" [ref=e17] [cursor=pointer]:
            - /url: https://phptravels.net/page/blog
      - generic [ref=e18]:
        - button "English flag English expand_more" [ref=e20] [cursor=pointer]:
          - img "English flag" [ref=e21]
          - generic [ref=e22]: English
          - generic [ref=e23]: expand_more
        - button "USD flag USD expand_more" [ref=e25] [cursor=pointer]:
          - img "USD flag" [ref=e26]
          - generic [ref=e27]: USD
          - generic [ref=e28]: expand_more
        - link "login Login" [ref=e29] [cursor=pointer]:
          - /url: https://phptravels.net/login
          - generic [ref=e30]: login
          - generic [ref=e31]: Login
        - button "person_add Signup expand_more" [ref=e33] [cursor=pointer]:
          - generic [ref=e34]: person_add
          - generic [ref=e35]: Signup
          - generic [ref=e36]: expand_more
  - generic [ref=e37]:
    - generic [ref=e39]:
      - heading "Travel the way you love!" [level=1] [ref=e40]
      - paragraph [ref=e41]: Let's help you plan your next journey the one that will leave a lifetime of memories.
    - img "Hero" [ref=e42]
    - generic [ref=e44]:
      - tablist [ref=e45]:
        - tab "hotel Stays" [ref=e46] [cursor=pointer]:
          - generic [ref=e47]: hotel
          - generic [ref=e48]: Stays
        - tab "directions_car Cars" [ref=e49] [cursor=pointer]:
          - generic [ref=e50]: directions_car
          - generic [ref=e51]: Cars
      - tabpanel [ref=e53]:
        - generic [ref=e56]:
          - generic [ref=e57]:
            - generic [ref=e58]:
              - generic [ref=e59]:
                - generic [ref=e60]: location_on
                - text: Destination or Hotel Name
              - generic [ref=e62]:
                - generic: location_on
                - textbox "Search By City" [ref=e63]
            - generic [ref=e64]:
              - generic [ref=e65]:
                - generic [ref=e66]: calendar_today
                - text: Check-in
              - textbox "Check-in Date" [ref=e67]: 11-04-2026
            - generic [ref=e68]:
              - generic [ref=e69]:
                - generic [ref=e70]: calendar_today
                - text: Check-out
              - textbox "Check-out Date" [ref=e71]: 12-04-2026
          - generic [ref=e72]:
            - generic [ref=e73]:
              - generic [ref=e74]:
                - generic [ref=e75]: person
                - text: Guests & Rooms
              - generic [ref=e77] [cursor=pointer]:
                - generic [ref=e78]: 2 Guests, 1 Room
                - generic [ref=e79]: expand_more
            - generic [ref=e80]:
              - generic [ref=e81]:
                - generic [ref=e82]: flag
                - text: Nationality
              - generic [ref=e84] [cursor=pointer]:
                - generic [ref=e85]: Select Nationality
                - generic [ref=e86]: expand_more
            - button "search Search Hotels" [ref=e88] [cursor=pointer]:
              - generic [ref=e89]: search
              - generic [ref=e90]: Search Hotels
  - generic [ref=e92]:
    - generic [ref=e93]:
      - heading "Featured Properties" [level=2] [ref=e94]
      - generic [ref=e95]:
        - generic [ref=e96]:
          - generic [ref=e97]: verified
          - generic [ref=e98]: We price match
        - generic [ref=e99]:
          - generic [ref=e100]: task_alt
          - generic [ref=e101]: Hotel Booking Guarantee
        - generic [ref=e102]:
          - generic [ref=e103]: workspace_premium
          - generic [ref=e104]: Hotel Stay Guarantee
      - generic [ref=e106]:
        - button "Dubai" [ref=e107] [cursor=pointer]
        - button "New York" [ref=e108] [cursor=pointer]
        - button "Barcelona" [ref=e109] [cursor=pointer]
        - button "Tokyo" [ref=e110] [cursor=pointer]
        - button "Maldives" [ref=e111] [cursor=pointer]
    - generic [ref=e112]:
      - generic [ref=e113]:
        - generic [ref=e114]:
          - generic [ref=e116]:
            - generic [ref=e117]: 15% OFF
            - generic [ref=e118]:
              - generic [ref=e119]: location_on
              - text: Dubai
          - img "Burj Al Arab" [ref=e120]
        - generic [ref=e121]:
          - heading "Burj Al Arab" [level=3] [ref=e122]
          - paragraph [ref=e123]:
            - generic [ref=e124]: home
            - generic [ref=e125]: Jumeirah Beach Road
          - generic [ref=e126]:
            - generic [ref=e127]:
              - generic [ref=e128]: From
              - generic [ref=e129]: USD 1,500.00
            - generic [ref=e131]:
              - img [ref=e132]
              - generic [ref=e134]: "2.0"
        - link [ref=e135] [cursor=pointer]:
          - /url: https://phptravels.net/stay/burj-al-arab/200/hotels/_/11-04-2026/12-04-2026/NULL/1/2-0
      - generic [ref=e136]:
        - generic [ref=e137]:
          - generic [ref=e139]:
            - generic [ref=e140]: 15% OFF
            - generic [ref=e141]:
              - generic [ref=e142]: location_on
              - text: Dubai
          - img "Atlantis The Palm" [ref=e143]
        - generic [ref=e144]:
          - heading "Atlantis The Palm" [level=3] [ref=e145]
          - paragraph [ref=e146]:
            - generic [ref=e147]: home
            - generic [ref=e148]: Palm Jumeirah
          - generic [ref=e149]:
            - generic [ref=e150]:
              - generic [ref=e151]: From
              - generic [ref=e152]: USD 450.00
            - generic [ref=e154]:
              - img [ref=e155]
              - generic [ref=e157]: "5.0"
        - link [ref=e158] [cursor=pointer]:
          - /url: https://phptravels.net/stay/atlantis-the-palm/201/hotels/_/11-04-2026/12-04-2026/NULL/1/2-0
      - generic [ref=e159]:
        - generic [ref=e160]:
          - generic [ref=e162]:
            - generic [ref=e163]: 10% OFF
            - generic [ref=e164]:
              - generic [ref=e165]: location_on
              - text: Dubai
          - img "Address Downtown Dubai" [ref=e166]
        - generic [ref=e167]:
          - heading "Address Downtown Dubai" [level=3] [ref=e168]
          - paragraph [ref=e169]:
            - generic [ref=e170]: home
            - generic [ref=e171]: Sheikh Mohammed Bin Rashed Boulevard, P.O Box 111969
          - generic [ref=e172]:
            - generic [ref=e173]:
              - generic [ref=e174]: From
              - generic [ref=e175]: USD 420.00
            - generic [ref=e177]:
              - img [ref=e178]
              - generic [ref=e180]: "5.0"
        - link [ref=e181] [cursor=pointer]:
          - /url: https://phptravels.net/stay/address-downtown-dubai/202/hotels/_/11-04-2026/12-04-2026/NULL/1/2-0
      - generic [ref=e182]:
        - generic [ref=e183]:
          - generic [ref=e185]:
            - generic [ref=e186]: 10% OFF
            - generic [ref=e187]:
              - generic [ref=e188]: location_on
              - text: Dubai
          - img "JW Marriott Marquis Dubai" [ref=e189]
        - generic [ref=e190]:
          - heading "JW Marriott Marquis Dubai" [level=3] [ref=e191]
          - paragraph [ref=e192]:
            - generic [ref=e193]: home
            - generic [ref=e194]: Sheikh Zayed Road, Business Bay
          - generic [ref=e195]:
            - generic [ref=e196]:
              - generic [ref=e197]: From
              - generic [ref=e198]: USD 350.00
            - generic [ref=e200]:
              - img [ref=e201]
              - generic [ref=e203]: "5.0"
        - link [ref=e204] [cursor=pointer]:
          - /url: https://phptravels.net/stay/jw-marriott-marquis-dubai/203/hotels/_/11-04-2026/12-04-2026/NULL/1/2-0
      - generic [ref=e205]:
        - generic [ref=e206]:
          - generic [ref=e208]:
            - generic [ref=e209]: 15% OFF
            - generic [ref=e210]:
              - generic [ref=e211]: location_on
              - text: Dubai
          - img "Waldorf Astoria Dubai" [ref=e212]
        - generic [ref=e213]:
          - heading "Waldorf Astoria Dubai" [level=3] [ref=e214]
          - paragraph [ref=e215]:
            - generic [ref=e216]: home
            - generic [ref=e217]: Palm Jumeirah, Crescent East, Plot C-34
          - generic [ref=e218]:
            - generic [ref=e219]:
              - generic [ref=e220]: From
              - generic [ref=e221]: USD 500.00
            - generic [ref=e223]:
              - img [ref=e224]
              - generic [ref=e226]: "5.0"
        - link [ref=e227] [cursor=pointer]:
          - /url: https://phptravels.net/stay/waldorf-astoria-dubai/204/hotels/_/11-04-2026/12-04-2026/NULL/1/2-0
      - generic [ref=e228]:
        - generic [ref=e229]:
          - generic [ref=e231]:
            - generic [ref=e232]: 20% OFF
            - generic [ref=e233]:
              - generic [ref=e234]: location_on
              - text: Dubai
          - img "Armani Hotel Dubai" [ref=e235]
        - generic [ref=e236]:
          - heading "Armani Hotel Dubai" [level=3] [ref=e237]
          - paragraph [ref=e238]:
            - generic [ref=e239]: home
            - generic [ref=e240]: Burj Khalifa, Sheikh Mohamed Bin Rashid Boulevard
          - generic [ref=e241]:
            - generic [ref=e242]:
              - generic [ref=e243]: From
              - generic [ref=e244]: USD 400.00
            - generic [ref=e246]:
              - img [ref=e247]
              - generic [ref=e249]: "5.0"
        - link [ref=e250] [cursor=pointer]:
          - /url: https://phptravels.net/stay/armani-hotel-dubai/205/hotels/_/11-04-2026/12-04-2026/NULL/1/2-0
      - generic [ref=e251]:
        - generic [ref=e252]:
          - generic [ref=e254]:
            - generic [ref=e255]: 20% OFF
            - generic [ref=e256]:
              - generic [ref=e257]: location_on
              - text: Dubai
          - img "Palazzo Versace Dubai" [ref=e258]
        - generic [ref=e259]:
          - heading "Palazzo Versace Dubai" [level=3] [ref=e260]
          - paragraph [ref=e261]:
            - generic [ref=e262]: home
            - generic [ref=e263]: Jaddaf Waterfront
          - generic [ref=e264]:
            - generic [ref=e265]:
              - generic [ref=e266]: From
              - generic [ref=e267]: USD 500.00
            - generic [ref=e269]:
              - img [ref=e270]
              - generic [ref=e272]: "5.0"
        - link [ref=e273] [cursor=pointer]:
          - /url: https://phptravels.net/stay/palazzo-versace-dubai/206/hotels/_/11-04-2026/12-04-2026/NULL/1/2-0
      - generic [ref=e274]:
        - generic [ref=e275]:
          - generic [ref=e277]:
            - generic [ref=e278]: 15% OFF
            - generic [ref=e279]:
              - generic [ref=e280]: location_on
              - text: Dubai
          - img "One&Only The Palm Dubai" [ref=e281]
        - generic [ref=e282]:
          - heading "One&Only The Palm Dubai" [level=3] [ref=e283]
          - paragraph [ref=e284]:
            - generic [ref=e285]: home
            - generic [ref=e286]: Palm Jumeirah
          - generic [ref=e287]:
            - generic [ref=e288]:
              - generic [ref=e289]: From
              - generic [ref=e290]: USD 800.00
            - generic [ref=e292]:
              - img [ref=e293]
              - generic [ref=e295]: "5.0"
        - link [ref=e296] [cursor=pointer]:
          - /url: https://phptravels.net/stay/oneonly-the-palm-dubai/207/hotels/_/11-04-2026/12-04-2026/NULL/1/2-0
  - generic [ref=e298]:
    - generic [ref=e299]:
      - heading "Featured Cars" [level=2] [ref=e301]
      - generic [ref=e302]:
        - generic [ref=e303]:
          - generic [ref=e304]: verified
          - generic [ref=e305]: Verified Cars
        - generic [ref=e306]:
          - generic [ref=e307]: task_alt
          - generic [ref=e308]: Instant Confirmation
        - generic [ref=e309]:
          - generic [ref=e310]: workspace_premium
          - generic [ref=e311]: Best Price Guaranteed
      - generic [ref=e313]:
        - button "Dubai" [ref=e314] [cursor=pointer]
        - button "London" [ref=e315] [cursor=pointer]
        - button "Paris" [ref=e316] [cursor=pointer]
        - button "Barcelona" [ref=e317] [cursor=pointer]
        - button "Bangkok" [ref=e318] [cursor=pointer]
        - button "Rome" [ref=e319] [cursor=pointer]
        - button "Antalya" [ref=e320] [cursor=pointer]
        - button "Kuala Lumpur" [ref=e321] [cursor=pointer]
    - generic [ref=e322]:
      - generic [ref=e323] [cursor=pointer]:
        - generic [ref=e324]:
          - generic [ref=e327]:
            - generic [ref=e328]: location_on
            - text: Dubai
          - img "Mazda 6 or similar" [ref=e329]
        - generic [ref=e330]:
          - generic [ref=e331]: Refundable
          - generic [ref=e332]:
            - heading "Mazda 6 or similar" [level=3] [ref=e333]
            - generic [ref=e334]:
              - generic [ref=e335]: star
              - generic [ref=e336]: "4.6"
          - paragraph [ref=e337]: Mazda 6 or similar 2024
          - generic [ref=e338]:
            - generic [ref=e339]:
              - generic [ref=e340]: person
              - generic [ref=e341]: 5 Seats
            - generic [ref=e342]:
              - generic [ref=e343]: settings
              - generic [ref=e344]: Automatic
            - generic [ref=e345]:
              - generic [ref=e346]: work
              - generic [ref=e347]: 5 Bags
            - generic [ref=e348]:
              - generic [ref=e349]: local_gas_station
              - generic [ref=e350]: Unspecified
          - generic [ref=e351]:
            - generic [ref=e352]:
              - generic [ref=e353]: Daily Rate
              - generic [ref=e355]: USD 47.93
            - generic [ref=e356]:
              - text: Book Now
              - generic [ref=e357]: arrow_forward
      - generic [ref=e358] [cursor=pointer]:
        - generic [ref=e359]:
          - generic [ref=e362]:
            - generic [ref=e363]: location_on
            - text: Dubai
          - img "Dodge Charger or similar" [ref=e364]
        - generic [ref=e365]:
          - generic [ref=e366]: Refundable
          - generic [ref=e367]:
            - heading "Dodge Charger or similar" [level=3] [ref=e368]
            - generic [ref=e369]:
              - generic [ref=e370]: star
              - generic [ref=e371]: "4.1"
          - paragraph [ref=e372]: Dodge Charger or similar 2024
          - generic [ref=e373]:
            - generic [ref=e374]:
              - generic [ref=e375]: person
              - generic [ref=e376]: 4 Seats
            - generic [ref=e377]:
              - generic [ref=e378]: settings
              - generic [ref=e379]: Automatic
            - generic [ref=e380]:
              - generic [ref=e381]: work
              - generic [ref=e382]: 3 Bags
            - generic [ref=e383]:
              - generic [ref=e384]: local_gas_station
              - generic [ref=e385]: Unspecified
          - generic [ref=e386]:
            - generic [ref=e387]:
              - generic [ref=e388]: Daily Rate
              - generic [ref=e390]: USD 98.10
            - generic [ref=e391]:
              - text: Book Now
              - generic [ref=e392]: arrow_forward
      - generic [ref=e393] [cursor=pointer]:
        - generic [ref=e394]:
          - generic [ref=e397]:
            - generic [ref=e398]: location_on
            - text: Dubai
          - img "Volkswagen Golf GTI or similar" [ref=e399]
        - generic [ref=e400]:
          - generic [ref=e401]: Refundable
          - generic [ref=e402]:
            - heading "Volkswagen Golf GTI or similar" [level=3] [ref=e403]
            - generic [ref=e404]:
              - generic [ref=e405]: star
              - generic [ref=e406]: "4.5"
          - paragraph [ref=e407]: Volkswagen Golf GTI or similar 2024
          - generic [ref=e408]:
            - generic [ref=e409]:
              - generic [ref=e410]: person
              - generic [ref=e411]: 5 Seats
            - generic [ref=e412]:
              - generic [ref=e413]: settings
              - generic [ref=e414]: Automatic
            - generic [ref=e415]:
              - generic [ref=e416]: work
              - generic [ref=e417]: 3 Bags
            - generic [ref=e418]:
              - generic [ref=e419]: local_gas_station
              - generic [ref=e420]: Unspecified
          - generic [ref=e421]:
            - generic [ref=e422]:
              - generic [ref=e423]: Daily Rate
              - generic [ref=e425]: USD 110.83
            - generic [ref=e426]:
              - text: Book Now
              - generic [ref=e427]: arrow_forward
      - generic [ref=e428] [cursor=pointer]:
        - generic [ref=e429]:
          - generic [ref=e432]:
            - generic [ref=e433]: location_on
            - text: Dubai
          - img "Mini Cooper or similar" [ref=e434]
        - generic [ref=e435]:
          - generic [ref=e436]: Refundable
          - generic [ref=e437]:
            - heading "Mini Cooper or similar" [level=3] [ref=e438]
            - generic [ref=e439]:
              - generic [ref=e440]: star
              - generic [ref=e441]: "4.2"
          - paragraph [ref=e442]: Mini Cooper or similar 2024
          - generic [ref=e443]:
            - generic [ref=e444]:
              - generic [ref=e445]: person
              - generic [ref=e446]: 4 Seats
            - generic [ref=e447]:
              - generic [ref=e448]: settings
              - generic [ref=e449]: Automatic
            - generic [ref=e450]:
              - generic [ref=e451]: work
              - generic [ref=e452]: 2 Bags
            - generic [ref=e453]:
              - generic [ref=e454]: local_gas_station
              - generic [ref=e455]: Unspecified
          - generic [ref=e456]:
            - generic [ref=e457]:
              - generic [ref=e458]: Daily Rate
              - generic [ref=e460]: USD 118.69
            - generic [ref=e461]:
              - text: Book Now
              - generic [ref=e462]: arrow_forward
  - generic [ref=e464]:
    - generic [ref=e465]:
      - heading "Featured Blogs" [level=2] [ref=e467]
      - link "View All arrow_forward" [ref=e468] [cursor=pointer]:
        - /url: https://phptravels.net/blog
        - text: View All
        - generic [ref=e469]: arrow_forward
    - generic [ref=e470]:
      - 'link "Sustainable Travel: How to Reduce Your Carbon Footprint Travel Tips Sustainable Travel: How to Reduce Your Carbon Footprint Feb 17, 2026" [ref=e471] [cursor=pointer]':
        - /url: https://phptravels.net/blog/sustainable-travel-reduce-carbon-footprint
        - 'img "Sustainable Travel: How to Reduce Your Carbon Footprint" [ref=e473]'
        - generic [ref=e474]:
          - text: Travel Tips
          - 'heading "Sustainable Travel: How to Reduce Your Carbon Footprint" [level=3] [ref=e475]'
          - text: Feb 17, 2026
      - link "A Food Lover Guide to Istanbul Food & Dining A Food Lover Guide to Istanbul Feb 7, 2026" [ref=e476] [cursor=pointer]:
        - /url: https://phptravels.net/blog/food-lovers-guide-istanbul
        - img "A Food Lover Guide to Istanbul" [ref=e478]
        - generic [ref=e479]:
          - text: Food & Dining
          - heading "A Food Lover Guide to Istanbul" [level=3] [ref=e480]
          - text: Feb 7, 2026
      - link "The Most Stunning Hiking Trails in the World Adventure Tours The Most Stunning Hiking Trails in the World Jan 28, 2026" [ref=e481] [cursor=pointer]:
        - /url: https://phptravels.net/blog/worlds-most-stunning-hiking-trails
        - img "The Most Stunning Hiking Trails in the World" [ref=e483]
        - generic [ref=e484]:
          - text: Adventure Tours
          - heading "The Most Stunning Hiking Trails in the World" [level=3] [ref=e485]
          - text: Jan 28, 2026
      - link "How to Plan Your First Solo Trip Travel Tips How to Plan Your First Solo Trip Jan 18, 2026" [ref=e486] [cursor=pointer]:
        - /url: https://phptravels.net/blog/how-to-plan-your-first-solo-trip
        - img "How to Plan Your First Solo Trip" [ref=e488]
        - generic [ref=e489]:
          - text: Travel Tips
          - heading "How to Plan Your First Solo Trip" [level=3] [ref=e490]
          - text: Jan 18, 2026
  - generic [ref=e492]:
    - img "Mobile Apps" [ref=e494]
    - generic [ref=e496]:
      - heading "Travel on the go with our app" [level=1] [ref=e497]
      - paragraph [ref=e498]: Book from your phone anytime, anywhere.
      - generic [ref=e499]:
        - link "Download on the App Store" [ref=e500] [cursor=pointer]:
          - /url: https://itunes.apple.com/us/app/phptravels/id1018217005
          - img [ref=e501]
          - generic [ref=e503]:
            - generic [ref=e504]: Download on the
            - generic [ref=e505]: App Store
        - link "Get it on Google Play" [ref=e506] [cursor=pointer]:
          - /url: https://play.google.com/store/apps/details?id=com.phptravelsnative
          - img [ref=e507]
          - generic [ref=e509]:
            - generic [ref=e510]: Get it on
            - generic [ref=e511]: Google Play
  - contentinfo [ref=e512]:
    - generic [ref=e514]:
      - generic [ref=e515]:
        - generic [ref=e516]:
          - img "PHPTARVELS" [ref=e517]
          - paragraph [ref=e518]: Your trusted travel partner for unforgettable journeys. Discover the world with our comprehensive booking services.
        - generic [ref=e520]:
          - generic [ref=e521]: support_agent
          - generic [ref=e522]:
            - paragraph [ref=e523]: 24/7 Support
            - paragraph [ref=e524]: Always here to help
      - generic [ref=e525]:
        - generic [ref=e526]:
          - heading "Company" [level=4] [ref=e527]
          - list [ref=e528]:
            - listitem [ref=e529]:
              - link "chevron_right Contact us" [ref=e530] [cursor=pointer]:
                - /url: https://phptravels.net/page/contact-us
                - generic [ref=e531]: chevron_right
                - text: Contact us
            - listitem [ref=e532]:
              - link "chevron_right About us" [ref=e533] [cursor=pointer]:
                - /url: https://phptravels.net/page/about-us
                - generic [ref=e534]: chevron_right
                - text: About us
            - listitem [ref=e535]:
              - link "chevron_right Cookies Policy" [ref=e536] [cursor=pointer]:
                - /url: https://phptravels.net/page/cookies-policy
                - generic [ref=e537]: chevron_right
                - text: Cookies Policy
            - listitem [ref=e538]:
              - link "chevron_right Privacy Policy" [ref=e539] [cursor=pointer]:
                - /url: https://phptravels.net/page/privacy-policy
                - generic [ref=e540]: chevron_right
                - text: Privacy Policy
            - listitem [ref=e541]:
              - link "chevron_right Terms of Use" [ref=e542] [cursor=pointer]:
                - /url: https://phptravels.net/page/terms-of-use
                - generic [ref=e543]: chevron_right
                - text: Terms of Use
        - generic [ref=e544]:
          - heading "Support" [level=4] [ref=e545]
          - list [ref=e546]:
            - listitem [ref=e547]:
              - link "chevron_right Affiliate Program" [ref=e548] [cursor=pointer]:
                - /url: https://phptravels.net/page/affiliate-program
                - generic [ref=e549]: chevron_right
                - text: Affiliate Program
            - listitem [ref=e550]:
              - link "chevron_right How to Book" [ref=e551] [cursor=pointer]:
                - /url: https://phptravels.net/page/how-to-book
                - generic [ref=e552]: chevron_right
                - text: How to Book
            - listitem [ref=e553]:
              - link "chevron_right File a Claim" [ref=e554] [cursor=pointer]:
                - /url: https://phptravels.net/page/file-a-claim
                - generic [ref=e555]: chevron_right
                - text: File a Claim
            - listitem [ref=e556]:
              - link "chevron_right Refund Policy" [ref=e557] [cursor=pointer]:
                - /url: https://phptravels.net/page/refund-policy
                - generic [ref=e558]: chevron_right
                - text: Refund Policy
        - generic [ref=e559]:
          - heading "Explore" [level=4] [ref=e560]
          - list [ref=e561]:
            - listitem [ref=e562]:
              - link "chevron_right Best Travel Deals" [ref=e563] [cursor=pointer]:
                - /url: https://phptravels.net/page/best-travel-deals
                - generic [ref=e564]: chevron_right
                - text: Best Travel Deals
            - listitem [ref=e565]:
              - link "chevron_right Travel Documents" [ref=e566] [cursor=pointer]:
                - /url: https://phptravels.net/page/travel-documents
                - generic [ref=e567]: chevron_right
                - text: Travel Documents
            - listitem [ref=e568]:
              - link "chevron_right Travel Insurance" [ref=e569] [cursor=pointer]:
                - /url: https://phptravels.net/page/travel-insurance
                - generic [ref=e570]: chevron_right
                - text: Travel Insurance
            - listitem [ref=e571]:
              - link "chevron_right Disruption" [ref=e572] [cursor=pointer]:
                - /url: https://phptravels.net/page/disruption
                - generic [ref=e573]: chevron_right
                - text: Disruption
            - listitem [ref=e574]:
              - link "chevron_right FAQ / Answers" [ref=e575] [cursor=pointer]:
                - /url: https://phptravels.net/page/frequently-asked-questions
                - generic [ref=e576]: chevron_right
                - text: FAQ / Answers
            - listitem [ref=e577]:
              - link "chevron_right Accessibility" [ref=e578] [cursor=pointer]:
                - /url: https://phptravels.net/page/accessibility
                - generic [ref=e579]: chevron_right
                - text: Accessibility
      - generic [ref=e580]:
        - heading "Get In Touch" [level=4] [ref=e581]
        - generic [ref=e582]:
          - generic [ref=e583]:
            - generic [ref=e584]: location_on
            - generic [ref=e585]: 71 St, Suite 900 San Francisco, United States
          - generic [ref=e586]:
            - generic [ref=e587]: call
            - link "+123456789" [ref=e588] [cursor=pointer]:
              - /url: tel:+123456789
          - generic [ref=e589]:
            - generic [ref=e590]: mail
            - link "email@agency.com" [ref=e591] [cursor=pointer]:
              - /url: mailto:email@agency.com
          - generic [ref=e593]:
            - link "Facebook" [ref=e594] [cursor=pointer]:
              - /url: https://facebook.com/phptravels
              - img [ref=e595]
            - link "Instagram" [ref=e597] [cursor=pointer]:
              - /url: https://instagram.com/phptravels
              - img [ref=e598]
            - link "Twitter" [ref=e600] [cursor=pointer]:
              - /url: https://twitter.com/phptravels
              - img [ref=e601]
            - link "YouTube" [ref=e603] [cursor=pointer]:
              - /url: https://youtube.com/@phptravels
              - img [ref=e604]
            - link "LinkedIn" [ref=e606] [cursor=pointer]:
              - /url: https://linkedin.com/company/phptravels
              - img [ref=e607]
    - generic [ref=e611]:
      - generic [ref=e612]:
        - paragraph [ref=e613]: © 2026 PHPTARVELS. All rights reserved.
        - paragraph [ref=e614]:
          - text: Powered by
          - link "PHPTRAVELS" [ref=e615] [cursor=pointer]:
            - /url: https://phptravels.com
            - strong [ref=e616]: PHPTRAVELS
      - generic [ref=e617]:
        - link "shield Privacy" [ref=e618] [cursor=pointer]:
          - /url: https://phptravels.net/page/privacy-policy
          - generic [ref=e619]: shield
          - text: Privacy
        - link "description Terms" [ref=e620] [cursor=pointer]:
          - /url: https://phptravels.net/page/terms-of-use
          - generic [ref=e621]: description
          - text: Terms
        - link "cookie Cookies" [ref=e622] [cursor=pointer]:
          - /url: https://phptravels.net/page/cookies-policy
          - generic [ref=e623]: cookie
          - text: Cookies
        - link "currency_exchange Refund" [ref=e624] [cursor=pointer]:
          - /url: https://phptravels.net/page/refund-policy
          - generic [ref=e625]: currency_exchange
          - text: Refund
      - generic [ref=e626]:
        - generic [ref=e627]:
          - generic [ref=e628]: verified_user
          - generic [ref=e629]: SSL Secure
        - generic [ref=e630]:
          - generic [ref=e631]: verified
          - generic [ref=e632]: IATA
        - generic [ref=e633]:
          - generic [ref=e634]: credit_card
          - generic [ref=e635]: PCI DSS
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