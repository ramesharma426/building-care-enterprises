import type { CategorySlug } from "./business";

export type ProductVariantItem = { name: string; variant?: string };
export type ProductGroup = { heading: string; items: ProductVariantItem[] };

/**
 * Real item-level stock lists supplied by the owner — hardware/steel/
 * machinery list on 2026-08-26, paint & coatings brand list on 2026-08-30 —
 * grouped and mapped to a CategorySlug. See docs/product-inventory.md for
 * the raw source this was transcribed from. Only categories with a
 * confirmed itemized list are keyed here: `sanitary-plumbing` and
 * `appliances` still rely on the category-level copy in the dictionaries
 * alone (CategoryView falls back to that when a slug has no entry here).
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
  paints: [
    {
      heading: "Luxol / Lukol",
      items: [
        { name: "Luxol Satin Enamel", variant: "0.45/0.5 Ltr, 0.9/1 Ltr" },
        { name: "Luxol Gold Enamel", variant: "0.9/1 Ltr" },
        { name: "Luxol Xtra Enamel", variant: "0.45/0.5 Ltr, 0.9/1 Ltr" },
        {
          name: "Lukol Premium Hi-Gloss Enamel (Super White, Golden Yellow, Bus Green, P.O. Red, Ox. Blue)",
          variant: "20 Ltr",
        },
        { name: "Lukol Premium Hi-Gloss Enamel (All Other Colours)", variant: "20 Ltr" },
        { name: "TP Lukol Cool Exterior Emulsion (White & All Shade)", variant: "20 Ltr" },
        { name: "TP Lukol Exterior Emulsion (White & All Shade)", variant: "20 Ltr" },
        { name: "Lukol Clear Varnish", variant: "20 Ltr" },
      ],
    },
    {
      heading: "Brolac",
      items: [
        { name: "Brolac Hi-Gloss Enamel (GR-1: Spkl White)", variant: "500mL, 1 Ltr, 4 Ltr" },
        {
          name: "Brolac Hi-Gloss Enamel (GR-2: Gd. Yellow, PO Red, Signal Red, Deep Orange)",
          variant: "500mL, 1 Ltr, 4 Ltr",
        },
        {
          name: "Brolac Hi-Gloss Enamel (GR-3: Black, Truck Brown, Leaf Brown, Gd. Brown, Smoke Grey, Phiroza, Bus Green)",
          variant: "500mL, 1 Ltr, 4 Ltr",
        },
        { name: "Brolac Hi-Gloss Enamel (GR-4: All Others)", variant: "500mL, 1 Ltr, 4 Ltr" },
        { name: "Brolac - LB (Magenta/Purple)", variant: "4 Ltr" },
      ],
    },
    {
      heading: "Jensolin",
      items: [
        { name: "Jensolin Furniture Enamel (Grey/Dark Grey/Light Grey)" },
        { name: "Jensolin Superior Redoxide Primer", variant: "500mL, 1 Ltr, 4 Ltr" },
        { name: "Jensolin White Wood Primer", variant: "500mL, 1 Ltr, 4 Ltr" },
      ],
    },
    {
      heading: "BP",
      items: [{ name: "BP Cement Primer WT", variant: "1 Ltr, 4 Ltr, 10 Ltr" }],
    },
    {
      heading: "Weathercoat",
      items: [
        { name: "Weathercoat Long Life 12", variant: "0.9/1 Ltr, 3.6/4 Ltr" },
        { name: "Weathercoat All Guard Flexo", variant: "0.9/1 Ltr, 3.6/4 Ltr" },
        { name: "Weathercoat All Guard", variant: "0.9/1 Ltr, 3.6/4 Ltr" },
        { name: "Weathercoat Champ", variant: "0.9/1 Ltr, 3.6/4 Ltr" },
        { name: "Weathercoat Smooth", variant: "0.9/1 Ltr, 3.6/4 Ltr" },
        { name: "Weathercoat Exterior Primer", variant: "1 Ltr, 4 Ltr, 10 Ltr" },
      ],
    },
    {
      heading: "Silk",
      items: [
        { name: "Silk Breathe Easy", variant: "0.9/1 Ltr, 3.6/4 Ltr, 9/10 Ltr" },
        { name: "Silk Glamor Glow", variant: "0.9/1 Ltr, 3.6/4 Ltr, 9/10 Ltr" },
        { name: "Silk Glamor", variant: "0.9/1 Ltr, 3.6/4 Ltr, 9/10 Ltr" },
        { name: "Silk Luxury", variant: "0.9/1 Ltr, 3.6/4 Ltr, 9/10 Ltr" },
        { name: "Silk Glamor Metallic (Gold)", variant: "900mL/1 Ltr" },
        { name: "Silk Glamor Metallic (Silver)", variant: "900mL/1 Ltr" },
        { name: "Silk Illusions Metallica (Gold)", variant: "250mL" },
        { name: "Silk Illusions Metallica (Silver)", variant: "250mL" },
        { name: "Silk Illusions Non-Metallic", variant: "900mL/1 Ltr" },
      ],
    },
    {
      heading: "Easy Clean",
      items: [
        { name: "Easy Clean Fresh", variant: "0.9/1 Ltr, 3.6/4 Ltr, 9/10 Ltr" },
        { name: "Easy Clean", variant: "0.9/1 Ltr, 3.6/4 Ltr, 9/10 Ltr" },
      ],
    },
    {
      heading: "Rangoli",
      items: [{ name: "Rangoli One Coat", variant: "0.9/1 Ltr, 3.6/4 Ltr" }],
    },
    {
      heading: "Walmasta",
      items: [{ name: "Walmasta", variant: "0.9/1 Ltr, 3.6/4 Ltr" }],
    },
    {
      heading: "Bison",
      items: [
        { name: "Bison Wall Putty", variant: "40 Kg" },
        { name: "Bison Acrylic Emulsion", variant: "0.9/1 Ltr, 3.6/4 Ltr" },
      ],
    },
    {
      heading: "REWA",
      items: [
        { name: "REWA Exterior Emulsion", variant: "4 Ltr, 10 Ltr, 20 Ltr" },
        { name: "REWA Interior Emulsion", variant: "4 Ltr, 10 Ltr, 20 Ltr" },
        { name: "REWA Distemper (White & All Shade)", variant: "10 Ltr, 20 Ltr" },
        { name: "REWA Cement Primer Interior", variant: "4 Ltr, 10 Ltr, 20 Ltr" },
        { name: "REWA Cement Primer Exterior", variant: "4 Ltr, 10 Ltr, 20 Ltr" },
        { name: "REWA Enamel (White, G. Yellow, Bus Green, PO Red)", variant: "1 Ltr, 4 Ltr" },
        { name: "REWA Enamel - All Other Shade", variant: "1 Ltr, 4 Ltr" },
        { name: "REWA Wood Primer Pink", variant: "1 Ltr, 4 Ltr" },
        { name: "REWA Wood Primer White", variant: "1 Ltr, 4 Ltr" },
        { name: "REWA Metal Primer", variant: "1 Ltr, 4 Ltr" },
      ],
    },
    {
      heading: "Tata",
      items: [
        { name: "Toyal Royal Luxury Interior Emulsion (White & All Shade)", variant: "20 Ltr" },
        { name: "Tata Altee Exterior Emulsion (White & All Shade)", variant: "20 Ltr" },
        { name: "Tata Toyota Exterior Emulsion (White & All Shade)", variant: "20 Ltr" },
        { name: "Tata Anamol Interior Emulsion (White & All Shade)", variant: "20 Ltr" },
        { name: "Tata Cement Primer Exterior", variant: "10 Ltr, 20 Ltr" },
        { name: "Tata Cement Primer Interior", variant: "10 Ltr, 20 Ltr" },
        { name: "Tata Acrylic Distemper (White & All Shade)", variant: "20 Ltr" },
        {
          name: "Tata Synthetic Enamel (Super White, Golden Yellow, Bus Green, P.O. Red, Ox. Blue)",
          variant: "20 Ltr",
        },
        { name: "Tata Synthetic Enamel (All Other Colours)", variant: "20 Ltr" },
        { name: "Tata Wood Primer White", variant: "4 Ltr, 20 Ltr" },
        { name: "Tata Wood Primer Pink", variant: "4 Ltr, 20 Ltr" },
        { name: "Tata Metal Primer Red Oxide", variant: "4 Ltr, 20 Ltr" },
        { name: "Tata Aluminium Paint", variant: "20 Ltr" },
        { name: "Tata Black Japan (Bitumen Paint)", variant: "20 Ltr" },
        { name: "Tata Gold 24 Carat", variant: "20 Ltr" },
      ],
    },
    {
      heading: "Aagaman",
      items: [
        { name: "Aagaman Cement Primer Exterior", variant: "10 Ltr, 20 Ltr" },
        { name: "Aagaman Cement Primer Interior", variant: "10 Ltr, 20 Ltr" },
        { name: "Aagaman Acrylic Distemper (White & All Shade)", variant: "20 Ltr" },
      ],
    },
  ],
};
