import Script from "next/script";

import {
  GA4_MEASUREMENT_ID,
  GOOGLE_ADS_ID,
  isGoogleAdsConfigured,
} from "@/lib/config";

function bootstrap() {
  const lines = [
    "window.dataLayer = window.dataLayer || [];",
    "function gtag(){dataLayer.push(arguments);}",
    "window.gtag = gtag;",
    "gtag('js', new Date());",
    `gtag('config', '${GA4_MEASUREMENT_ID}');`,
  ];
  if (isGoogleAdsConfigured()) {
    lines.push(`gtag('config', '${GOOGLE_ADS_ID}');`);
  }
  return lines.join("\n");
}

export default function GoogleTags() {
  const loaderId = isGoogleAdsConfigured() ? GOOGLE_ADS_ID : GA4_MEASUREMENT_ID;

  return (
    <>
      <Script id="gtag-init" strategy="afterInteractive">
        {bootstrap()}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${loaderId}`}
        strategy="afterInteractive"
      />
    </>
  );
}
