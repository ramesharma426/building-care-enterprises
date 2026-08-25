import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import { buildMetadata } from "@/lib/metadata";
import { ContactView } from "@/views/ContactView";

export function generateMetadata(): Metadata {
  const dict = getDictionary("en");
  return buildMetadata({
    locale: "en",
    path: "/contact",
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
  });
}

export default function Page() {
  return <ContactView locale="en" />;
}
