import { business } from "@/data/business";
import { SITE_URL } from "./site";
import type { Locale } from "./site";
import type { Dictionary } from "@/dictionaries/types";

/** schema.org LocalBusiness (HardwareStore) entity — included on every page
 * so any page a crawler lands on can identify the business. See
 * docs/seo.md#local-business-schema for what to fill in once available
 * (geo coordinates, opening hours, Google Business Profile URL). */
export function localBusinessJsonLd(locale: Locale, dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "HardwareStore",
    "@id": `${SITE_URL}/#business`,
    name: business.legalName,
    description: dict.meta.home.description,
    url: SITE_URL,
    telephone: business.phoneE164,
    email: business.email,
    priceRange: "$$",
    inLanguage: locale,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.line1,
      addressLocality: business.address.city,
      addressRegion: business.address.province,
      postalCode: business.address.postalCode,
      addressCountry: business.address.countryCode,
    },
    // Add a Google Business Profile URL here too once that's created.
    sameAs: [business.facebookUrl],
    ...(business.geo
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: business.geo.lat,
            longitude: business.geo.lng,
          },
        }
      : {}),
  } as const;
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  } as const;
}
