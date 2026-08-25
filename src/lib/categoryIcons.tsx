import { Car, Cpu, Droplets, Sofa, Wrench, Zap, type LucideIcon } from "lucide-react";
import type { CategorySlug } from "@/data/business";

export const categoryIcons: Record<CategorySlug, LucideIcon> = {
  "hardware-tools": Wrench,
  "sanitary-plumbing": Droplets,
  electrical: Zap,
  "motor-parts": Car,
  furniture: Sofa,
  electronics: Cpu,
};
