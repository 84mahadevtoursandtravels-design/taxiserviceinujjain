import type { Metadata } from "next";

import { COMPANY_NAME, SITE_URL } from "@/lib/config";

export function pageMetadata({
  title,
  description,
  path,
  locale = "en_IN",
  absoluteTitle = false,
  languages,
}: {
  title: string;
  description: string;
  path: string;
  locale?: "en_IN" | "hi_IN";
  absoluteTitle?: boolean;
  languages?: Record<string, string>;
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      title,
      description,
      url: path,
      locale,
      type: "website",
      siteName: COMPANY_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const HOME_LANGUAGES = {
  en: SITE_URL,
  hi: `${SITE_URL}/hi`,
  "x-default": SITE_URL,
};
