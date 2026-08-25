# Editing content

This site currently ships with **category-level placeholders**, not a real product catalog — the product list was not available when the site was built. This doc is the checklist for replacing placeholders with real data.

## Business facts (NAP, registration, categories)

`src/data/business.ts` is the single source of truth for facts that aren't translated — phone, WhatsApp, Facebook, email, address, registration numbers, and the list of category slugs. Update it in place; every component (header, footer, contact page, JSON-LD) reads from here, so a change here propagates everywhere automatically.

Note that `phoneE164` (the main line, used for the "Call Us" button and JSON-LD `telephone`) and `whatsappNumber` are two **different** numbers — confirmed by the owner, not a typo. Keep them separate if either changes.

`facebookUrl` currently holds a `facebook.com/share/...` redirect link, not the page's plain vanity URL — it works fine as a clickable link (and in the JSON-LD `sameAs` array) either way, but swap in the canonical `facebook.com/<username>` URL here if you ever get it, for a slightly cleaner sameAs value.

Two other fields were deliberately left blank rather than guessed:

- **`business.geo`** — no verified latitude/longitude yet. Once the shop is pinned on Google Business Profile (or you drop a pin in Google Maps and copy the coordinates), fill in `{ lat, lng }`. This feeds the `GeoCoordinates` block in the LocalBusiness JSON-LD (see [seo.md](./seo.md)) — a wrong pin would misdirect real customers, so it's better absent than wrong.
- **Opening hours** — not shown anywhere on the site yet (the Contact page just says "call ahead to confirm"). Once hours are confirmed, they should be added both to the visible Contact page copy (`contact.hoursNote` in the dictionaries) and to the JSON-LD as an `openingHoursSpecification` array in `src/lib/structuredData.ts`.

## Adding real products

The six categories (`hardware-tools`, `sanitary-plumbing`, `electrical`, `motor-parts`, `furniture`, `electronics`) come directly from the firm's registration paperwork, so the category list itself is unlikely to change. What needs replacing is the placeholder copy describing each one:

1. **`src/dictionaries/en.ts` / `ne.ts` → `categories.<slug>`** — `shortDescription`, `longDescription`, and `highlights` are currently generic (e.g. "Hand & power tools, Nuts bolts & fasteners"). Replace `highlights` with real product-type bullets once you know what's actually stocked.
2. If you get an actual itemized catalog (with individual products, prices, maybe photos), that's a bigger structural change than editing the dictionaries — it means adding a real product data model (e.g. `src/data/products.ts` with `{ slug, categorySlug, name, description, price?, image? }`) and a per-product page under `products/[category]/[product]/`. That's out of scope for the current placeholder system; ask for it explicitly when the catalog is ready, since it also changes `sitemap.ts` (many more URLs) and the category view layout.

## Logo and photos

There is no real logo file wired in yet. The known copy of it is the profile picture on the [Facebook page](https://www.facebook.com/share/1HtoShsCzs/) — Facebook blocks unauthenticated/automated fetching of that image (confirmed while building this), so it has to come from a human: open the page, save the profile picture, and drop the file in for it to be wired in (the header/footer currently render a text wordmark, "Building Care" / "Enterprises", as a placeholder in the meantime). `src/app/icon.tsx` / `apple-icon.tsx` / `opengraph-image.tsx` similarly generate simple "BC" placeholder graphics with [`next/og`'s `ImageResponse`](https://nextjs.org/docs/app/api-reference/functions/image-response) rather than image files, for the same reason.

Once a real logo exists (ideally an SVG or a high-res PNG on a transparent background):

- Replace the text wordmark in `src/components/Header.tsx` with an `<Image>` of the logo.
- Replace `icon.tsx` / `apple-icon.tsx` with real image files (`app/icon.png`, `app/apple-icon.png` — Next picks these up automatically by filename, no code changes needed) — see the [favicon/icon conventions doc](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons).
- Also regenerate `public/favicon.ico` (a plain static file, not a Next convention route — some browsers/OSes request `/favicon.ico` directly regardless of the `<link rel="icon">` tag, so it needs to exist independently of `icon.tsx`). Any PNG-to-ICO conversion works — `sharp` (present transitively via `next/og`'s dependency tree, not a direct project dependency) can rasterize an SVG to PNG and the PNG can be wrapped in a minimal single-image ICO container; any online "PNG to ICO" converter works just as well for a one-off swap.
- Consider replacing `opengraph-image.tsx` with a designed image (photo of the shopfront, or logo + product photography) — social shares convert much better with a real photo than a generated color block.

There are currently no product or shopfront photos anywhere on the site, for the same reason (none were supplied). Category cards and the hero are icon/color-based rather than photo-based as a result.

## Copy tone

The existing English and Nepali copy was written to be accurate to the two known facts (the registration letter and the category list) without inventing specifics — e.g. no fabricated brand names, stock counts, or prices. Keep that pattern when extending it: don't add claims (delivery times, warranty terms, specific brands carried) that haven't actually been confirmed by the shop.
