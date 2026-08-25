import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/metadata";
import { ProductsView } from "@/views/ProductsView";

export function generateMetadata(): Metadata {
  const dict = getDictionary("en");
  return buildMetadata({
    locale: "en",
    path: "/products",
    title: dict.meta.products.title,
    description: dict.meta.products.description,
  });
}

export default function Page() {
  return <ProductsView locale="en" />;
}
