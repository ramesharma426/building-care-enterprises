# Deployment (GitHub Pages)

## How it works

`.github/workflows/deploy.yml` builds the site with `next build` (static export, per `output: "export"` in `next.config.ts`) and publishes the `out/` folder to GitHub Pages via `actions/deploy-pages`, on every push to `main`. There is no separate `gh-pages` branch to manage manually — GitHub Pages is configured to deploy from the Actions workflow, not from a branch.

`public/CNAME` contains `buildingcare.com.np` — GitHub Pages copies this into the published output automatically, which is what tells GitHub "serve this custom domain instead of `<user>.github.io`."

## One-time repo setup (do this once the domain is confirmed working)

1. **Repo → Settings → Pages → Build and deployment → Source**: set to "GitHub Actions" (not "Deploy from a branch").
2. **Repo → Settings → Pages → Custom domain**: enter `buildingcare.com.np`, save. GitHub will show a DNS check that fails until step 3 is done.
3. **DNS, at whoever hosts the `buildingcare.com.np` DNS zone** (the .np registrar or wherever it's pointed): add these four `A` records for the apex domain, pointing at GitHub Pages' load balancer IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   (Optionally, `AAAA` records for IPv6 — see [GitHub's current IP list](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) in case it's changed.) If a `www.buildingcare.com.np` redirect is ever wanted, that needs a separate `CNAME` record for the `www` subdomain pointing at `<github-username>.github.io` — not set up here since the site is built for the apex domain only.
4. Back in **Settings → Pages**, once DNS propagates (can take up to 24–48h, often much faster), tick **"Enforce HTTPS"** — GitHub provisions the certificate automatically once DNS is verified.

## Local build & preview

```sh
npm run build     # writes the static site to out/
npx serve out     # or any static file server, to preview the exported output locally
```

`npm run dev` (the normal Next dev server) is fine for day-to-day work, but always run `npm run build` before pushing — dev mode doesn't catch every static-export constraint (see [architecture.md](./architecture.md#rendering-model)) or reflect the exact final HTML.

## If hosting ever moves off GitHub Pages

The `out/` folder is plain static HTML/CSS/JS with no GitHub-specific assumptions baked in except `public/CNAME` (harmless elsewhere — most hosts ignore an unrecognized file) and the absolute URLs in `src/lib/site.ts`'s `SITE_URL`. Any static host (Netlify, Vercel, a cPanel shared-hosting `public_html` upload) works by just serving the contents of `out/` — see the [Next.js static export docs](https://nextjs.org/docs/app/guides/static-exports#deploying) for host-specific notes (e.g. an nginx rewrite rule if `trailingSlash` behavior ever needs to change).
