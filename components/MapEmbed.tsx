import { ADDRESS_LINE, COMPANY_NAME, MAP_EMBED_SRC, MAP_LINK } from "@/lib/config";

export default function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
      <iframe
        title={`Map: ${COMPANY_NAME}, ${ADDRESS_LINE}`}
        src={MAP_EMBED_SRC}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-64 w-full border-0 sm:h-80"
      />
      <div className="border-t border-stone-200 bg-white px-4 py-3 text-sm">
        <a className="font-semibold text-orange-800 hover:text-orange-950" href={MAP_LINK}>
          Open this address in Google Maps
        </a>
      </div>
    </div>
  );
}
