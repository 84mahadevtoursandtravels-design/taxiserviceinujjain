import Link from "next/link";

import ContactForm from "@/components/contact/ContactForm";
import CtaPair from "@/components/CtaPair";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import MapEmbed from "@/components/MapEmbed";
import Nap from "@/components/Nap";
import type { LandingContent } from "@/lib/landings";
import { faqJsonLd } from "@/lib/schema";

export default function LandingView({ page }: { page: LandingContent }) {
  const hi = page.locale === "hi";

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:py-12">
      <section id="contact" className="scroll-mt-32">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-800">{page.eyebrow}</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
          {page.h1}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-stone-700 sm:text-lg">{page.intro[0]}</p>
        <div className="mt-6">
          <CtaPair locale={page.locale} source={page.source} />
        </div>
        <p className="mt-3 text-sm font-medium text-stone-700">
          {hi ? "बेस्ट रेट के लिए कॉल करें।" : "Call for best rate."}
        </p>
        {page.intro.length > 1 ? (
          <div className="mt-4 max-w-3xl space-y-3 text-base leading-7 text-stone-700">
            {page.intro.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-2">
          <ContactForm
            idPrefix="booking"
            locale={page.locale}
            source={page.source}
            defaultPickup={page.defaults.pickup}
            defaultDrop={page.defaults.drop}
          />
          <div className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-stone-950">
              {hi ? "पता और फोन" : "Address and phone"}
            </h2>
            <div className="mt-3">
              <Nap locale={page.locale} />
            </div>
            <div className="mt-5">
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-950">
          {hi ? "क्या शामिल है" : "What you can book"}
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {page.points.map((point) => (
            <article key={point.title} className="rounded-2xl border border-stone-200 bg-white p-5">
              <h3 className="text-base font-semibold text-stone-950">{point.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-700">{point.text}</p>
            </article>
          ))}
        </div>
        <ol className="mt-6 list-decimal space-y-2 pl-5 text-sm leading-6 text-stone-700">
          {page.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <FaqList faqs={page.faqs} heading={hi ? "सवाल" : "Questions"} />

      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-950">
          {hi ? "और पेज" : "More taxi pages"}
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {page.related.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-2xl border border-stone-200 bg-white px-4 py-4 hover:border-orange-300"
            >
              <span className="block font-semibold text-stone-950">{link.label}</span>
              <span className="mt-1 block text-sm leading-6 text-stone-600">{link.text}</span>
            </Link>
          ))}
        </div>
      </section>

      <JsonLd data={faqJsonLd(page.faqs)} />
    </main>
  );
}
