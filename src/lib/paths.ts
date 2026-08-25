import type { Locale } from "./site";

/** Build a link to `path` (e.g. "/", "/about", "/products/hardware-tools")
 * in the given locale. English is unprefixed; Nepali lives under /ne. */
export function localeHref(locale: Locale, path: string): string {
  if (locale === "en") return path;
  return path === "/" ? "/ne" : `/ne${path}`;
}

/** Given the current pathname (as returned by usePathname, e.g. "/ne/about"
 * or "/products"), return the equivalent path in the other locale — used by
 * the language switcher so it lands on the same page, not the home page. */
export function counterpartHref(pathname: string): string {
  if (pathname === "/ne" || pathname.startsWith("/ne/")) {
    const rest = pathname.slice("/ne".length);
    return rest === "" ? "/" : rest;
  }
  return pathname === "/" ? "/ne" : `/ne${pathname}`;
}
