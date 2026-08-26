@AGENTS.md

# Building Care Enterprises — website

Static (`output: "export"`), bilingual (English + Nepali) Next.js site for a building-materials/sanitary-plumbing/machinery-tools/appliances shop in Hetauda, Nepal. Deployed to GitHub Pages at `buildingcare.com.np`.

**Read [docs/README.md](./docs/README.md) first** — it indexes one doc per concern (architecture, i18n, SEO, content editing, design system, components, deployment). Each is written to be read on its own; don't guess at how something works when a doc already explains it.

Fast orientation if you only read one thing: this app renders every page twice — once at `/...` (English) and once at `/ne/...` (Nepali) — via two separate root layouts (a route-group pattern, not Next's usual `[lang]` convention). See [docs/architecture.md](./docs/architecture.md) for why, before assuming the more common pattern applies here.

The product catalog is category-level placeholder copy for two categories (`sanitary-plumbing`, `appliances`), but `building-materials` and `machinery-tools` now have a real itemized stock list wired in (`src/data/products.ts`, rendered on each category page). See [docs/content-editing.md](./docs/content-editing.md) before treating any product copy as final.
