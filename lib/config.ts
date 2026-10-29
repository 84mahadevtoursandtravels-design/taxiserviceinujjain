/**
 * Business facts and tracking IDs for Car Taxi Service Ujjain.
 * Phone, address and names below are the only NAP to show on the site.
 *
 * Google Ads:
 * Defaults below are the live conversion actions. Environment variables
 * override them when set: NEXT_PUBLIC_GOOGLE_ADS_ID and
 * NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL, NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL,
 * NEXT_PUBLIC_GOOGLE_ADS_FORM_LABEL.
 * send_to is `${GOOGLE_ADS_ID}/${label}`.
 */

export const COMPANY_NAME = "Car Taxi Service Ujjain";

/** Google Business Profile listing name. Show this with the brand, unchanged. */
export const GBP_NAME = "ujjain darshan";

export const ADDRESS_LINE = "Mahakal Marg, Chourha, Ujjain, Madhya Pradesh 456006";

export const ADDRESS = {
  streetAddress: "Mahakal Marg, Chourha",
  addressLocality: "Ujjain",
  addressRegion: "Madhya Pradesh",
  postalCode: "456006",
  addressCountry: "IN",
} as const;

/** Display form, with spaces, used everywhere the number is visible. */
export const PHONE_DISPLAY = "+91 70246 01594";

/** E.164. tel: links must use this, including the leading +. */
export const PHONE_E164 = "+917024601594";

export const PHONE_TEL = `tel:${PHONE_E164}`;

/** wa.me path segment, country code, no plus. */
export const WHATSAPP_NUMBER = "917024601594";

/** Floating button and generic WhatsApp CTAs. Do not put the business number in this text. */
export const WHATSAPP_GREETING = "Hi! I want to book a taxi in Ujjain.";

export const WHATSAPP_GREETING_HI = "नमस्ते! मुझे उज्जैन में टैक्सी बुक करनी है।";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.taxiservicesinujjain.com"
).replace(/\/$/, "");

export const MAP_QUERY = ADDRESS_LINE;

export const MAP_EMBED_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&hl=en&z=16&output=embed`;

export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

export const DEVELOPER_NAME = "Hussainiitservices.com";
export const DEVELOPER_URL = "https://hussainiitservices.com";

/** Existing GA4 property. Do not remove. */
export const GA4_MEASUREMENT_ID = "G-KS9SNXRTJH";

/**
 * Google Ads tag. Env overrides the default when NEXT_PUBLIC_GOOGLE_ADS_ID is set.
 */
export const GOOGLE_ADS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "AW-18310960671";

/** Conversion labels. Env overrides each default when that variable is set. */
export const GOOGLE_ADS_LABELS = {
  phoneClick: process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL ?? "TUj2CN6niKodEJ-srJtE",
  whatsappClick:
    process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL ?? "hnvECNuniKodEJ-srJtE",
  formSubmit: process.env.NEXT_PUBLIC_GOOGLE_ADS_FORM_LABEL ?? "7_MGCNiniKodEJ-srJtE",
} as const;

export type AdsLabelKey = keyof typeof GOOGLE_ADS_LABELS;

const PLACEHOLDER_LABELS = new Set([
  "PHONE_CLICK_LABEL",
  "WHATSAPP_CLICK_LABEL",
  "FORM_SUBMIT_LABEL",
]);

export function isGoogleAdsConfigured(id: string = GOOGLE_ADS_ID): boolean {
  return /^AW-\d+$/.test(id);
}

export function isAdsLabelConfigured(label: string): boolean {
  return /^[A-Za-z0-9_-]{3,80}$/.test(label) && !PLACEHOLDER_LABELS.has(label);
}

export function whatsappHref(text: string = WHATSAPP_GREETING): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
