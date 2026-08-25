import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import type { Locale } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";
import { categorySlugs } from "@/data/business";
import { localeHref } from "@/lib/paths";
import { Container } from "@/components/Container";
import { CategoryCard } from "@/components/CategoryCard";

export function HomeView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const home = dict.home;

  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              {home.heroEyebrow}
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-brand-900 sm:text-5xl">
              {home.heroTitle}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              {home.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={localeHref(locale, "/products")}
                className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                {home.heroCtaPrimary}
              </Link>
              <Link
                href={localeHref(locale, "/contact")}
                className="rounded-full border border-brand-200 bg-white px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50"
              >
                {home.heroCtaSecondary}
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
              {home.trustBar.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1.5 text-sm font-medium text-slate-600"
                >
                  <CheckCircle2 className="h-4 w-4 text-brand-500" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {categorySlugs.map((slug) => (
              <div
                key={slug}
                className="rounded-2xl border border-brand-100 bg-white p-4 text-center shadow-sm"
              >
                <p className="text-sm font-semibold text-brand-800">
                  {dict.categories[slug].name}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              {home.categoriesHeading}
            </h2>
            <p className="mt-3 text-slate-600">{home.categoriesSubheading}</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categorySlugs.map((slug) => (
              <CategoryCard
                key={slug}
                slug={slug}
                copy={dict.categories[slug]}
                href={localeHref(locale, `/products/${slug}`)}
                ctaLabel={dict.products.viewCategory}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-900 py-16 text-white">
        <Container>
          <h2 className="text-center text-3xl font-bold tracking-tight">{home.whyHeading}</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {home.whyItems.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="rounded-3xl bg-brand-50 px-6 py-14 text-center sm:px-14">
          <h2 className="text-2xl font-bold tracking-tight text-brand-900 sm:text-3xl">
            {home.ctaHeading}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">{home.ctaSubheading}</p>
          <Link
            href={localeHref(locale, "/contact")}
            className="mt-7 inline-block rounded-full bg-brand-600 px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            {home.ctaButton}
          </Link>
        </Container>
      </section>
    </>
  );
}
