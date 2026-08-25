import type { Metadata } from "next";
import { LOCALE_TAG, SITE_NAME, SITE_URL } from "./site";
import type { Locale } from "./site";
import { localeHref } from "./paths";

/**
 * Builds a page's <head> metadata: title, description, canonical URL, and
 * hreflang alternates linking the EN/NE twin of the page. `path` is the
 * locale-agnostic path (e.g. "/", "/about", "/products/hardware-tools") —
 * pass the same `path` from both the EN and NE version of a page so the
 * hreflang pair lines up.
 */
export function buildMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const enUrl = `${SITE_URL}${localeHref("en", path)}`;
  const neUrl = `${SITE_URL}${localeHref("ne", path)}`;
  const canonical = locale === "en" ? enUrl : neUrl;
  // Set explicitly rather than relying on opengraph-image.tsx auto-merging:
  // that file lives above both locale root layouts (multi-root-layout
  // pattern), and file-convention image inheritance doesn't reliably reach
  // across that boundary. See docs/i18n.md.
  const ogImage = `${SITE_URL}/opengraph-image`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        [LOCALE_TAG.en]: enUrl,
        [LOCALE_TAG.ne]: neUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: LOCALE_TAG[locale],
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
