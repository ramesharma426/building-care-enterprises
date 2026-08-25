import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/metadata";
import { categorySlugs, type CategorySlug } from "@/data/business";
import { CategoryView } from "@/views/CategoryView";

export const dynamicParams = false;

export function generateStaticParams() {
  return categorySlugs.map((category) => ({ category }));
}

function resolveSlug(category: string): CategorySlug | null {
  return (categorySlugs as string[]).includes(category) ? (category as CategorySlug) : null;
}

type Props = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const slug = resolveSlug(category);
  if (!slug) return {};

  const dict = getDictionary("en");
  const copy = dict.categories[slug];
  return buildMetadata({
    locale: "en",
    path: `/products/${slug}`,
    title: `${copy.name} | ${dict.meta.products.title}`,
    description: copy.shortDescription,
  });
}

export default async function Page({ params }: Props) {
  const { category } = await params;
  const slug = resolveSlug(category);
  if (!slug) notFound();

  return <CategoryView locale="en" slug={slug} />;
}
