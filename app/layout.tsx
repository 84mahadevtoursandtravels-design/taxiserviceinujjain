import type { Metadata } from "next";
import { Geist } from "next/font/google";

import GoogleTags from "@/components/analytics/GoogleTags";
import ClickTracker from "@/components/analytics/ClickTracker";
import JsonLd from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StickyCallBar from "@/components/StickyCallBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { COMPANY_NAME, SITE_URL } from "@/lib/config";
import { taxiServiceJsonLd } from "@/lib/schema";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Taxi Service in Ujjain – 24/7 Car Taxi",
    template: "%s | Car Taxi Service Ujjain",
  },
  description:
    "24/7 car taxi in Ujjain for Indore airport pickup and drop, railway station, Mahakaleshwar darshan and outstation trips. Call or WhatsApp +91 70246 01594.",
  applicationName: COMPANY_NAME,
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: COMPANY_NAME,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-stone-50 pb-20 text-stone-900 md:pb-0">
        <GoogleTags />
        <JsonLd data={taxiServiceJsonLd()} />
        <a
          href="#contact"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to booking
        </a>
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <StickyCallBar />
        <WhatsAppButton />
        <ClickTracker />
      </body>
    </html>
  );
}
