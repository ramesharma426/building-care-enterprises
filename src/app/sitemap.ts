import type { MetadataRoute } from "next";
import { SITE_URL, LOCALES } from "@/lib/site";
import { localeHref } from "@/lib/paths";
import { categorySlugs } from "@/data/business";

export const dynamic = "force-static";

const staticPaths: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/products", priority: 0.9, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const { path, priority, changeFrequency } of staticPaths) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${SITE_URL}${localeHref(locale, path)}`,
        changeFrequency,
        priority,
      });
    }
  }

  for (const slug of categorySlugs) {
    const path = `/products/${slug}`;
    for (const locale of LOCALES) {
      entries.push({
        url: `${SITE_URL}${localeHref(locale, path)}`,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
