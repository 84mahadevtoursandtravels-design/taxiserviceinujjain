import {
  ADDRESS_LINE,
  COMPANY_NAME,
  GBP_NAME,
  MAP_LINK,
  PHONE_DISPLAY,
  PHONE_TEL,
  whatsappHref,
} from "@/lib/config";

export default function Nap({
  locale = "en",
  compact = false,
}: {
  locale?: "en" | "hi";
  compact?: boolean;
}) {
  const hi = locale === "hi";

  return (
    <address className="not-italic">
      <p className="text-base font-semibold text-stone-950">{COMPANY_NAME}</p>
      <p className="mt-1 text-sm text-stone-700">Google Business Profile: {GBP_NAME}</p>
      <p className="mt-3 text-sm leading-6 text-stone-800">
        <a className="underline decoration-stone-300 underline-offset-2 hover:text-stone-950" href={MAP_LINK}>
          {ADDRESS_LINE}
        </a>
      </p>
      <p className="mt-3 text-lg font-semibold tracking-tight text-stone-950">
        <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
      </p>
      <p className="mt-1 text-sm text-stone-600">
        <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
          WhatsApp {PHONE_DISPLAY}
        </a>
      </p>
      {!compact ? (
        <p className="mt-3 text-sm font-medium text-stone-800">
          {hi ? "24/7 सेवा" : "24/7 service"}
        </p>
      ) : (
        <p className="mt-2 text-sm text-stone-600">24/7</p>
      )}
    </address>
  );
}
