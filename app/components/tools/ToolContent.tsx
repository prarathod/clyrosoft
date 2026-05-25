// Server component — SEO content section below the tool.
//
// SEO role:     Long-form keyword-rich content is what pushes a tool page
//               from position 10 to position 3. Thin tool pages without
//               descriptive content do not rank well. This section provides
//               Google the textual context it needs to understand what the
//               tool is about. Targets informational intent queries.
//
// UX role:      Answers "what is this / why use this" for users who arrive
//               without context (e.g. from a long-tail search).
//
// Performance:  Fully server-rendered. Zero JS.

import type { ToolContent as ToolContentType } from "content/tools/types";

type Props = {
  content: ToolContentType;
  /** Tool name — used in the how-to heading */
  toolName: string;
};

export default function ToolContent({ content, toolName }: Props) {
  return (
    <div className="mt-8 space-y-6">
      {/* ── About / Intro ──────────────────────────────────────────── */}
      <section
        aria-label="About this tool"
        className="bg-white rounded-2xl border border-gray-200 shadow-sm px-6 sm:px-8 py-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-3">
          About the {toolName}
        </h2>
        <p className="text-gray-600 leading-relaxed text-[15px]">
          {content.intro}
        </p>
      </section>

      {/* ── How to Use ──────────────────────────────────────────────── */}
      {content.howToUse.length > 0 && (
        <section
          aria-label="How to use"
          className="bg-white rounded-2xl border border-gray-200 shadow-sm px-6 sm:px-8 py-6"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            How to Use the {toolName}
          </h2>
          <ol className="space-y-4">
            {content.howToUse.map((step) => (
              <li key={step.step} className="flex gap-4">
                {/* Step number bubble */}
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center mt-0.5"
                >
                  {step.step}
                </span>
                <div>
                  <p className="font-medium text-gray-900 text-[15px]">
                    {step.title}
                  </p>
                  <p className="mt-0.5 text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* ── Programmatic SEO Variants (only if variants exist) ──────── */}
      {content.variants && content.variants.length > 0 && (
        <section
          aria-label="Related calculators"
          className="bg-white rounded-2xl border border-gray-200 shadow-sm px-6 sm:px-8 py-6"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            More Calculators Like This
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {content.variants.map((variant) => (
              <li key={variant.slug}>
                {/*
                  Link format: current route + /[variant.slug]
                  Use a relative link — works regardless of the current tool path.
                */}
                <a
                  href={variant.slug}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-colors text-sm font-medium text-gray-700 hover:text-blue-700"
                >
                  <svg
                    className="w-4 h-4 text-blue-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  {variant.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ── Affiliate CTA ────────────────────────────────────────────── */}
      {content.affiliateCta && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm text-amber-900 flex-1">
            {content.affiliateCta.text}
          </p>
          <a
            href={content.affiliateCta.href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex-shrink-0 px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            {content.affiliateCta.buttonLabel}
          </a>
        </div>
      )}
    </div>
  );
}
