# Editing content

This site currently ships with **category-level placeholders**, not a real product catalog — the product list was not available when the site was built. This doc is the checklist for replacing placeholders with real data.

## Business facts (NAP, registration, categories)

`src/data/business.ts` is the single source of truth for facts that aren't translated — phone, WhatsApp, Facebook, email, address, registration numbers, and the list of category slugs. Update it in place; every component (header, footer, contact page, JSON-LD) reads from here, so a change here propagates everywhere automatically.

Note that `phoneE164` (the primary/landline number, used for the "Call Us" quick-dial buttons and the first JSON-LD `telephone`) and `mobilePhoneE164` (a second number, shown only on the Contact page and in Footer) and `whatsappNumber` are three **different** numbers — confirmed by the owner, not a typo. Keep them separate if any of them changes.

`facebookUrl` (`facebook.com/buildingcaree`) and `messengerUrl` (`m.me/buildingcaree`) share the same page username, confirmed by the owner. If the page is ever renamed, update both together.

`geo` and `googleMapsUrl` are filled in from the shop's verified Google Maps place (owner-provided) — see the comment on `geo` in `business.ts` for which numbers from the Maps URL to use if this ever needs updating (the precise `!3d`/`!4d` pin, not the coarser `@lat,lng` viewport center). The address text itself (`business.address`) is a link to `googleMapsUrl` everywhere it's shown (`Footer.tsx`, `ContactView.tsx`), not just plain text — the Contact page's map embed and "Get Directions" button also use these same values, so all three stay in sync automatically from one source.

One field is still deliberately left blank rather than guessed:

- **Opening hours** — not shown anywhere on the site yet (the Contact page just says "call ahead to confirm"). Once hours are confirmed, they should be added both to the visible Contact page copy (`contact.hoursNote` in the dictionaries) and to the JSON-LD as an `openingHoursSpecification` array in `src/lib/structuredData.ts`.

## Adding real products

The category list (`building-materials`, `sanitary-plumbing`, `machinery-tools`, `appliances`) reflects the shop's actual stock — confirmed directly by the owner, then verified and enriched against real shopfront/storeroom photos the owner sent (visible cement/paint/pipe brands, roofing sheets, doors, tools, appliances, etc.). This replaced an earlier 6-category list (`hardware-tools`, `sanitary-plumbing`, `electrical`, `motor-parts`, `furniture`, `electronics`) that came from the firm's registration paperwork but didn't match what's actually sold. If the category list changes again: update `categorySlugs`/`CategorySlug` in `src/data/business.ts`, `categoryIcons` in `src/lib/categoryIcons.tsx`, and `categories.<slug>` in **both** `src/dictionaries/en.ts` and `ne.ts` (TypeScript's `Record<CategorySlug, CategoryCopy>` will refuse to compile until both dictionaries have an entry for every slug, so it's hard to miss one). Also update `public/llms.txt`'s page list to match.

1. **`src/dictionaries/en.ts` / `ne.ts` → `categories.<slug>`** — `shortDescription`, `longDescription`, and `highlights` describe each category with real stock: `building-materials` names cement types (OPC/PPC/PSC), steel rod, paint brands, roofing sheets, wire mesh, marble/tiles/granite, and ready-made doors; `sanitary-plumbing` names toilets/wash basins and PVC/CPVC/HDPE pipes; `machinery-tools` names power tools, cutting/grinding machines, and water pumps; `appliances` names air coolers and kitchen chimneys. Update further as more specific items (brands, sizes) get confirmed.
2. If you get an actual itemized catalog (with individual products, prices, maybe photos), that's a bigger structural change than editing the dictionaries — it means adding a real product data model (e.g. `src/data/products.ts` with `{ slug, categorySlug, name, description, price?, image? }`) and a per-product page under `products/[category]/[product]/`. That's out of scope for the current placeholder system; ask for it explicitly when the catalog is ready, since it also changes `sitemap.ts` (many more URLs) and the category view layout.

## Logo and photos

The real logo (`logo_final_clean.png`, supplied by the owner directly — Facebook blocks unauthenticated/automated fetching of the page's profile picture, confirmed while building this) is now wired in as the site's icon set:

- `src/app/icon.png` (512×512, transparent background) and `src/app/apple-icon.png` (180×180, white background — iOS doesn't composite transparency) replace the old `icon.tsx` / `apple-icon.tsx` `next/og`-generated "BC" placeholders. Being plain image files under the [favicon/icon conventions](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons), Next auto-links them — no code changes needed if the image is swapped again later, just overwrite the file.
- `public/favicon.ico` (16/32/48px, multi-size, transparent) was regenerated from the same source for browsers/OSes that request `/favicon.ico` directly regardless of the `<link rel="icon">` tag.
- Both were produced from the source PNG by cropping to just the icon mark (excluding the "BuildingCare Enterprises" wordmark text, which is illegible at favicon sizes), then flood-filling the white background to transparent (BFS from the image border on near-white pixels — this only removes background-connected white, so the white accents *inside* the mark, like the window squares, stay opaque since they're fully enclosed by blue and never touch the border).

The header/footer still render a text wordmark ("Building Care" / "Enterprises") rather than the logo image — that's a separate change (`src/components/Header.tsx`, swap for an `<Image>` of the logo) if wanted.

`opengraph-image.tsx` still generates a simple "BC" placeholder graphic via [`next/og`'s `ImageResponse`](https://nextjs.org/docs/app/api-reference/functions/image-response) — consider replacing it with a designed image (photo of the shopfront, or logo + product photography) once available, since social shares convert much better with a real photo than a generated color block.

There are currently no product or shopfront photos wired into the site itself — the owner did send shopfront/storeroom photos (used to verify and enrich the category copy above, see the "Adding real products" section), but they aren't embedded as `<img>`s anywhere yet. Category cards and the hero remain icon/color-based rather than photo-based. Wiring the actual photos in (hero background, category card images, an About-page gallery) is a reasonable next step — they'd need to be added under `public/` and referenced from the relevant view, with alt text and appropriate sizing for a static export (no `next/image` optimizer, see [seo.md](./seo.md#images)).

## Copy tone

The existing English and Nepali copy was written to be accurate to the two known facts (the registration letter and the category list) without inventing specifics — e.g. no fabricated brand names, stock counts, or prices. Keep that pattern when extending it: don't add claims (delivery times, warranty terms, specific brands carried) that haven't actually been confirmed by the shop.
