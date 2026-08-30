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

The category list (`building-materials`, `paints`, `sanitary-plumbing`, `machinery-tools`, `appliances`) reflects the shop's actual stock — confirmed directly by the owner, then verified and enriched against real shopfront/storeroom photos the owner sent (visible cement/paint/pipe brands, roofing sheets, doors, tools, appliances, etc.). This replaced an earlier 6-category list (`hardware-tools`, `sanitary-plumbing`, `electrical`, `motor-parts`, `furniture`, `electronics`) that came from the firm's registration paperwork but didn't match what's actually sold; `paints` was later split out of `building-materials` on 2026-08-30 once the owner supplied a full brand-by-brand paint stock list. If the category list changes again: update `categorySlugs`/`CategorySlug` in `src/data/business.ts`, `categoryIcons` in `src/lib/categoryIcons.tsx`, and `categories.<slug>` in **both** `src/dictionaries/en.ts` and `ne.ts` (TypeScript's `Record<CategorySlug, CategoryCopy>` will refuse to compile until both dictionaries have an entry for every slug, so it's hard to miss one). Also update `public/llms.txt`'s page list to match.

1. **`src/dictionaries/en.ts` / `ne.ts` → `categories.<slug>`** — `shortDescription`, `longDescription`, and `highlights` describe each category with real stock: `building-materials` names cement types (OPC/PPC/PSC), steel rod, roofing sheets, wire mesh, marble/tiles/granite, and ready-made doors; `paints` names the paint/coating brands carried (Luxol, Brolac, Silk, Tata, REWA, etc.); `sanitary-plumbing` names toilets/wash basins and PVC/CPVC/HDPE pipes; `machinery-tools` names power tools, cutting/grinding machines, and water pumps; `appliances` names air coolers and kitchen chimneys. Update further as more specific items (brands, sizes) get confirmed.
2. If you get pricing or photos per item, that's a bigger structural change than the itemized list below — it means extending the product data model with `price?`/`image?` and probably a per-product page under `products/[category]/[product]/`. Ask for it explicitly when that's ready, since it also changes `sitemap.ts` (many more URLs) and the category view layout.

## Itemized stock lists (per category)

The owner has supplied real item-level stock lists — hardware/furniture fittings, wire mesh, plain sheets, machinery, and steel section items (2026-08-26), plus a full paint & coatings list grouped by brand (2026-08-30) — transcribed as-is in [`docs/product-inventory.md`](./product-inventory.md) and structured into `src/data/products.ts` as `productGroups: Partial<Record<CategorySlug, ProductGroup[]>>` (each group has a `heading` and `items: { name, variant? }[]`).

`CategoryView.tsx` (the page a Products-page category card links to) looks up `productGroups[slug]` and, if present, renders it via `ProductItemList.tsx` — a native `<details>`/`<summary>` accordion per group (no client JS needed). If a slug has no entry in `productGroups`, the page falls back to the existing `comingSoonNote` copy, same as before this list existed.

`building-materials` (4 groups: Hardware & Fittings, Wire Mesh, Plain Sheets, Steel Sections), `machinery-tools` (1 group: Machinery), and `paints` (13 groups, one per brand — Luxol/Lukol, Brolac, Jensolin, BP, Weathercoat, Silk, Easy Clean, Rangoli, Walmasta, Bison, REWA, Tata, Aagaman) have real itemized data — nothing in the owner's lists maps to `sanitary-plumbing` or `appliances` yet. Item names are kept as-is (untranslated) in both locales since they're trade names/romanized terms, not marketing copy — `ProductItemList` reads directly from `products.ts`, not the dictionaries. Note the source sheets themselves are inconsistent between "Luxol" and "Lukol" for the same product line (likely a labeling quirk on the owner's side, not a transcription error) — kept as printed rather than "corrected."

To add items to a category (or add a new group), edit `productGroups` in `src/data/products.ts` directly — no dictionary or type changes needed unless a brand-new `CategorySlug` is introduced.

## Logo and photos

The real logo (`logo_final_clean.png`, supplied by the owner directly — Facebook blocks unauthenticated/automated fetching of the page's profile picture, confirmed while building this) is now wired in as the site's icon set:

- `src/app/icon.png` (512×512, transparent background) and `src/app/apple-icon.png` (180×180, white background — iOS doesn't composite transparency) replace the old `icon.tsx` / `apple-icon.tsx` `next/og`-generated "BC" placeholders. Being plain image files under the [favicon/icon conventions](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons), Next auto-links them — no code changes needed if the image is swapped again later, just overwrite the file.
- `public/favicon.ico` (16/32/48px, multi-size, transparent) was regenerated from the same source for browsers/OSes that request `/favicon.ico` directly regardless of the `<link rel="icon">` tag.
- Both were produced from the source PNG by cropping to just the icon mark (excluding the "BuildingCare Enterprises" wordmark text, which is illegible at favicon sizes), then flood-filling the white background to transparent (BFS from the image border on near-white pixels — this only removes background-connected white, so the white accents *inside* the mark, like the window squares, stay opaque since they're fully enclosed by blue and never touch the border).

The header/footer still render a text wordmark ("Building Care" / "Enterprises") rather than the logo image — that's a separate change (`src/components/Header.tsx`, swap for an `<Image>` of the logo) if wanted.

`opengraph-image.tsx` still generates a simple "BC" placeholder graphic via [`next/og`'s `ImageResponse`](https://nextjs.org/docs/app/api-reference/functions/image-response) — consider replacing it with a designed image (photo of the shopfront, or logo + product photography) once available, since social shares convert much better with a real photo than a generated color block.

There are currently no product or shopfront photos wired into the site itself — the owner did send shopfront/storeroom photos (used to verify and enrich the category copy above, see the "Adding real products" section), but they aren't embedded as `<img>`s anywhere yet. Category cards and the hero remain icon/color-based rather than photo-based. Wiring the actual photos in (hero background, category card images, an About-page gallery) is a reasonable next step — they'd need to be added under `public/` and referenced from the relevant view, with alt text and appropriate sizing for a static export (`next/image` works here since `images.unoptimized: true` is set — see [seo.md](./seo.md#images) — but still needs real `width`/`height`).

## Dealer/brand banners (e.g. "Authorized Dealer of Shivam Cement")

The homepage (`HomeView.tsx`) has a full-width banner right below the header (before the hero section, `min-h-[20vh]`) showing the shop's authorized-dealer status for a supplier brand — currently Shivam Cement, added 2026-08-26 and revised same day from a slim icon-only strip to this full banner per explicit owner feedback ("not approved... big banner... add full image not only the logo"). Two image assets live in `public/brands/`:

- `shivam-cement-logo.png` — the full logo (icon + "SHIVAM CEMENT" + "ASALI OPC CEMENT SINCE 2003"), background removed (was solid green in the source file, see below), trimmed to content bounds. This is what's actually rendered in the banner.
- `shivam-cement-mark.png` — just the triangle icon, isolated via connected-component flood fill (walk outward from a seed pixel known to be inside the icon, keep only pixels reachable through opaque pixels; a straight rectangular crop clips into the "S" of "SHIVAM" because the wordmark's bounding box overlaps the icon's). Currently unused after the icon-only design was rejected, but kept in case a compact version is wanted again somewhere else (e.g. footer).

**The banner's background must be `bg-[#007e3c]`, not a Tailwind green shade** — `#007e3c` is Shivam Cement's actual brand green, confirmed 2026-08-26 by screenshotting their live site (shivamcement.com.np) and sampling the header pixel color, and it exactly matches the background color removed from their logo file. The logo's wordmark text is baked-in white pixels, meant to sit on this exact green — on a lighter background (e.g. `emerald-50`) or a mismatched dark shade (e.g. Tailwind's `emerald-800`) the white text is illegible or looks off-brand. If this banner (or a future one for another brand) ever looks washed out, check the background color first.

Pattern for adding another brand's banner:

1. Get the brand's official logo image from the owner (not scraped) — same rule as the shop's own logo above.
2. Remove its background (flood fill from the image border on the near-uniform background color), trim, save as `public/brands/<brand>-logo.png`.
3. Find the brand's real background/accent color (screenshot their official site and sample a pixel, or reuse the color removed from the logo — they should match) and use that exact hex (`bg-[#rrggbb]`), not a generic Tailwind shade, so the logo's own text/accents stay legible and it reads as authentic rather than approximate.
4. Add the display text to `dict.home.dealerBadge` in **both** `en.ts` and `ne.ts` (`Dictionary["home"]["dealerBadge"]` in `types.ts`) — brand names are kept as their own transliteration/spelling in each locale, not translated word-for-word.
5. Render via `<Image src="/brands/<brand>-logo.png" alt="<brand> — <tagline>" .../>` in `HomeView.tsx`, sized generously (this is a banner, not an icon).

If a second dealer banner is ever added, this should become a small array/loop rather than more copy-pasted markup — and they can't both be `min-h-[20vh]` stacked without eating the whole first screen, so revisit the layout at that point rather than just repeating the block.

## Copy tone

The existing English and Nepali copy was written to be accurate to the two known facts (the registration letter and the category list) without inventing specifics — e.g. no fabricated brand names, stock counts, or prices. Keep that pattern when extending it: don't add claims (delivery times, warranty terms, specific brands carried) that haven't actually been confirmed by the shop.
