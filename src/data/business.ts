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

  // Primary/landline number — confirmed by the owner as the number to lead
  // with. Used for the "Call Us" quick-dial buttons in Header/Footer and as
  // the primary JSON-LD `telephone`.
  phoneDisplay: "057-524865",
  phoneE164: "+97757524865",
  // A second, mobile number the owner also wants published — shown
  // alongside the landline on the Contact page. Not used for the header's
  // single quick-dial button (that stays the landline).
  mobilePhoneDisplay: "985-5039839",
  mobilePhoneE164: "+9779855039839",
  // WhatsApp runs on a separate number from both phone numbers above —
  // confirmed by the owner. Digits only, no "+", as required by wa.me links.
  whatsappNumber: "9779817231502",
  email: "rjalan17@gmail.com",

  // Canonical page URL (confirmed by the owner) — used for the "visit our
  // Facebook page" links and the JSON-LD `sameAs` value.
  facebookUrl: "https://www.facebook.com/buildingcaree",
  // m.me deep link built from the same page username, for a one-tap
  // Messenger chat open (see ChatBubble.tsx) instead of landing on the
  // Facebook page first.
  messengerUrl: "https://m.me/buildingcaree",

  // line1 already includes the ward + street ("Hetauda - 2, Kantirajpath"),
  // confirmed directly by the owner (replaced an earlier "Ward No. 7,
  // Kamane" from the domain-registration cover letter, which the owner
  // says is not the current address). `city` stays "Hetauda" for the
  // structured-data address fields even though line1 also mentions it —
  // display templates (Footer, ContactView) drop the redundant city when
  // rendering the free-text line, see the comments there.
  address: {
    line1: "Hetauda - 2, Kantirajpath",
    city: "Hetauda",
    district: "Makawanpur",
    province: "Bagmati Province",
    country: "Nepal",
    countryCode: "NP",
    postalCode: "44107",
  },

  // The shop's verified Google Maps place — provided directly by the owner.
  // lat/lng are the place's precise pin (the `!3d`/`!4d` values in the
  // Maps URL), not the coarser `@lat,lng` viewport-center value in the same
  // URL. Wired into JSON-LD `geo` + `hasMap` and the Contact page map
  // embed/"Get Directions" link.
  geo: { lat: 27.4297153, lng: 85.0366396 } as { lat: number; lng: number } | null,
  googleMapsUrl:
    "https://www.google.com/maps/place/Building+Care+Enterprises/@27.4296474,85.0366181,21z/data=!4m6!3m5!1s0x39eb49f2ec32bad1:0x7357bd2d09258873!8m2!3d27.4297153!4d85.0366396!16s%2Fg%2F11ntkqlnlk?entry=ttu&g_ep=EgoyMDI2MDgyMy4wIKXMDSoASAFQAw%3D%3D",
} as const;

export type CategorySlug =
  | "building-materials"
  | "sanitary-plumbing"
  | "machinery-tools"
  | "appliances";

/** Stable, locale-agnostic category identifiers + icon keys. Names and
 * descriptions are looked up per-locale from the dictionaries by slug.
 *
 * This list reflects the shop's actual stock — confirmed by the owner, then
 * verified and enriched against real shopfront/storeroom photos (cement
 * brands, paint brands, roofing sheets, pipes, doors, tools, appliances,
 * etc.) — not the broader category list on the original firm-registration
 * paperwork. See docs/content-editing.md for the prior 6-category list this
 * replaced. */
export const categorySlugs: CategorySlug[] = [
  "building-materials",
  "sanitary-plumbing",
  "machinery-tools",
  "appliances",
];
