# Architecture

## Rendering model

`next.config.ts` sets `output: "export"`. Every route in this app is pre-rendered to a static HTML file at `next build` time (output lands in `out/`). There is no Node server at runtime — the whole site is plain HTML/CSS/JS uploaded to GitHub Pages. This constrains what's usable:

- No Server Actions, no Route Handlers that read the request, no cookies/headers APIs, no ISR/revalidation, no redirects/rewrites/headers in `next.config.ts`, no default `next/image` optimizer (hence `images.unoptimized: true`).
- Every dynamic route **must** have `generateStaticParams()` and `export const dynamicParams = false`, so Next knows every path to render ahead of time. See the category route below.
- Client interactivity (mobile nav toggle, language-switcher active state) is done with small `"use client"` components layered on top of server-rendered pages — see [components.md](./components.md).

If you're ever tempted to reach for something server-side (a contact form that emails on submit, live stock lookup, etc.), it needs a third-party service called from the client (e.g. Formspree, a WhatsApp deep link) — there's no backend to add the logic to without leaving static export.

## Route structure: why two route groups

```
src/app/
  (en)/              # route group — URLs unprefixed: /, /about, /products, ...
    layout.tsx        # root layout #1: <html lang="en">
    page.tsx
    about/page.tsx
    products/page.tsx
    products/[category]/page.tsx
    contact/page.tsx
  (ne)/ne/           # route group — URLs prefixed: /ne, /ne/about, ...
    layout.tsx        # root layout #2: <html lang="ne">
    page.tsx
    about/page.tsx
    products/page.tsx
    products/[category]/page.tsx
    contact/page.tsx
  sitemap.ts           # -> /sitemap.xml, lists every EN + NE URL
  robots.ts             # -> /robots.txt
  global-not-found.tsx  # 404 for unmatched URLs (see below)
  icon.tsx / apple-icon.tsx / opengraph-image.tsx  # generated image routes
  globals.css
```

`(en)` and `(ne)` are [route groups](https://nextjs.org/docs/app/api-reference/file-conventions/route-groups) — the parentheses mean the folder name is dropped from the URL. Next.js supports **multiple root layouts** this way: each group's `layout.tsx` renders its own `<html>`/`<body>`, so English pages get `<html lang="en">` and Nepali pages get `<html lang="ne">` — something a single shared root layout can't do per-route.

This was chosen over the officially-recommended `app/[lang]/...` dynamic-segment pattern (see Next's own internationalization guide) specifically because **GitHub Pages cannot do a server-side redirect**. The `[lang]` pattern needs something at bare `/` to redirect to `/en` or `/ne`; on a static host with no server, that redirect would have to be client-side/meta-refresh, which is worse for SEO than the domain root serving real content directly. Keeping English unprefixed at `/` avoids that problem entirely. The trade-off, per Next's docs, is a full page reload (not a client-side transition) when switching languages — acceptable here since language switching isn't a frequent in-session action.

Because there's no single shared root layout, Next can't compose one global 404 page from "the" root layout — that's what `app/global-not-found.tsx` is for (enabled via `experimental.globalNotFound: true` in `next.config.ts`). It renders its own complete `<html>`/`<body>` and handles any URL that doesn't match a route in either group.

## Pages vs. views

Every real page is split into two files:

- **`app/(en)/about/page.tsx`** (and its `(ne)/ne/about/page.tsx` twin) — thin routing glue. Exports `generateMetadata()` (via [`buildMetadata()`](./seo.md)) and renders the shared view with the right locale.
- **`src/views/AboutView.tsx`** — the actual page content, written once, taking a `locale` prop and pulling its copy from the [dictionary](./i18n.md) for that locale.

This means adding a new page is: write one view component, then two ~15-line page.tsx files (one per locale) that both point at it. It also means the EN and NE versions of a page can never structurally drift apart — only the words differ, because they render the exact same component tree.

## The category route

`src/app/(en)/products/[category]/page.tsx` (and its `/ne/` twin) is the one dynamic route in the app. `generateStaticParams()` returns the six slugs from `src/data/business.ts`, and `dynamicParams = false` tells Next to 404 (via `notFound()`) on anything else rather than trying to render it on demand — required for static export, since there's no server to render an unknown category on request.

## Data flow for a page render

1. `page.tsx` calls `getDictionary(locale)` (English or Nepali strings, see [i18n.md](./i18n.md)) and/or reads `src/data/business.ts` (locale-agnostic facts: phone, address, category slugs).
2. `generateMetadata()` feeds title/description into `buildMetadata()` ([seo.md](./seo.md)) to produce the `<head>` tags, including the hreflang pair pointing at the other locale's version of the same page.
3. The view component renders using shared UI from `src/components/` ([components.md](./components.md)), styled with the Tailwind v4 tokens in `src/app/globals.css` ([design-system.md](./design-system.md)).
