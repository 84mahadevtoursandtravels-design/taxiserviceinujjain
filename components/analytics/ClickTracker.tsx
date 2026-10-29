"use client";

import { useEffect } from "react";

import { trackPhoneClick, trackWhatsAppClick } from "@/lib/track";

export default function ClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        trackPhoneClick(href);
        return;
      }
      if (href.includes("wa.me/") || href.includes("api.whatsapp.com")) {
        trackWhatsAppClick(anchor.getAttribute("aria-label") || "whatsapp");
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
