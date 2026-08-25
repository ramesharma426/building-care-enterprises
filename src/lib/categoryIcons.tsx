import { Blocks, Cog, Droplets, Fan, type LucideIcon } from "lucide-react";
import type { CategorySlug } from "@/data/business";

export const categoryIcons: Record<CategorySlug, LucideIcon> = {
  "building-materials": Blocks,
  "sanitary-plumbing": Droplets,
  "machinery-tools": Cog,
  appliances: Fan,
};
