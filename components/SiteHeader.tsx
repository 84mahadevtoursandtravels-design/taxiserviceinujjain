import Link from "next/link";

import { CarMark, PhoneIcon } from "@/components/icons";
import { COMPANY_NAME, PHONE_DISPLAY, PHONE_TEL } from "@/lib/config";

const navItems = [
  { href: "/#services", label: "Services" },
  { href: "/#routes", label: "Routes" },
  { href: "/indore-airport-taxi", label: "Airport" },
  { href: "/mahakal-darshan-taxi", label: "Darshan" },
  { href: "/#contact", label: "Contact" },
  { href: "/hi", label: "हिंदी" },
  { href: "/", label: "English" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 text-stone-950" aria-label={COMPANY_NAME}>
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-orange-800 text-white">
            <CarMark width={22} height={22} />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-bold">Car Taxi Service</span>
            <span className="block text-xs text-stone-500">Ujjain · 24/7</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-700 hover:text-stone-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={PHONE_TEL}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-orange-800 px-4 py-2 text-sm font-bold text-white hover:bg-orange-900"
        >
          <PhoneIcon width={16} height={16} />
          <span className="sm:hidden">Call</span>
          <span className="hidden sm:inline">Call {PHONE_DISPLAY}</span>
        </a>
      </div>
      <nav className="flex gap-4 overflow-x-auto px-4 pb-3 lg:hidden" aria-label="Mobile">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 text-sm font-medium text-stone-700"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
