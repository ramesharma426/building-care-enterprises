import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/metadata";
import { HomeView } from "@/views/HomeView";

export function generateMetadata(): Metadata {
  const dict = getDictionary("ne");
  return buildMetadata({
    locale: "ne",
    path: "/",
    title: dict.meta.home.title,
    description: dict.meta.home.description,
  });
}

export default function Page() {
  return <HomeView locale="ne" />;
}
