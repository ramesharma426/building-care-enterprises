# Product inventory (raw source)

Real item-level stock lists supplied by the owner:

- 2026-08-26 (source: `items_list.txt`) — hardware/fittings, wire mesh, plain sheets, machinery, steel sections.
- 2026-08-30 (source: `paint-product-list-by-brand.txt`) — paint & coatings, by brand.
- 2026-09-08 (source: `om_shivam_price_list.txt`) — Om Shivam (Laxmi Technoplast) CPVC/uPVC pipes & fittings.

Both are now wired into the site as structured data at
[`src/data/products.ts`](../src/data/products.ts) (`productGroups`), rendered
on each category's page (`ProductItemList.tsx`) — see
[content-editing.md](./content-editing.md#itemized-stock-lists-per-category).
This file stays as the raw transcription for reference/diffing against future
updates from the owner; edit `products.ts` directly to change what's live on
the site.

Mapping to the site's 5 categories (see `CategorySlug` in
[`src/data/business.ts`](../src/data/business.ts)): "Furniture Item" and
"Section Item" below are hardware/steel stock and belong under
`building-materials`; "Jali" and "Plainsheets" also belong under
`building-materials`; "Machinery" belongs under `machinery-tools`; the
"Paint & Coating" brand list belongs under its own `paints` category; the
Om Shivam CPVC/uPVC list belongs under `sanitary-plumbing`.

## Furniture Item (hardware)

| Item | Variant |
|---|---|
| Ply Cutter | 4" / 7" |
| Maskin Tape | 3/4" / 1" |
| Tarpin Oil | 300mL |
| Door Spring | |
| Door Closer | Hydraulic |
| Paper Khakshi Wood | 60 / 80 / 100 No. |
| Water Paper Khakshi | 120 / 150 / 180 / 220 / 350 |
| Line Dhago | |
| Paper Khakshi Roll | |
| Nailon Dhago | |
| Measuring Tape | 3m / 5m / 7.5m / 10m / 20m / 30m / 50m / 100m |
| Pin & Nails | 3/4" / 1" / 1 1/4" / 1 1/2" |
| Luwang Nails | 3/4" |
| Wire Brush | |
| Dendrite | 1/2kg / 1kg / 4kg |
| Fevicol | 1/2kg / 1kg / 5kg / 20kg |
| Screw | 20x5 / 30x7 / 25x6 / 35x8 |
| Aari | |
| Hexo Blade | 1/2" / 1" |
| Cheskini (Al./Steel) | 4" / 6" / 8" / 10" / 12" |
| Muthiya (Al./Steel) | 5" / 6" / 8" |
| I Hook (Al./Steel) | 5" |
| Door Stopper | |
| Hinges (Steel/Falam) | 3" / 4" / 6" |
| Aldroph (Steel/Falam) | 6" / 8" / 10" / 12" |
| Cabinet Muthiya | 4" / 8" / 12" |
| Drawer Lock | |
| Auto Kabza | 0° / 8° |

## Jali (mesh)

| Item | Variant |
|---|---|
| Aluminium Jali | 2.5FT / 3FT / 4FT / 5FT |
| G.I Welding Mesh | 3FT / 4FT / 5FT |
| G.I Mesh (Murga) | 3FT / 4FT / 5FT / 6FT / 7FT / 8FT |
| Al. Barfi Jali | 2.5FT / 3FT / 4FT |
| G.I Buneko Jali | 3FT |
| Plaster / Jodai Jali | |

## Plainsheets

| Item | Variant |
|---|---|
| Color Plainsheet (Red/Blue) | 3FT / 4FT |
| Sada Plainsheet | 3FT / 4FT |

## Machinery

| Item | Variant |
|---|---|
| Motor (Water Pump) Copper | 0.5HP / 1HP |
| Submersible Pump | 1" / 1.5" / 2" — 1HP / 2HP |
| Cutoff Machine | 14" |
| Grinding Machine | 4" |
| Drill Machine | 10mm / 13mm etc. |
| Hammer Drill Machine | |
| Suction Pump | |
| Planner Machine | |
| Heat Gun | |
| Blower | |
| Heating Plate | |

## Section Item (steel)

| Item | Variant |
|---|---|
| Square Pipes (MS) | 3/4" / 1" / 1.5" / 2" / 2.5" / 3" / 4" |
| Rectangular Pipes (MS) | 1"x1/2" / 1.5"x3" |
| Round Pipes (MS) | 3/4" / 1" / 1.5" / 2" / 2.5" / 3" / 4" |
| Square Rod | 8mm / 10mm |
| Iron Flat | |
| HR Sheet | |
| CR Sheet | |
| Iron Angles | |
| 'C' Channel | |
| Gabin Jali | |
| I Beam | |
| Sheet Metal (Kamal Butta) | |
| Steel Pipes Round | 1" / 1.5" / 2" |
| Steel Pipes Square | 1" / 1.5" / 2" |
| Soap (Steel Wash) | |
| Welding Rod Steel | |
| Welding Rod (MS) | 2.5mm / 3.2mm / 4mm |

## Paint & Coating (by brand)

Source note preserved as-is from the owner's sheets: brand grouping follows the
name printed on each product label (e.g. "Lukol", "Brolac", "Jensolin", "Silk"
are distinct product-line names even if some may share a parent company).
Quantities reflect the pack-size columns visible in the source photos; some
columns were cut off at the right edge and may not be complete for every
product. Footnote on the originals: "All white and P0 bases are available in
1/4/10/20 liters; W1 & P1 bases available in 0.9/3.6/9/16/20 liters."

### Luxol / Lukol

| Item | Variant |
|---|---|
| Luxol Satin Enamel | 0.45/0.5 Ltr, 0.9/1 Ltr |
| Luxol Gold Enamel | 0.9/1 Ltr |
| Luxol Xtra Enamel | 0.45/0.5 Ltr, 0.9/1 Ltr |
| Lukol Premium Hi-Gloss Enamel (Super White, Golden Yellow, Bus Green, P.O. Red, Ox. Blue) | 20 Ltr |
| Lukol Premium Hi-Gloss Enamel (All Other Colours) | 20 Ltr |
| TP Lukol Cool Exterior Emulsion (White & All Shade) | 20 Ltr |
| TP Lukol Exterior Emulsion (White & All Shade) | 20 Ltr |
| Lukol Clear Varnish | 20 Ltr |

### Brolac

| Item | Variant |
|---|---|
| Brolac Hi-Gloss Enamel (GR-1: Spkl White) | 500mL, 1 Ltr, 4 Ltr |
| Brolac Hi-Gloss Enamel (GR-2: Gd.Yellow, PO Red, Signal Red, Deep Orange) | 500mL, 1 Ltr, 4 Ltr |
| Brolac Hi-Gloss Enamel (GR-3: Black, Truck Brown, Leaf Brown, Gd.Brown, Smoke Grey, Phiroza, Bus Green) | 500mL, 1 Ltr, 4 Ltr |
| Brolac Hi-Gloss Enamel (GR-4: All Others) | 500mL, 1 Ltr, 4 Ltr |
| Brolac - LB (Magenta/Purple) | 4 Ltr |

### Jensolin

| Item | Variant |
|---|---|
| Jensolin Furniture Enamel (Grey/Dark Grey/Light Grey) | (sizes not listed) |
| Jensolin Superior Redoxide Primer | 500mL, 1 Ltr, 4 Ltr |
| Jensolin White Wood Primer | 500mL, 1 Ltr, 4 Ltr |

### BP

| Item | Variant |
|---|---|
| BP Cement Primer WT | 1 Ltr, 4 Ltr, 10 Ltr |

### Weathercoat

| Item | Variant |
|---|---|
| Weathercoat Long Life 12 | 0.9/1 Ltr, 3.6/4 Ltr |
| Weathercoat All Guard Flexo | 0.9/1 Ltr, 3.6/4 Ltr |
| Weathercoat All Guard | 0.9/1 Ltr, 3.6/4 Ltr |
| Weathercoat Champ | 0.9/1 Ltr, 3.6/4 Ltr |
| Weathercoat Smooth | 0.9/1 Ltr, 3.6/4 Ltr |
| Weathercoat Exterior Primer | 1 Ltr, 4 Ltr, 10 Ltr |

### Silk

| Item | Variant |
|---|---|
| Silk Breathe Easy | 0.9/1 Ltr, 3.6/4 Ltr, 9/10 Ltr |
| Silk Glamor Glow | 0.9/1 Ltr, 3.6/4 Ltr, 9/10 Ltr |
| Silk Glamor | 0.9/1 Ltr, 3.6/4 Ltr, 9/10 Ltr |
| Silk Luxury | 0.9/1 Ltr, 3.6/4 Ltr, 9/10 Ltr |
| Silk Glamor Metallic (Gold) | 900mL/1 Ltr |
| Silk Glamor Metallic (Silver) | 900mL/1 Ltr |
| Silk Illusions Metallica (Gold) | 250mL |
| Silk Illusions Metallica (Silver) | 250mL |
| Silk Illusions Non-Metallic | 900mL/1 Ltr |

### Easy Clean

| Item | Variant |
|---|---|
| Easy Clean Fresh | 0.9/1 Ltr, 3.6/4 Ltr, 9/10 Ltr |
| Easy Clean | 0.9/1 Ltr, 3.6/4 Ltr, 9/10 Ltr |

### Rangoli

| Item | Variant |
|---|---|
| Rangoli One Coat | 0.9/1 Ltr, 3.6/4 Ltr |

### Walmasta

| Item | Variant |
|---|---|
| Walmasta | 0.9/1 Ltr, 3.6/4 Ltr |

### Bison

| Item | Variant |
|---|---|
| Bison Wall Putty | 40 Kg |
| Bison Acrylic Emulsion | 0.9/1 Ltr, 3.6/4 Ltr |

### REWA

| Item | Variant |
|---|---|
| REWA Exterior Emulsion | 4 Ltr, 10 Ltr, 20 Ltr |
| REWA Interior Emulsion | 4 Ltr, 10 Ltr, 20 Ltr |
| REWA Distemper (White & All Shade) | 10 Ltr, 20 Ltr |
| REWA Cement Primer Interior | 4 Ltr, 10 Ltr, 20 Ltr |
| REWA Cement Primer Exterior | 4 Ltr, 10 Ltr, 20 Ltr |
| REWA Enamel (White, G.Yellow, Bus Green, PO Red) | 1 Ltr, 4 Ltr |
| REWA Enamel - All Other Shade | 1 Ltr, 4 Ltr |
| REWA Wood Primer Pink | 1 Ltr, 4 Ltr |
| REWA Wood Primer White | 1 Ltr, 4 Ltr |
| REWA Metal Primer | 1 Ltr, 4 Ltr |

### Tata

| Item | Variant |
|---|---|
| Toyal Royal Luxury Interior Emulsion (White & All Shade) | 20 Ltr |
| Tata Altee Exterior Emulsion (White & All Shade) | 20 Ltr |
| Tata Toyota Exterior Emulsion (White & All Shade) | 20 Ltr |
| Tata Anamol Interior Emulsion (White & All Shade) | 20 Ltr |
| Tata Cement Primer Exterior | 10 Ltr, 20 Ltr |
| Tata Cement Primer Interior | 10 Ltr, 20 Ltr |
| Tata Acrylic Distemper (White & All Shade) | 20 Ltr |
| Tata Synthetic Enamel (Super White, Golden Yellow, Bus Green, P.O. Red, Ox. Blue) | 20 Ltr |
| Tata Synthetic Enamel (All Other Colours) | 20 Ltr |
| Tata Wood Primer White | 4 Ltr, 20 Ltr |
| Tata Wood Primer Pink | 4 Ltr, 20 Ltr |
| Tata Metal Primer Red Oxide | 4 Ltr, 20 Ltr |
| Tata Aluminium Paint | 20 Ltr |
| Tata Black Japan (Bitumen Paint) | 20 Ltr |
| Tata Gold 24 Carat | 20 Ltr |

### Aagaman

| Item | Variant |
|---|---|
| Aagaman Cement Primer Exterior | 10 Ltr, 20 Ltr |
| Aagaman Cement Primer Interior | 10 Ltr, 20 Ltr |
| Aagaman Acrylic Distemper (White & All Shade) | 20 Ltr |

## Om Shivam CPVC/uPVC Pipes & Fittings (by type)

Source: `om_shivam_price_list.txt`, manufacturer Laxmi Technoplast Ltd.
(Hetauda Industrial Estate). Only item names and available sizes were
transcribed from the source sheet — no other detail from it is repeated
here.

### CPVC Pipes

| Item | Variant |
|---|---|
| SDR-11 CPVC Pipe | 1/2", 3/4", 1", 1-1/4", 1-1/2", 2" |
| SDR-13.5 CPVC Pipe | 1/2", 3/4", 1", 1-1/4", 1-1/2", 2" |

### CPVC Fittings

| Item | Variant |
|---|---|
| Coupler / Socket | 1/2", 3/4", 1", 1-1/4", 1-1/2", 2" |
| Elbow 90° | 1/2", 3/4", 1", 1-1/4", 1-1/2", 2", 1"x1/2", 1"x3/4" |
| Equal Tee | 1/2", 3/4", 1", 1-1/4", 1-1/2", 2" |
| Elbow 45° | 1/2", 3/4", 1", 1-1/4", 1-1/2", 2" |
| End Cap | 1/2", 3/4", 1", 1-1/4", 1-1/2", 2" |
| Female Thread Tee (Brass) | 1/2", 3/4", 1", 3/4"x1/2", 1"x1/2", 1"x3/4" |
| Female Thread Adapter | 1/2", 3/4", 1", 1-1/4", 1-1/2", 2" |
| Male Thread Adapter (Brass, Hexa) | 3/4", 1", 3/4"x1/2", 1"x1/2" |
| Female Thread Adapter (Brass, Hexa) | 3/4", 1", 3/4"x1/2", 1"x1/2" |
| Male Thread Adaptor | 1/2", 3/4", 1", 1-1/4", 1-1/2", 2", 3/4"x1/2", 1"x1/2" |
| Female Thread Elbow (Brass) | 1/2", 3/4", 1", 3/4"x1/2", 1"x1/2" |
| Reducing Bush | 1"x3/4", 1-1/4"x3/4", 1-1/4"x1", 1-1/2"x3/4", 1-1/2"x1", 1-1/2"x1-1/4", 2"x1", 2"x1-1/4", 2"x1-1/2" |
| Reducing Tee | 3/4"x1/2", 1"x3/4", 1-1/4"x3/4", 1-1/4"x1", 1-1/2"x3/4", 1-1/2"x1", 1-1/2"x1-1/4", 2"x3/4", 2"x1", 2"x1-1/4", 2"x1-1/2" |
| Reducing Coupler / Socket | 3/4"x1/2", 1"x1/2", 1"x3/4", 1-1/4"x3/4", 1-1/4"x1", 1-1/2"x3/4", 1-1/2"x1", 1-1/2"x1-1/4", 2"x1", 2"x1-1/4", 2"x1-1/2" |
| Union | 1/2", 3/4", 1", 1-1/4", 1-1/2", 2" |
| Tank Connector | 1/2", 3/4", 1", 1-1/4", 1-1/2", 2" |
| Male Thread Adapter (Brass) | 1/2", 3/4", 1", 1-1/4", 1-1/2", 2", 3/4"x1/2", 1"x1/2" |
| Female Coupling (Brass) | 1/2", 3/4", 1", 1-1/4", 1-1/2", 2", 3/4"x1/2", 1"x1/2" |
| Ball Valve | 1/2", 3/4", 1", 1-1/4", 1-1/2", 2" |
| Metal Pipe Clamp | 1/2", 3/4", 1", 1-1/4", 1-1/2", 2" |
| Cross Tee | 1/2", 3/4", 1" |
| Step Over Bend | 1/2", 3/4", 1" |
| End Plug Threaded | 1/2" |
| Wall Mixture Adapter | Double, Triple |
| Solvent (CPVC) | 59 mL, 118 mL, 237 mL |

### uPVC Pipes

| Item | Variant |
|---|---|
| Pressure Pipe (NS Standard), 2.5 kgf/cm² | 110mm, 160mm |
| Pressure Pipe (NS Standard), 4 kgf/cm² | 75mm, 110mm, 160mm |
| Pressure Pipe (NS Standard), 6 kgf/cm² | 50mm, 75mm, 110mm, 160mm |
| Underground Drainage Plain Socket SN4, 3m length | 75mm, 110mm, 160mm |
| Underground Drainage Plain Socket SN4, 6m length | 75mm, 110mm, 160mm |
| Non-NS Pressure Pipe, 4 kgf/cm², 3m length | 50mm, 75mm, 110mm, 160mm |
| Non-NS Pressure Pipe, 4 kgf/cm², 6m length | 75mm, 110mm, 160mm |

### uPVC Fittings

| Item | Variant |
|---|---|
| Coupler | 1-1/2" (50mm), 2-1/2" (75mm), 4" (110mm), 6" (160mm) |
| Bend 87.5° | 1-1/2" (50mm), 2-1/2" (75mm), 4" (110mm), 6" (160mm) |
| Bend 87.5° with Door | 2-1/2" (75mm), 4" (110mm) |
| Bend 45° | 1-1/2" (50mm), 2-1/2" (75mm), 4" (110mm), 6" (160mm) |
| Single Tee | 1-1/2" (50mm), 2-1/2" (75mm), 4" (110mm), 6" (160mm) |
| Cleaning Pipe | 2-1/2" (75mm), 4" (110mm) |
| Pipe Clip | 1-1/2" (50mm), 2-1/2" (75mm), 4" (110mm), 6" (160mm) |
| Reducer | 2-1/2"x1-1/2" (75x50mm), 4"x2-1/2" (110x75mm), 6"x4" (160x110mm) |
| P' Trap | 4" (110mm) |
| Vent Cowl | 2-1/2" (75mm), 4" (110mm) |
| Single Tee with Door | 1-1/2" (50mm), 2-1/2" (75mm) |
| Double Tee | 2-1/2" (75mm), 4" (110mm) |
| Double Tee with Door | 2-1/2" (75mm), 4" (110mm) |
| Single 'Y' | 1-1/2" (50mm), 2-1/2" (75mm), 4" (110mm), 6" (160mm) |
| Single 'Y' with Door | 1-1/2" (50mm), 2-1/2" (75mm), 4" (110mm) |
| End Cap | 1-1/2" (50mm), 2-1/2" (75mm), 4" (110mm) |
| Square Jali | 4" (110mm) |
| Reducing Tee | 4"x2-1/2" (110x75mm), 6"x4" (160x110mm) |
| Reducing Tee with Door | 4"x2-1/2" (110x75mm) |
| Multi Floor Trap | 4"x2-1/2" (110x75mm) |
| Nahani Trap | 4"x2-1/2" (110x75mm) |
| Socket Plug | 1-1/2" (50mm), 2-1/2" (75mm), 4" (110mm) |
| Construction Tagaro | 16" |
| Adhesive Solvent | 100 mL, 200 mL, 500 mL, 1000 mL |

Note: `-` in the source indicates the value was blank, illegible, or not
applicable in the original scanned document.
