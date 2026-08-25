import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Page Not Found | Building Care Enterprises",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 text-center text-slate-900">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">404</p>
        <h1 className="text-2xl font-bold">Page Not Found</h1>
        <p className="max-w-sm text-slate-600">
          The page you are looking for does not exist or may have moved.
        </p>
        <p className="max-w-sm text-slate-600" lang="ne">
          तपाईंले खोज्नुभएको पृष्ठ फेला परेन।
        </p>
        <div className="mt-2 flex gap-3">
          <Link
            href="/"
            className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Back to Home
          </Link>
          <Link
            href="/ne"
            className="rounded-full border border-brand-200 px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50"
          >
            गृहपृष्ठमा फर्कनुहोस्
          </Link>
        </div>
      </body>
    </html>
  );
}
