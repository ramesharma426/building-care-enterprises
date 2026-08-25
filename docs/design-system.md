# Design system

Tailwind CSS v4, configured entirely in `src/app/globals.css` (v4 dropped the separate `tailwind.config.js` in favor of CSS-native `@theme` blocks — there is no config file to look for).

## Brand tokens

Defined as CSS variables under `:root`, then re-exposed to Tailwind's utility generator via `@theme inline`:

```css
--color-brand-50   /* lightest tint — section backgrounds (e.g. hero, page headers) */
--color-brand-100  /* borders, hover backgrounds */
--color-brand-200  /* subtle borders on brand-tinted surfaces */
--color-brand-500  /* mid brand blue */
--color-brand-600  /* primary action color — buttons, links, focus ring */
--color-brand-700  /* hover state for primary actions */
--color-brand-900  /* darkest — footer background, headings */
```

Use them as normal Tailwind utilities: `bg-brand-600`, `text-brand-900`, `border-brand-100`, etc. Chosen palette is sky blue + white (the owner's explicit choice over a navy/orange or red/charcoal alternative) — if this ever needs to change, editing the seven `--color-brand-*` values in `globals.css` re-themes the entire site, since every component references the scale rather than hardcoded hex values.

Non-brand color usage (body text, neutral borders, error states) uses Tailwind's built-in `slate-*` scale directly rather than a custom token — that's intentional; only truly brand-specific colors get their own token.

## Typography

Geist Sans / Geist Mono via `next/font/google`, loaded once per root layout (see [architecture.md](./architecture.md) for why there are two root layouts) and exposed as CSS variables (`--font-geist-sans`, `--font-geist-mono`) that `@theme inline` maps to Tailwind's `font-sans` / `font-mono`. No per-component font-family overrides — everything inherits `font-sans` from `body`.

Heading sizes follow a fairly small, consistent scale across views: page `<h1>` is `text-3xl sm:text-4xl` (or `text-4xl sm:text-5xl` on the home hero specifically, since it's the single largest element on the site), section `<h2>` is `text-2xl` to `text-3xl`, card-level headings are `text-lg`. Keep new sections within that scale rather than introducing new sizes.

## Layout

`src/components/Container.tsx` is the single max-width wrapper (`max-w-6xl`, responsive horizontal padding) — every section uses it rather than repeating the width/padding classes inline. If a section needs a different max-width, that's a signal to think about whether it should still use `Container` with an override className, not skip it entirely.

## Focus states

`globals.css` sets a global `:focus-visible` outline in brand-600 — don't add per-component `outline-none` overrides without also providing an equivalent visible focus style; this is a keyboard-accessibility baseline for the whole site.

## Icons

[`lucide-react`](https://lucide.dev) throughout — tree-shakeable (only imported icons ship in the bundle), no other icon system in use. Category icons are centrally mapped in `src/lib/categoryIcons.tsx` (`CategorySlug → LucideIcon`) rather than chosen ad hoc per component, so a category's icon is consistent everywhere it appears (home grid, products grid, footer would use the name only, category detail page header).
