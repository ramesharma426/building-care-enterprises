/** Lucide doesn't ship brand/logo icons (license reasons), so this one glyph
 * is hand-drawn to match lucide's stroke-icon sizing conventions (24x24
 * viewBox, sized via className like every other icon in this app). */
export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.3-1.5 1.6-1.5H16.5V4.2C16.2 4.2 15.3 4 14.3 4c-2.1 0-3.6 1.3-3.6 3.7V10.5H8v3h2.7V21h2.8Z" />
    </svg>
  );
}
