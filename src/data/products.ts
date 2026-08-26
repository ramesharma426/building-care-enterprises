import type { CategorySlug } from "./business";

export type ProductVariantItem = { name: string; variant?: string };
export type ProductGroup = { heading: string; items: ProductVariantItem[] };

/**
 * Real item-level stock list supplied by the owner (2026-08-26), grouped and
 * mapped to a CategorySlug — see docs/product-inventory.md for the raw
 * source this was transcribed from. Only categories with a confirmed
 * itemized list are keyed here: `sanitary-plumbing` and `appliances` still
 * rely on the category-level copy in the dictionaries alone (CategoryView
 * falls back to that when a slug has no entry here).
 */
export const productGroups: Partial<Record<CategorySlug, ProductGroup[]>> = {
  "building-materials": [
    {
      heading: "Hardware & Fittings",
      items: [
        { name: "Ply Cutter", variant: "4\" / 7\"" },
        { name: "Masking Tape", variant: "3/4\" / 1\"" },
        { name: "Tarpin Oil", variant: "300mL" },
        { name: "Door Spring" },
        { name: "Door Closer", variant: "Hydraulic" },
        { name: "Paper Khakshi Wood", variant: "60 / 80 / 100 No." },
        { name: "Water Paper Khakshi", variant: "120 / 150 / 180 / 220 / 350" },
        { name: "Line Dhago" },
        { name: "Paper Khakshi Roll" },
        { name: "Nailon Dhago" },
        {
          name: "Measuring Tape",
          variant: "3m / 5m / 7.5m / 10m / 20m / 30m / 50m / 100m",
        },
        { name: "Pin & Nails", variant: "3/4\" / 1\" / 1 1/4\" / 1 1/2\"" },
        { name: "Luwang Nails", variant: "3/4\"" },
        { name: "Wire Brush" },
        { name: "Dendrite", variant: "1/2kg / 1kg / 4kg" },
        { name: "Fevicol", variant: "1/2kg / 1kg / 5kg / 20kg" },
        { name: "Screw", variant: "20x5 / 30x7 / 25x6 / 35x8" },
        { name: "Aari" },
        { name: "Hexo Blade", variant: "1/2\" / 1\"" },
        { name: "Cheskini (Al./Steel)", variant: "4\" / 6\" / 8\" / 10\" / 12\"" },
        { name: "Muthiya (Al./Steel)", variant: "5\" / 6\" / 8\"" },
        { name: "I Hook (Al./Steel)", variant: "5\"" },
        { name: "Door Stopper" },
        { name: "Hinges (Steel/Falam)", variant: "3\" / 4\" / 6\"" },
        { name: "Aldroph (Steel/Falam)", variant: "6\" / 8\" / 10\" / 12\"" },
        { name: "Cabinet Muthiya", variant: "4\" / 8\" / 12\"" },
        { name: "Drawer Lock" },
        { name: "Auto Kabza", variant: "0° / 8°" },
      ],
    },
    {
      heading: "Wire Mesh (Jali)",
      items: [
        { name: "Aluminium Jali", variant: "2.5FT / 3FT / 4FT / 5FT" },
        { name: "G.I Welding Mesh", variant: "3FT / 4FT / 5FT" },
        { name: "G.I Mesh (Murga)", variant: "3FT / 4FT / 5FT / 6FT / 7FT / 8FT" },
        { name: "Al. Barfi Jali", variant: "2.5FT / 3FT / 4FT" },
        { name: "G.I Buneko Jali", variant: "3FT" },
        { name: "Plaster / Jodai Jali" },
      ],
    },
    {
      heading: "Plain Sheets",
      items: [
        { name: "Color Plainsheet (Red/Blue)", variant: "3FT / 4FT" },
        { name: "Sada Plainsheet", variant: "3FT / 4FT" },
      ],
    },
    {
      heading: "Steel Sections",
      items: [
        {
          name: "Square Pipes (MS)",
          variant: "3/4\" / 1\" / 1.5\" / 2\" / 2.5\" / 3\" / 4\"",
        },
        { name: "Rectangular Pipes (MS)", variant: "1\"x1/2\" / 1.5\"x3\"" },
        {
          name: "Round Pipes (MS)",
          variant: "3/4\" / 1\" / 1.5\" / 2\" / 2.5\" / 3\" / 4\"",
        },
        { name: "Square Rod", variant: "8mm / 10mm" },
        { name: "Iron Flat" },
        { name: "HR Sheet" },
        { name: "CR Sheet" },
        { name: "Iron Angles" },
        { name: "'C' Channel" },
        { name: "Gabin Jali" },
        { name: "I Beam" },
        { name: "Sheet Metal (Kamal Butta)" },
        { name: "Steel Pipes Round", variant: "1\" / 1.5\" / 2\"" },
        { name: "Steel Pipes Square", variant: "1\" / 1.5\" / 2\"" },
        { name: "Soap (Steel Wash)" },
        { name: "Welding Rod Steel" },
        { name: "Welding Rod (MS)", variant: "2.5mm / 3.2mm / 4mm" },
      ],
    },
  ],
  "machinery-tools": [
    {
      heading: "Machinery",
      items: [
        { name: "Motor (Water Pump) Copper", variant: "0.5HP / 1HP" },
        { name: "Submersible Pump", variant: "1\" / 1.5\" / 2\" — 1HP / 2HP" },
        { name: "Cutoff Machine", variant: "14\"" },
        { name: "Grinding Machine", variant: "4\"" },
        { name: "Drill Machine", variant: "10mm / 13mm etc." },
        { name: "Hammer Drill Machine" },
        { name: "Suction Pump" },
        { name: "Planner Machine" },
        { name: "Heat Gun" },
        { name: "Blower" },
        { name: "Heating Plate" },
      ],
    },
  ],
};
