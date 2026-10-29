import Link from "next/link";

import Nap from "@/components/Nap";
import { COMPANY_NAME, DEVELOPER_NAME, DEVELOPER_URL } from "@/lib/config";

const pageLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#routes", label: "Routes" },
  { href: "/#contact", label: "Contact" },
  { href: "/indore-airport-taxi", label: "Indore airport taxi" },
  { href: "/ujjain-to-indore-taxi", label: "Ujjain to Indore" },
  { href: "/ujjain-to-omkareshwar-taxi", label: "Ujjain to Omkareshwar" },
  { href: "/mahakal-darshan-taxi", label: "Mahakal darshan taxi" },
  { href: "/outstation-taxi-ujjain", label: "Outstation taxi" },
  { href: "/hi", label: "उज्जैन टैक्सी सर्विस" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
            Contact
          </h2>
          <div className="mt-3">
            <Nap compact />
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-stone-600">
            Safe, fast and affordable car taxi for Indore airport, Ujjain railway
            station, local rides, Mahakaleshwar darshan and outstation trips.
            Call for best rate.
          </p>
        </div>
        <nav className="flex flex-col gap-2" aria-label="Footer">
          {pageLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-stone-700 hover:text-stone-950">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mx-auto w-full max-w-6xl px-4 pb-8">
        <div className="flex flex-col gap-2 border-t border-stone-200 pt-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </div>
          <div>
            Design &amp; Developed by{" "}
            <a className="font-semibold text-stone-700 hover:text-stone-950" href={DEVELOPER_URL}>
              {DEVELOPER_NAME}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
