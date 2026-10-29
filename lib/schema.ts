import {
  ADDRESS,
  ADDRESS_LINE,
  COMPANY_NAME,
  GBP_NAME,
  MAP_LINK,
  PHONE_E164,
  SITE_URL,
} from "@/lib/config";

export type FaqItem = { question: string; answer: string };

export function taxiServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": `${SITE_URL}/#taxi-service`,
    name: COMPANY_NAME,
    alternateName: GBP_NAME,
    url: SITE_URL,
    telephone: PHONE_E164,
    image: `${SITE_URL}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.streetAddress,
      addressLocality: ADDRESS.addressLocality,
      addressRegion: ADDRESS.addressRegion,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.addressCountry,
    },
    hasMap: MAP_LINK,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      "Ujjain",
      "Indore",
      "Omkareshwar",
      "Maheshwar",
      "Mandu",
      "Dewas",
      "Nalkheda",
    ].map((name) => ({ "@type": "City", name })),
    description: `24/7 car taxi in Ujjain. ${ADDRESS_LINE}. Phone ${PHONE_E164}.`,
  };
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
