// Server component — renders a grid of related tool cards.
// Data comes from the tool registry, so no props drilling needed.

import type { ToolMeta } from "lib/tool-registry";

type Props = {
  tools: ToolMeta[];
  heading?: string;
};

/**
 * Renders a horizontal card strip of related tools.
 * Pass the result of getRelatedTools(tool.id) from lib/tool-registry.
 *
 * @example
 * // In ToolLayout (server component):
 * const relatedTools = getRelatedTools(tool.id);
 * <RelatedTools tools={relatedTools} />
 */
export default function RelatedTools({
  tools,
  heading = "Related Tools",
}: Props) {
  if (tools.length === 0) return null;

  return (
    <section aria-label="Related tools">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <a
            key={tool.id}
            href={tool.slug}
            className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-300 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="text-base font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                {tool.name}
              </span>
              <div className="flex gap-1 flex-shrink-0">
                {tool.isNew && (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                    New
                  </span>
                )}
                {tool.isAI && (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                    AI
                  </span>
                )}
              </div>
            </div>
            <p className="text-sm text-gray-500 line-clamp-2">{tool.tagline}</p>
            <span className="mt-3 inline-flex items-center text-xs font-medium text-blue-600 group-hover:text-blue-800">
              Try it free →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
