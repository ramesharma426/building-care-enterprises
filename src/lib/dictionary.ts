import type { Locale } from "./site";
import type { Dictionary } from "@/dictionaries/types";
import { en } from "@/dictionaries/en";
import { ne } from "@/dictionaries/ne";

const dictionaries: Record<Locale, Dictionary> = { en, ne };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
