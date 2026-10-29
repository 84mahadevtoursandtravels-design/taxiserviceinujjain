import type { FaqItem } from "@/lib/schema";

export default function FaqList({
  faqs,
  heading = "Questions",
}: {
  faqs: FaqItem[];
  heading?: string;
}) {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold tracking-tight text-stone-950">{heading}</h2>
      <div className="mt-4 divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white">
        {faqs.map((faq) => (
          <details key={faq.question} className="group px-4 py-3">
            <summary className="cursor-pointer list-none text-base font-semibold text-stone-950 [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                {faq.question}
                <span aria-hidden className="text-stone-400 group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="pb-2 pt-2 text-sm leading-6 text-stone-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
