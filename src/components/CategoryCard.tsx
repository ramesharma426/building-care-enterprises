import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CategorySlug } from "@/data/business";
import type { CategoryCopy } from "@/dictionaries/types";
import { categoryIcons } from "@/lib/categoryIcons";

export function CategoryCard({
  slug,
  copy,
  href,
  ctaLabel,
}: {
  slug: CategorySlug;
  copy: CategoryCopy;
  href: string;
  ctaLabel: string;
}) {
  const Icon = categoryIcons[slug];

  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-100">
        <Icon className="h-6 w-6" aria-hidden />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{copy.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
        {copy.shortDescription}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
        {ctaLabel}
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden
        />
      </span>
    </Link>
  );
}
