import { PHONE_DISPLAY, PHONE_TEL, whatsappHref, WHATSAPP_GREETING, WHATSAPP_GREETING_HI } from "@/lib/config";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

export default function CtaPair({
  locale = "en",
  source,
}: {
  locale?: "en" | "hi";
  source?: string;
}) {
  const hi = locale === "hi";
  const text = hi ? WHATSAPP_GREETING_HI : WHATSAPP_GREETING;
  const pageBit = source ? `\n\nPage: ${source}` : "";

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={PHONE_TEL}
        className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-orange-800 px-6 text-base font-bold text-white shadow-sm hover:bg-orange-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-700 focus-visible:ring-offset-2 sm:w-auto sm:min-w-44"
      >
        <PhoneIcon width={22} height={22} />
        {hi ? "अभी कॉल करें" : "Call Now"}
      </a>
      <a
        href={whatsappHref(`${text}${pageBit}`)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 text-base font-bold text-white shadow-sm hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 sm:w-auto sm:min-w-44"
      >
        <WhatsAppIcon width={22} height={22} />
        WhatsApp
      </a>
      <span className="sr-only">
        {hi ? "फोन" : "Phone"} {PHONE_DISPLAY}
      </span>
    </div>
  );
}
