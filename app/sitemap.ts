import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/config";

const paths = [
  "/",
  "/indore-airport-taxi",
  "/ujjain-to-omkareshwar-taxi",
  "/mahakal-darshan-taxi",
  "/ujjain-to-indore-taxi",
  "/outstation-taxi-ujjain",
  "/hi",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-26");
  return paths.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
