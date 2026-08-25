"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import type { Locale } from "@/lib/site";
import type { Dictionary } from "@/dictionaries/types";
import { business } from "@/data/business";
import { localeHref, counterpartHref } from "@/lib/paths";
import { Container } from "./Container";
import { FacebookIcon } from "./FacebookIcon";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";

  const links = [
    { href: localeHref(locale, "/"), label: dict.nav.home },
    { href: localeHref(locale, "/about"), label: dict.nav.about },
    { href: localeHref(locale, "/products"), label: dict.nav.products },
    { href: localeHref(locale, "/contact"), label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-brand-100 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href={localeHref(locale, "/")}
          className="flex flex-col leading-tight"
          onClick={() => setOpen(false)}
        >
          <span className="text-lg font-bold tracking-tight text-brand-900">
            Building Care
          </span>
          <span className="text-[11px] font-medium uppercase tracking-wider text-brand-600">
            Enterprises
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-600 hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={business.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dict.common.facebookLabel}
            className="text-slate-500 hover:text-brand-700"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
          <Link
            href={counterpartHref(pathname)}
            className="text-sm font-medium text-slate-500 hover:text-brand-700"
          >
            {dict.common.languageSwitchLabel}
          </Link>
          <a
            href={`tel:${business.phoneE164}`}
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {dict.nav.callUs}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-brand-50 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-brand-100 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium ${
                  pathname === link.href
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-600 hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between border-t border-brand-100 pt-3">
              <div className="flex items-center gap-4">
                <a
                  href={business.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={dict.common.facebookLabel}
                  className="text-slate-500"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <Link
                  href={counterpartHref(pathname)}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-slate-500"
                >
                  {dict.common.languageSwitchLabel}
                </Link>
              </div>
              <a
                href={`tel:${business.phoneE164}`}
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {dict.nav.callUs}
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
