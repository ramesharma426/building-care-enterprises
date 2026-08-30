# Documentation Index

Docs for the Building Care Enterprises website. Each file covers one concern end-to-end — read the one relevant to what you're touching rather than this whole folder.

| Doc | Read this when you're... |
| --- | --- |
| [architecture.md](./architecture.md) | Orienting yourself in the codebase, or adding a new page/route. |
| [i18n.md](./i18n.md) | Touching anything bilingual — dictionaries, the language switcher, adding a page in both languages. |
| [content-editing.md](./content-editing.md) | Adding real product data, changing NAP (name/address/phone) info, updating hours or map pin, or editing an itemized category stock list. |
| [product-inventory.md](./product-inventory.md) | Looking for the raw source of the owner's item-level stock list (the live version is `src/data/products.ts` — see content-editing.md). |
| [seo.md](./seo.md) | Touching metadata, structured data, sitemap/robots, or setting up Google Search Console. |
| [design-system.md](./design-system.md) | Changing colors, typography, spacing, or adding a new UI component. |
| [components.md](./components.md) | Looking for what a shared component does before reusing or modifying it. |
| [deployment.md](./deployment.md) | Deploying to GitHub Pages, or changing the domain/DNS setup. |

## Project summary

Static (fully pre-rendered, no Node server) Next.js site for **Building Care Enterprises**, a building-materials/paints/sanitary-plumbing/machinery-tools/appliances trading shop in Hetauda, Makawanpur, Nepal. Bilingual: English at the unprefixed root, Nepali under `/ne`. Deployed to GitHub Pages at `buildingcare.com.np`. Product catalog is not final yet — see [content-editing.md](./content-editing.md) for how the placeholder category system is meant to be replaced.
