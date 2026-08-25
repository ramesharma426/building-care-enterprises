import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Locale } from "@/lib/site";
import type { Dictionary } from "@/dictionaries/types";
import { business, categorySlugs } from "@/data/business";
import { localeHref } from "@/lib/paths";
import { Container } from "./Container";
import { FacebookIcon } from "./FacebookIcon";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-100 bg-brand-900 text-brand-50">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-white">Building Care Enterprises</p>
          <p className="mt-3 text-sm text-brand-100">{dict.meta.home.description}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">
            {dict.footer.quickLinksHeading}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href={localeHref(locale, "/")} className="hover:text-white">
                {dict.nav.home}
              </Link>
            </li>
            <li>
              <Link href={localeHref(locale, "/about")} className="hover:text-white">
                {dict.nav.about}
              </Link>
            </li>
            <li>
              <Link href={localeHref(locale, "/products")} className="hover:text-white">
                {dict.nav.products}
              </Link>
            </li>
            <li>
              <Link href={localeHref(locale, "/contact")} className="hover:text-white">
                {dict.nav.contact}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">
            {dict.footer.categoriesHeading}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {categorySlugs.map((slug) => (
              <li key={slug}>
                <Link
                  href={localeHref(locale, `/products/${slug}`)}
                  className="hover:text-white"
                >
                  {dict.categories[slug].name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">
            {dict.footer.contactHeading}
          </p>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" aria-hidden />
              <span>
                {business.address.line1}, {business.address.city}, {business.address.district}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand-300" aria-hidden />
              <a href={`tel:${business.phoneE164}`} className="hover:text-white">
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brand-300" aria-hidden />
              <a href={`mailto:${business.email}`} className="hover:text-white">
                {business.email}
              </a>
            </li>
          </ul>

          <div className="mt-4 flex items-center gap-4">
            <a
              href={business.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={dict.common.facebookLabel}
              className="text-brand-200 hover:text-white"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={`https://wa.me/${business.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={dict.nav.whatsapp}
              className="text-brand-200 hover:text-white"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-brand-700/60">
        <Container className="flex flex-col gap-2 py-5 text-xs text-brand-200 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} Building Care Enterprises. {dict.footer.rightsReserved}
          </p>
          <p>{dict.footer.registeredNote}</p>
        </Container>
      </div>
    </footer>
  );
}
