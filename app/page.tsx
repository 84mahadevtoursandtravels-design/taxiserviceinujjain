import Link from "next/link";

import { RouteCard } from "@/components/cards/RouteCard";
import ContactForm from "@/components/contact/ContactForm";
import CtaPair from "@/components/CtaPair";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import MapEmbed from "@/components/MapEmbed";
import Nap from "@/components/Nap";
import { PHONE_DISPLAY } from "@/lib/config";
import { homeFaqs, routes, services } from "@/lib/home";
import { faqJsonLd } from "@/lib/schema";
import { HOME_LANGUAGES, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Taxi Service in Ujjain – 24/7 Car Taxi",
  description:
    "24/7 car taxi in Ujjain for Indore airport pickup and drop, railway station, Mahakaleshwar darshan and outstation trips. Call or WhatsApp +91 70246 01594.",
  path: "/",
  absoluteTitle: true,
  languages: HOME_LANGUAGES,
});

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:py-12">
      <section id="contact" className="scroll-mt-32">
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div id="home">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-800">
              Car Taxi Service Ujjain · 24/7
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
              Taxi Service in Ujjain – 24/7 Car Taxi
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-stone-700 sm:text-lg">
              Safe, fast and affordable car taxi for Indore airport pickup and drop,
              Ujjain railway station, local city rides, Mahakaleshwar darshan and
              outstation trips. Clean cars, polite drivers and on-time pickups.
            </p>
            <div className="mt-6">
              <CtaPair source="Homepage" />
            </div>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-stone-950">
              {PHONE_DISPLAY}
            </p>
            <p className="mt-1 text-sm text-stone-600">
              24/7 · Call for best rate · Fast reply on WhatsApp
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-2 text-sm font-medium text-stone-800">
              {["24/7 service", "Clean cars", "Polite drivers", "On-time pickups"].map((item) => (
                <li key={item} className="rounded-2xl border border-stone-200 bg-white px-3 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ContactForm idPrefix="home" source="Homepage" />
        </div>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-stone-950">Visit or call</h2>
            <div className="mt-3">
              <Nap />
            </div>
          </div>
          <MapEmbed />
        </div>
      </section>

      <section id="services" className="mt-16 scroll-mt-32">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-stone-950">Services</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-600">
              Airport means Indore (Devi Ahilyabai Holkar Airport). Ujjain does not
              have a commercial airport. Every trip is call for best rate.
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm hover:border-orange-300"
            >
              <h3 className="text-base font-semibold text-stone-950">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">{service.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="routes" className="mt-16 scroll-mt-32">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-stone-950">Routes</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              Indore, Omkareshwar, Maheshwar, Mandu, Dewas and Baglamukhi (Nalkheda).
            </p>
          </div>
          <Link href="/#contact" className="text-sm font-semibold text-orange-800">
            Book now
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((route) => (
            <RouteCard key={route.id} route={route} />
          ))}
        </div>
      </section>

      <FaqList faqs={homeFaqs} />
      <JsonLd data={faqJsonLd(homeFaqs)} />
    </main>
  );
}
