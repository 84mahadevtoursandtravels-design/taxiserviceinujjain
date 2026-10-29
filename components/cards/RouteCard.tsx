import Link from "next/link";

import type { RouteItem } from "@/lib/home";

const tones: Record<RouteItem["tone"], string> = {
  saffron: "from-orange-700 to-amber-500",
  teal: "from-teal-800 to-cyan-600",
  indigo: "from-indigo-800 to-blue-500",
  rose: "from-rose-800 to-orange-400",
  stone: "from-stone-800 to-stone-500",
  amber: "from-amber-800 to-yellow-500",
  emerald: "from-emerald-800 to-lime-600",
};

export function RouteCard({ route }: { route: RouteItem }) {
  return (
    <Link
      href={route.href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-700"
    >
      <div className={`relative h-24 bg-gradient-to-br ${tones[route.tone]}`} aria-hidden>
        <svg viewBox="0 0 200 80" className="absolute inset-0 h-full w-full opacity-30" preserveAspectRatio="none">
          <path d="M0 60 C 40 20, 80 70, 120 30 S 180 20, 200 50" fill="none" stroke="white" strokeWidth="6" />
          <circle cx="28" cy="28" r="10" fill="white" />
        </svg>
        <span className="absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-wide text-white/90">
          Call for best rate
        </span>
      </div>
      <div className="flex flex-1 flex-col px-4 py-4">
        <h3 className="text-base font-semibold text-stone-950">
          {route.from} → {route.to}
        </h3>
        <p className="mt-1 text-sm leading-6 text-stone-600">{route.note}</p>
        <p className="mt-3 text-sm font-semibold text-orange-800 group-hover:text-orange-950">
          Call for best rate
        </p>
      </div>
    </Link>
  );
}
