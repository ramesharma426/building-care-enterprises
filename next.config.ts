import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin explicitly: Turbopack's auto-detection otherwise walks up and finds
  // an unrelated package-lock.json outside this repo (e.g. in a parent
  // home directory) and warns about it.
  turbopack: {
    root: path.join(__dirname),
  },

  // Fully static site: `next build` emits plain HTML/CSS/JS into `out/`
  // for upload to any static host (GitHub Pages, cPanel, Netlify, etc.).
  // See docs/deployment.md.
  output: "export",

  // No Node server at runtime, so next/image's default optimizer (which
  // needs a server to resize images on request) can't run. Ship images
  // pre-sized instead. See docs/seo.md#images.
  images: {
    unoptimized: true,
  },

  // EN and NE are two separate route-group root layouts (see
  // src/app/(en) and src/app/(ne)); app/global-not-found.tsx renders the
  // 404 page since there is no single shared root layout. See docs/i18n.md.
  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
