# Shared components

All in `src/components/`. Rule of thumb used throughout: **server components by default, `"use client"` only where actual browser interactivity is needed** (state, event handlers, `usePathname`) — keeps the JS shipped to the browser minimal, which matters for a static brochure site with no reason to be JS-heavy.

| Component | Client or server | What it does |
| --- | --- | --- |
| `Header.tsx` | Client | Sticky nav bar: logo, desktop nav links, Facebook icon, language switcher, call button, and a mobile hamburger menu with local `open` state. Needs `usePathname()` (to highlight the active link and compute the language-switcher target), which forces it client-side. |
| `Footer.tsx` | Server | NAP block, quick links, category links, Facebook/WhatsApp icons, registration/copyright line. Pure render from props — no interactivity, so no reason to ship it as client JS. |
| `SiteBody.tsx` | Server | Composes `Header` + `<main>` + `Footer` + `ChatBubble` + the site-wide LocalBusiness JSON-LD, given a `locale`. Both root layouts (`(en)/layout.tsx`, `(ne)/ne/layout.tsx`) render this inside their `<body>` — see [architecture.md](./architecture.md). |
| `ChatBubble.tsx` | Server | Two separate floating buttons (48px), bottom-right, stacked vertically, on every page: Messenger (`m.me/buildingcaree`) above WhatsApp (`wa.me/<number>`). Each is its own direct link opened in a new tab — no shared toggle/expand state, so no client JS needed. No API, token, or backend involved for either. |
| `FacebookIcon.tsx` | Server | Hand-drawn Facebook glyph, sized like a lucide icon (`className="h-5 w-5"` etc.). Exists because lucide-react doesn't ship brand/logo icons. |
| `WhatsAppIcon.tsx` | Server | The official WhatsApp glyph (path data from [simple-icons](https://simpleicons.org/), a brand-accurate SVG icon set), sized like a lucide icon (`className="h-5 w-5"` etc.) with `currentColor` fill so it adapts to context. Used instead of lucide's generic `MessageCircle` wherever a WhatsApp CTA needs to be recognizable at a glance (`ChatBubble`, `Footer`, `ContactView`). |
| `MessengerIcon.tsx` | Server | Same idea as `WhatsAppIcon.tsx`, but the Messenger glyph (also from simple-icons). Used on the Messenger floating button in `ChatBubble.tsx`. |
| `Container.tsx` | Server | Max-width + padding wrapper — see [design-system.md](./design-system.md#layout). |
| `PageHero.tsx` | Server | The brand-tinted title+intro banner used at the top of About/Products/Contact (not the home page, which has its own bespoke hero in `HomeView`). |
| `CategoryCard.tsx` | Server | The clickable category tile (icon, name, short description, "view category" link) used on both the home page's category grid and the full Products page. |
| `JsonLd.tsx` | Server | Generic `<script type="application/ld+json">` renderer. Escapes `<` in the serialized JSON to prevent `</script>` breakout — always pass it plain server-built objects, never unescaped user input (not a concern today since there's no user input anywhere on the site, but keep it that way if a form is ever added). |

## Views vs. components

Components in this folder are generic UI building blocks reused across pages. Page-specific content assembly (hero copy, section ordering, what goes on the About page vs. the Contact page) lives in `src/views/*View.tsx` instead — see [architecture.md](./architecture.md#pages-vs-views). If you're building something reusable across ≥2 pages, it belongs here; if it's specific to one page's layout, it belongs in that page's view.

## Non-component libs components lean on

- `src/lib/categoryIcons.tsx` — `CategorySlug → LucideIcon` map, used by `CategoryCard` and `CategoryView`.
- `src/lib/paths.ts` — `localeHref` / `counterpartHref`, used by every component that renders a `<Link>` or needs the language-switcher target. See [i18n.md](./i18n.md).
