import type { Locale } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";
import { categorySlugs } from "@/data/business";
import { localeHref } from "@/lib/paths";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { CategoryCard } from "@/components/CategoryCard";

export function ProductsView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero title={dict.products.title} intro={dict.products.intro} />

      <section className="py-14">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

          <p className="mt-10 text-center text-sm font-medium text-slate-500">
            {dict.products.comingSoonNote}
          </p>
        </Container>
      </section>
    </>
  );
}
