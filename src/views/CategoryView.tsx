import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import type { Locale } from "@/lib/site";
import { SITE_URL } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";
import type { CategorySlug } from "@/data/business";
import { localeHref } from "@/lib/paths";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structuredData";
import { categoryIcons } from "@/lib/categoryIcons";

export function CategoryView({ locale, slug }: { locale: Locale; slug: CategorySlug }) {
  const dict = getDictionary(locale);
  const copy = dict.categories[slug];
  const Icon = categoryIcons[slug];

  const breadcrumb = breadcrumbJsonLd([
    { name: dict.nav.home, url: `${SITE_URL}${localeHref(locale, "/")}` },
    { name: dict.nav.products, url: `${SITE_URL}${localeHref(locale, "/products")}` },
    { name: copy.name, url: `${SITE_URL}${localeHref(locale, `/products/${slug}`)}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />

      <section className="border-b border-brand-100 bg-brand-50">
        <Container className="py-14">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap gap-1 text-sm text-slate-500">
            <Link href={localeHref(locale, "/")} className="hover:text-brand-700">
              {dict.nav.home}
            </Link>
            <span aria-hidden>/</span>
            <Link href={localeHref(locale, "/products")} className="hover:text-brand-700">
              {dict.nav.products}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-slate-700">{copy.name}</span>
          </nav>

          <div className="flex items-start gap-4">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-sm">
              <Icon className="h-7 w-7" aria-hidden />
            </span>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
                {copy.name}
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-slate-600">{copy.longDescription}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-slate-900">
              {dict.common.allCategories}
            </h2>
            <ul className="mt-4 space-y-3">
              {copy.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-500">{dict.products.comingSoonNote}</p>
          </div>

          <aside className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
            <h3 className="font-semibold text-brand-900">{dict.contact.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{dict.contact.intro}</p>
            <Link
              href={localeHref(locale, "/contact")}
              className="mt-5 inline-block rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
            >
              {dict.nav.contact}
            </Link>
          </aside>
        </Container>
      </section>
    </>
  );
}
