// ─────────────────────────────────────────────────────────────────────────────
// PENSION CALCULATOR — VARIANT PAGE (Programmatic SEO)
//
// This single file generates N pages — one per variant in pension-calculator.ts.
//
// Generated routes:
//   /finance/pension-calculator/karnataka
//   /finance/pension-calculator/teachers
//   /finance/pension-calculator/private-employees
//
// Each variant page has:
//   - Unique title, description, canonical URL → unique metadata per URL
//   - Variant-specific FAQs merged with base FAQs → unique content per URL
//   - Shared interactive tool component (PensionCalculator)
//   - Full ToolLayout with all SEO sections
//
// RULE: Only create variants for keywords with search volume > 500/month.
// RULE: Each variant must have at least 2 unique FAQs, not just changed metadata.
//       Thin variant pages (only metadata changes) can be penalized by Google.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getToolById } from "lib/tool-registry";
import { generateWebApplicationSchema, faqSchema, breadcrumbSchema } from "lib/schema";
import { JsonLd } from "app/components/seo/JsonLd";
import ToolLayout from "app/components/tools/ToolLayout";
import pensionContent from "content/tools/pension-calculator";
import type { FaqItem, ToolVariant } from "content/tools/types";

// ─── Stubs — replace with real PensionCalculator component when built ─────────
// import PensionCalculator from "../PensionCalculator";
function PensionCalculatorStub({ variant }: { variant: ToolVariant }) {
  return (
    <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-8 text-center text-gray-400">
      <p className="font-medium">
        {variant.label} Pension Calculator — coming soon
      </p>
      <p className="text-sm mt-1">
        Component: <code>app/(tools)/finance/pension-calculator/PensionCalculator.tsx</code>
      </p>
    </div>
  );
}

// ─── Static params — tells Next.js which slugs to pre-render at build time ────
export function generateStaticParams() {
  return (pensionContent.variants ?? []).map((v) => ({ variant: v.slug }));
}

// ─── Metadata — unique per variant ────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ variant: string }>;
}): Promise<Metadata> {
  const { variant: slug } = await params;
  const variant = pensionContent.variants?.find((v) => v.slug === slug);
  if (!variant) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.clyrosoft.com";
  const canonicalUrl = `${siteUrl}/finance/pension-calculator/${slug}`;

  return {
    title: `${variant.title} — Free Online Tool | ClyroSoft`,
    description: variant.description,
    keywords: variant.keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: variant.title,
      description: variant.description,
      url: canonicalUrl,
    },
  };
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default async function PensionVariantPage({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant: slug } = await params;
  const variant = pensionContent.variants?.find((v) => v.slug === slug);

  // 404 for unknown slugs — never rendered by generateStaticParams
  if (!variant) notFound();

  const tool = getToolById("pension-calculator")!;

  // Merge variant-specific FAQs AFTER base FAQs so base content comes first
  const mergedFaqs: FaqItem[] = [
    ...pensionContent.faqs,
    ...(variant.faqs ?? []),
  ];

  return (
    <>
      <JsonLd schema={generateWebApplicationSchema(tool)} />
      <JsonLd schema={faqSchema(mergedFaqs)} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", slug: "/" },
          { name: "Finance Tools", slug: "/finance" },
          { name: "Pension Calculator", slug: "/finance/pension-calculator" },
          { name: variant.label, slug: `/finance/pension-calculator/${slug}` },
        ])}
      />

      <ToolLayout
        tool={tool}
        content={{
          ...pensionContent,
          faqs: mergedFaqs,
          // Pass variant-specific intro if you need it:
          // intro: variant.description,
        }}
        override={{
          title: variant.title,
          description: variant.description,
        }}
        adsEnabled={false}
      >
        <PensionCalculatorStub variant={variant} />
      </ToolLayout>
    </>
  );
}
