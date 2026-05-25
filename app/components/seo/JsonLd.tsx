// Server component — renders JSON-LD structured data into <head> via Next.js script.
// No "use client" needed; this runs at build/request time.

type Props = {
  schema: Record<string, unknown>;
};

/**
 * Embeds a JSON-LD structured data block.
 *
 * @example
 * import { JsonLd } from "app/components/seo/JsonLd";
 * import { generateWebApplicationSchema } from "lib/schema";
 *
 * <JsonLd schema={generateWebApplicationSchema(tool)} />
 */
export function JsonLd({ schema }: Props) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint: dangerouslySetInnerHTML required for JSON-LD injection
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
