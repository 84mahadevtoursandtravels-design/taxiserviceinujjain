import {
  GOOGLE_ADS_ID,
  GOOGLE_ADS_LABELS,
  isAdsLabelConfigured,
  isGoogleAdsConfigured,
  type AdsLabelKey,
} from "@/lib/config";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtagShim() {
      // Google's gtag queue expects the Arguments object from this call.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
  }
  window.gtag(...args);
}

function fireAdsConversion(key: AdsLabelKey) {
  if (!isGoogleAdsConfigured()) return;
  const label = GOOGLE_ADS_LABELS[key];
  if (!isAdsLabelConfigured(label)) return;
  gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
    transport_type: "beacon",
  });
}

export function trackPhoneClick(label?: string) {
  gtag("event", "phone_click", {
    event_category: "engagement",
    event_label: label || "tel",
    transport_type: "beacon",
  });
  fireAdsConversion("phoneClick");
}

export function trackWhatsAppClick(label?: string) {
  gtag("event", "whatsapp_click", {
    event_category: "engagement",
    event_label: label || "whatsapp",
    transport_type: "beacon",
  });
  fireAdsConversion("whatsappClick");
}

export function trackFormSubmit(label?: string) {
  gtag("event", "form_submit", {
    event_category: "engagement",
    event_label: label || "booking_form",
    method: "whatsapp",
    transport_type: "beacon",
  });
  fireAdsConversion("formSubmit");
}
