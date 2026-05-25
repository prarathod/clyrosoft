// Server component — top hero section for every tool page.
//
// SEO role:     Contains the h1 (primary keyword), meta description echo,
//               and breadcrumb nav (JSON-LD BreadcrumbList added in page.tsx).
// UX role:      Immediately communicates what the tool does and that it is free.
// Monetization: Star/share area can surface a WhatsApp CTA without blocking content.

import type { ToolMeta } from "lib/tool-registry";
import Link from "next/link";

const categoryHref: Record<ToolMeta["category"], string> = {
  calculator: "/calculators",
  generator: "/generators",
  converter: "/converters",
  "ai-tool": "/ai-tools",
  regional: "/regional",
  finance: "/finance",
  student: "/student",
  health: "/health",
};

const categoryLabel: Record<ToolMeta["category"], string> = {
  calculator: "Calculators",
  generator: "Generators",
  converter: "Converters",
  "ai-tool": "AI Tools",
  regional: "Regional Tools",
  finance: "Finance Tools",
  student: "Student Tools",
  health: "Health Tools",
};

type Props = {
  tool: ToolMeta;
  /** Custom h1 override — used for programmatic variant pages */
  titleOverride?: string;
  /** Custom description override for variant pages */
  descriptionOverride?: string;
};

export default function ToolHero({ tool, titleOverride, descriptionOverride }: Props) {
  const title = titleOverride ?? tool.name;
  const description = descriptionOverride ?? tool.description;

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-7">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-sm text-gray-400 mb-4"
        >
          <Link href="/" className="hover:text-gray-700 transition-colors">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href={categoryHref[tool.category]}
            className="hover:text-gray-700 transition-colors"
          >
            {categoryLabel[tool.category]}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-gray-600 font-medium truncate">{title}</span>
        </nav>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            100% Free
          </span>

          {tool.isAI && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200">
              ✦ AI Powered
            </span>
          )}

          {tool.isPremium && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
              ★ Premium
            </span>
          )}

          {tool.isNew && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              New
            </span>
          )}

          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-50 text-gray-600 border border-gray-200">
            No Sign-up Required
          </span>
        </div>

        {/* H1 — primary SEO keyword goes here */}
        <h1 className="text-3xl sm:text-[2.5rem] font-bold text-gray-900 leading-tight tracking-tight">
          {title}
        </h1>

        {/* Description — echoes the meta description naturally */}
        <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
