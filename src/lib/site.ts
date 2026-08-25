/**
 * Site-wide constants. SITE_URL must stay in sync with public/CNAME and the
 * GitHub Pages custom-domain setting — see docs/deployment.md.
 */
export const SITE_URL = "https://buildingcare.com.np";
export const SITE_NAME = "Building Care Enterprises";

/** Paste the Google Search Console HTML-tag verification code here (just
 * the `content` value, not the whole <meta> tag) once you've added the
 * property for buildingcare.com.np. See docs/seo.md#google-search-console. */
export const GOOGLE_SITE_VERIFICATION = "";

export const LOCALES = ["en", "ne"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

/** Locale -> path prefix used when building links between languages. */
export const LOCALE_PREFIX: Record<Locale, string> = {
  en: "",
  ne: "/ne",
};

/** Locale -> BCP 47 tag used in hreflang / html[lang]. Region pinned to NP
 * since every reader is assumed to be shopping in Nepal. */
export const LOCALE_TAG: Record<Locale, string> = {
  en: "en-NP",
  ne: "ne-NP",
};
