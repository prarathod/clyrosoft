// ─────────────────────────────────────────────────────────────────────────────
// EMI CALCULATOR — VARIANT PAGE (Programmatic SEO)
//
// Generated routes:
//   /finance/emi-calculator/home-loan
//   /finance/emi-calculator/car-loan
//   /finance/emi-calculator/personal-loan
//
// Each variant page has unique metadata and targets a high-volume keyword
// (e.g. "home loan emi calculator" — 2M+ searches/month).
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getToolById } from "lib/tool-registry";
import { generateWebApplicationSchema, faqSchema, breadcrumbSchema } from "lib/schema";
import { JsonLd } from "app/components/seo/JsonLd";
import ToolLayout from "app/components/tools/ToolLayout";
import EmiCalculator from "../EmiCalculator";
import emiContent from "content/tools/emi-calculator";

export function generateStaticParams() {
  return (emiContent.variants ?? []).map((v) => ({ variant: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ variant: string }>;
}): Promise<Metadata> {
  const { variant: slug } = await params;
  const variant = emiContent.variants?.find((v) => v.slug === slug);
  if (!variant) return {};

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.clyrosoft.com";
  return {
    title: `${variant.title} | Free Tool`,
    description: variant.description,
    keywords: variant.keywords,
    alternates: {
      canonical: `${SITE_URL}/finance/emi-calculator/${variant.slug}`,
    },
  };
}

export default async function EmiVariantPage({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant: slug } = await params;
  const variant = emiContent.variants?.find((v) => v.slug === slug);
  if (!variant) notFound();

  const tool = getToolById("emi-calculator")!;
  const mergedFaqs = [...emiContent.faqs, ...(variant.faqs ?? [])];
  const override = { title: variant.title, description: variant.description };

  return (
    <>
      <JsonLd schema={generateWebApplicationSchema(tool)} />
      <JsonLd schema={faqSchema(mergedFaqs)} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", slug: "/" },
          { name: "Finance Calculators", slug: "/finance" },
          { name: tool.name, slug: tool.slug },
          { name: variant.label, slug: `${tool.slug}/${variant.slug}` },
        ])}
      />
      <ToolLayout
        tool={tool}
        content={{ ...emiContent, faqs: mergedFaqs }}
        override={override}
        adsEnabled={false}
      >
        <EmiCalculator />
      </ToolLayout>
    </>
  );
}
