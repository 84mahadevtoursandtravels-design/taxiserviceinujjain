import { PHONE_DISPLAY, PHONE_TEL, whatsappHref, WHATSAPP_GREETING } from "@/lib/config";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

export default function StickyCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200 bg-white/95 p-2 backdrop-blur md:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="grid grid-cols-2 gap-2">
        <a
          href={PHONE_TEL}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-orange-800 text-sm font-bold text-white"
        >
          <PhoneIcon width={18} height={18} />
          Call Now
        </a>
        <a
          href={whatsappHref(WHATSAPP_GREETING)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-700 text-sm font-bold text-white"
        >
          <WhatsAppIcon width={18} height={18} />
          WhatsApp
        </a>
      </div>
      <p className="sr-only">{PHONE_DISPLAY}</p>
    </div>
  );
}
