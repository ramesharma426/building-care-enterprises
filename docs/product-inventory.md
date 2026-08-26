# Product inventory (raw source)

Real item-level stock list supplied by the owner on 2026-08-26 (source: `items_list.txt`).
This is now wired into the site as structured data at
[`src/data/products.ts`](../src/data/products.ts) (`productGroups`), rendered
on each category's page (`ProductItemList.tsx`) — see
[content-editing.md](./content-editing.md#itemized-stock-lists-per-category).
This file stays as the raw transcription for reference/diffing against future
updates from the owner; edit `products.ts` directly to change what's live on
the site.

Mapping to the site's 4 categories (see `CategorySlug` in
[`src/data/business.ts`](../src/data/business.ts)): "Furniture Item" and
"Section Item" below are hardware/steel stock and belong under
`building-materials`; "Jali" and "Plainsheets" also belong under
`building-materials`; "Machinery" belongs under `machinery-tools`.

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
