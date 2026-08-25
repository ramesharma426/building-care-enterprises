/**
 * Renders a <script type="application/ld+json"> tag. `data` must be a plain,
 * JSON-serializable object built on the server — never pass user input here
 * unescaped, since JSON.stringify does not escape "</script>".
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}
