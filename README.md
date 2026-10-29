# Car Taxi Service Ujjain

Conversion landing site for [taxiservicesinujjain.com](https://www.taxiservicesinujjain.com/). Next.js App Router, deployed the same way as any Next.js app (Vercel needs no extra config).

## Pages

| Path | Use |
|---|---|
| `/` | Homepage. Anchors: `#services`, `#routes`, `#contact` |
| `/indore-airport-taxi` | Indore airport (Devi Ahilyabai Holkar) pickup and drop |
| `/ujjain-to-indore-taxi` | Ujjain ↔ Indore |
| `/ujjain-to-omkareshwar-taxi` | Ujjain to Omkareshwar |
| `/mahakal-darshan-taxi` | Mahakaleshwar / Ujjain darshan |
| `/outstation-taxi-ujjain` | One-way and outstation routes |
| `/hi` | Hindi: उज्जैन टैक्सी सर्विस |

Phone and WhatsApp everywhere: **+91 70246 01594** (`tel:+917024601594`, `https://wa.me/917024601594`). Address: Mahakal Marg, Chourha, Ujjain, Madhya Pradesh 456006. Google Business Profile name: `ujjain darshan`. Brand: Car Taxi Service Ujjain.

Fares are not listed. The site says **Call for best rate** only.

## Develop

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
npm start
```

## Google Ads and GA4

GA4 `G-KS9SNXRTJH` is loaded on every page.

Google Ads `AW-18310960671` is configured on every page next to GA4. Phone clicks (`tel:` links for 7024601594), WhatsApp clicks, and booking-form submits send:

| Action | send_to |
|---|---|
| Phone click | `AW-18310960671/TUj2CN6niKodEJ-srJtE` |
| WhatsApp click | `AW-18310960671/hnvECNuniKodEJ-srJtE` |
| Booking form submit | `AW-18310960671/7_MGCNiniKodEJ-srJtE` |

Those values live in `lib/config.ts`. Set `NEXT_PUBLIC_GOOGLE_ADS_ID`, `NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL`, `NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL`, or `NEXT_PUBLIC_GOOGLE_ADS_FORM_LABEL` to override them. Do not leave an old `AW-XXXXXXXXX` or `PHONE_CLICK_LABEL` value in the host environment — it replaces the default. GA4 events `phone_click`, `whatsapp_click`, and `form_submit` fire alongside the Ads conversions. Check with [Tag Assistant](https://tagassistant.google.com/).

The booking form’s WhatsApp message contains the customer’s name, phone, pickup, drop, date and time. It does not insert the business number.
