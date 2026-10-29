import { whatsappHref, WHATSAPP_GREETING } from "@/lib/config";
import { WhatsAppIcon } from "@/components/icons";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappHref(WHATSAPP_GREETING)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Car Taxi Service Ujjain"
      className="fixed bottom-5 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-emerald-700 text-white shadow-lg hover:bg-emerald-800 md:inline-flex"
    >
      <WhatsAppIcon width={28} height={28} />
    </a>
  );
}
