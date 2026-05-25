// Finance category hub page — /finance
//
// SEO role: This is the "pillar page" for the Finance cluster.
//   - Targets: "finance calculators india", "financial calculators online"
//   - Links to all finance tools (spoke pages) → distributes PageRank
//   - All spoke pages breadcrumb back here → strengthens the hub
//   - The hub + spoke model is what builds topical authority
//
// Internal linking architecture:
//   /finance                  ← Hub (this page)
//     └── /finance/emi-calculator
//     └── /finance/sip-calculator
//     └── /finance/gratuity-calculator
//     └── /finance/pension-calculator
//     └── /finance/retirement-calculator
//         └── /finance/retirement-calculator/early-retirement

import Link from "next/link";
import type { Metadata } from "next";
import { getToolsByCategory } from "lib/tool-registry";
import { generatePageMetadata } from "lib/metadata";
import { JsonLd } from "app/components/seo/JsonLd";
import { organizationSchema, breadcrumbSchema } from "lib/schema";

export const metadata: Metadata = generatePageMetadata({
  title: "Free Finance Calculators for India",
  description:
    "Free financial calculators for India — EMI, SIP, gratuity, pension, and retirement planning. Instant results with no sign-up required.",
  slug: "/finance",
  keywords: [
    "finance calculators india",
    "financial calculators online",
    "free money calculators india",
    "personal finance tools india",
  ],
});

const financeTools = getToolsByCategory("finance");

// Cluster intro content — keyword-rich, scannable
const clusterIntro = `Financial planning in India involves navigating EMI repayments, SIP investments, gratuity calculations, pension entitlements, and long-term retirement planning. Each of these requires a different formula and different inputs. Our free finance calculator suite covers all of them — instant results, accurate formulas, and no sign-up required. Whether you are planning your first home loan, calculating your monthly SIP returns, or projecting your retirement corpus, you will find the right tool below.`;

const toolFeatures: Record<string, { icon: string; highlight: string }> = {
  "emi-calculator": {
    icon: "🏠",
    highlight: "Amortization schedule included",
  },
  "sip-calculator": {
    icon: "📈",
    highlight: "Year-by-year growth breakdown",
  },
  "gratuity-calculator": {
    icon: "🏆",
    highlight: "Tax exemption shown",
  },
  "pension-calculator": {
    icon: "🏦",
    highlight: "OPS + NPS supported",
  },
  "retirement-calculator": {
    icon: "🌅",
    highlight: "Inflation-adjusted corpus",
  },
};

export default function FinanceCategoryPage() {
  return (
    <>
      <JsonLd schema={organizationSchema()} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", slug: "/" },
          { name: "Finance Calculators", slug: "/finance" },
        ])}
      />

      <main className="min-h-screen bg-gray-50 pb-16">
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-8">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-400 mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-gray-700">Home</Link>
              <span className="mx-1.5">/</span>
              <span className="text-gray-700 font-medium">Finance Calculators</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Free Finance Calculators for India
            </h1>
            <p className="mt-3 text-lg text-gray-500 max-w-2xl leading-relaxed">
              {clusterIntro}
            </p>

            {/* Trust signals */}
            <div className="mt-5 flex flex-wrap gap-3">
              {["100% Free", "No Sign-up", "Instant Results", "Indian Formulas"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200"
                  >
                    ✓ {badge}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* ── Tool Grid ─────────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-1">
            All Finance Calculators
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            {financeTools.length} free tools — updated with latest Indian regulations
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {financeTools.map((tool) => {
              const features = toolFeatures[tool.id] ?? {
                icon: "💰",
                highlight: "Free to use",
              };
              return (
                <a
                  key={tool.id}
                  href={tool.slug}
                  className="group flex flex-col bg-white rounded-2xl border border-gray-200 p-5 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                >
                  {/* Icon + name */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{features.icon}</span>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {tool.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 line-clamp-3">
                    {tool.description}
                  </p>

                  {/* Highlight feature */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {features.highlight}
                    </span>
                    <span className="text-xs font-semibold text-gray-400 group-hover:text-blue-600 transition-colors">
                      Try free →
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* ── Why Use These Tools ───────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-10">
          <div className="bg-white rounded-2xl border border-gray-200 px-6 sm:px-8 py-7">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Why Use Our Finance Calculators?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
              {[
                {
                  title: "Indian formulas and regulations",
                  desc: "Built for India — EPF, NPS, Payment of Gratuity Act, and RBI-standard EMI calculation.",
                },
                {
                  title: "Instant, accurate results",
                  desc: "No loading, no servers, no waiting. Results appear as you type.",
                },
                {
                  title: "No sign-up, no ads",
                  desc: "100% free to use. No account required, no email capture.",
                },
                {
                  title: "Mobile-friendly",
                  desc: "Works perfectly on your phone. Calculate your EMI during a bank visit.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="text-emerald-500 flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <p className="mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
