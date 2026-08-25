import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/metadata";
import { AboutView } from "@/views/AboutView";

export function generateMetadata(): Metadata {
  const dict = getDictionary("en");
  return buildMetadata({
    locale: "en",
    path: "/about",
    title: dict.meta.about.title,
    description: dict.meta.about.description,
  });
}

export default function Page() {
  return <AboutView locale="en" />;
}
