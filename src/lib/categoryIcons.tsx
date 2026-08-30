import { Blocks, Cog, Droplets, Fan, PaintBucket, type LucideIcon } from "lucide-react";
import type { CategorySlug } from "@/data/business";

export const categoryIcons: Record<CategorySlug, LucideIcon> = {
  "building-materials": Blocks,
  paints: PaintBucket,
  "sanitary-plumbing": Droplets,
  "machinery-tools": Cog,
  appliances: Fan,
};
