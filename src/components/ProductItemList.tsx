import { ChevronDown } from "lucide-react";
import type { ProductGroup } from "@/data/products";

export function ProductItemList({ groups }: { groups: ProductGroup[] }) {
  return (
    <div className="mt-4 space-y-3">
      {groups.map((group, i) => (
        <details
          key={group.heading}
          open={groups.length === 1 || i === 0}
          className="group overflow-hidden rounded-xl border border-slate-200"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3 text-sm font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
            <span>{group.heading}</span>
            <span className="flex shrink-0 items-center gap-2 text-xs font-normal text-slate-400">
              {group.items.length}
              <ChevronDown
                className="h-4 w-4 transition-transform group-open:rotate-180"
                aria-hidden
              />
            </span>
          </summary>
          <ul className="divide-y divide-slate-100 border-t border-slate-100 px-4">
            {group.items.map((item) => (
              <li
                key={item.name}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 py-2 text-sm"
              >
                <span className="font-medium text-slate-800">{item.name}</span>
                {item.variant && <span className="text-slate-500">{item.variant}</span>}
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}
