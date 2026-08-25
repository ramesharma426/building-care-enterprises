/**
 * Facts about the business itself: NAP data, registration details, and the
 * product category list. Source: domain-registration cover letter to
 * Mercantile Communications (.np registry), 24 Aug 2026 — Firm Reg. No. 226
 * (Hetauda Sub-Metropolitan City, Industry Development Section, Makawanpur),
 * PAN 607227600.
 *
 * Display copy (headings, descriptions) lives in src/dictionaries/*.ts, not
 * here — this file is locale-agnostic fact data only. To add real product
 * items later, see docs/content-editing.md.
 */

export const business = {
  legalName: "Building Care Enterprises",
  proprietor: "Rahul Jalan",
  firmRegistrationNo: "226",
  firmRegistrationAuthority:
    "Hetauda Sub-Metropolitan City, Industry Development Section, Makawanpur",
  pan: "607227600",

  phoneDisplay: "985-5039839",
  phoneE164: "+9779855039839",
  // WhatsApp runs on a separate number from the main phone line — confirmed
  // by the owner. Digits only, no "+", as required by wa.me links.
  whatsappNumber: "9779817231502",
  email: "rjalan17@gmail.com",

  // Share-redirect link (facebook.com/share/...), not yet the page's plain
  // vanity URL — works fine as a clickable link either way. Swap in the
  // canonical facebook.com/<username> URL here if/when known, for a cleaner
  // JSON-LD sameAs value. See docs/content-editing.md.
  facebookUrl: "https://www.facebook.com/share/1HtoShsCzs/",

  address: {
    line1: "Ward No. 7, Kamane",
    city: "Hetauda",
    district: "Makawanpur",
    province: "Bagmati Province",
    country: "Nepal",
    countryCode: "NP",
    postalCode: "44107",
  },

  // No verified lat/long yet. Once the shop is pinned on Google Business
  // Profile, add { lat, lng } here and wire it into JSON-LD + the map embed
  // — see docs/seo.md#local-business-schema. Left unset rather than guessed,
  // since a wrong pin actively misdirects customers.
  geo: null as { lat: number; lng: number } | null,
} as const;

export type CategorySlug =
  | "hardware-tools"
  | "sanitary-plumbing"
  | "electrical"
  | "motor-parts"
  | "furniture"
  | "electronics";

/** Stable, locale-agnostic category identifiers + icon keys. Names and
 * descriptions are looked up per-locale from the dictionaries by slug. */
export const categorySlugs: CategorySlug[] = [
  "hardware-tools",
  "sanitary-plumbing",
  "electrical",
  "motor-parts",
  "furniture",
  "electronics",
];
