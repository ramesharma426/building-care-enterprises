# SEO

Standard SEO, open to every crawler, with a few Google-specific extras layered on top per the owner's request. Nothing here blocks Bing/DuckDuckGo/Yandex/AI crawlers — see [robots & sitemap](#robots--sitemap) below.

## Metadata (`<title>`, description, canonical, hreflang, Open Graph)

`src/lib/metadata.ts` exports `buildMetadata({ locale, path, title, description })`, called from every page's `generateMetadata()`. Pass the **locale-agnostic** `path` (e.g. `"/products/hardware-tools"`, not `"/ne/products/hardware-tools"`) — the function derives both locales' URLs from it, so the EN and NE twins of a page must pass the identical `path` string or their hreflang pairing breaks.

It sets, per page:

- `title` / `description`
- `alternates.canonical` — the page's own URL
- `alternates.languages` — the `en-NP` / `ne-NP` / `x-default` hreflang set (see [i18n.md](./i18n.md#html-lang-and-hreflang))
- `openGraph` + `twitter` cards, including an explicit `images` pointing at `/opengraph-image` (see [Images](#images) — this is set explicitly rather than relying on file-convention auto-inheritance, which doesn't reliably cross the multi-root-layout boundary; see [architecture.md](./architecture.md))

`metadataBase` is set once per locale in each root layout (`src/app/(en)/layout.tsx`, `src/app/(ne)/ne/layout.tsx`), so relative URLs resolve correctly.

## Structured data (JSON-LD)

`src/lib/structuredData.ts`:

- **`localBusinessJsonLd(locale, dict)`** — a schema.org `HardwareStore` (a `LocalBusiness` subtype) entity: name, description, two phone numbers, email, address, `geo` + `hasMap` (from the owner-provided Google Maps place), and `sameAs` (currently just the Facebook page — add a Google Business Profile URL to the same array once that exists). Rendered on **every** page via `src/components/SiteBody.tsx`, so any page a crawler lands on can identify the business.
- **`breadcrumbJsonLd(items)`** — a `BreadcrumbList`, used on category pages (`src/views/CategoryView.tsx`) for the Home → Products → Category trail. Add this to any future page with real hierarchy depth.

Validate changes to either with [Google's Rich Results Test](https://search.google.com/test/rich-results) before shipping — malformed JSON-LD fails silently (Google just ignores it) rather than erroring visibly.

## Google Search Console

1. Add `buildingcare.com.np` as a property in [Search Console](https://search.google.com/search-console).
2. Choose the **HTML tag** verification method (not DNS — simpler for a static site with no DNS management access needed here) and copy the `content="..."` value.
3. Paste it into `GOOGLE_SITE_VERIFICATION` in `src/lib/site.ts`. It's picked up automatically by both root layouts' `metadata.verification.google` once non-empty — no other code changes needed.
4. After the site is live, submit `https://buildingcare.com.np/sitemap.xml` in Search Console so Google indexes both locales' full URL list immediately rather than waiting for organic discovery.

## Robots & sitemap

`src/app/robots.ts` allows `*` (every crawler) plus explicit `Googlebot` / `Googlebot-Image` rules, and points at the sitemap. `src/app/sitemap.ts` programmatically lists every static page **and** every category page, in both locales (built from `categorySlugs` in `src/data/business.ts` — adding a category there automatically adds it to the sitemap, no manual edit needed).

## Images

No `next/image` optimizer at runtime (static export — see [architecture.md](./architecture.md)), so `images.unoptimized: true` is set in `next.config.ts`. The favicon (`app/icon.png`) and Apple touch icon (`app/apple-icon.png`) are real image files (the shop's actual logo, cropped and background-removed — see [content-editing.md](./content-editing.md#logo-and-photos)); the social share image (`app/opengraph-image.tsx`) is still generated at *build* time via [`next/og`'s `ImageResponse`](https://nextjs.org/docs/app/api-reference/functions/image-response) and needs a real design. That route (and `robots.ts`/`sitemap.ts`/`manifest.ts`) needs `export const dynamic = "force-static"` — without it, `next build` fails under `output: "export"` (Next needs to know upfront the route has no per-request variation).

## AI answer engines (llms.txt)

Separately from search-engine SEO, `public/llms.txt` describes the business in plain language for AI answer engines (ChatGPT, Perplexity, Copilot, etc.) that crawl for that file by convention. It's not part of Google's ranking signals — it's a parallel, newer practice sometimes called "AI SEO" or "GEO" (generative engine optimization). Keep it in sync with `src/data/business.ts` and the category list when either changes.

## What's deliberately not done yet

- No opening hours in the LocalBusiness schema (`geo` coordinates are now filled in) — see [content-editing.md](./content-editing.md#business-facts-nap-registration-categories) for what to fill in once hours are known.
- No Google Business Profile `sameAs` link yet (Facebook is already wired in) — add once that profile is created; this matters more for local pack ranking than the website itself does.
- No per-product structured data (`Product`/`Offer` schema) — there's no priced catalog yet to describe; add this alongside the real product data model mentioned in [content-editing.md](./content-editing.md#adding-real-products).
