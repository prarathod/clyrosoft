import type { MetadataRoute } from "next";
import { getAllToolSlugs } from "lib/tool-registry";

// Content files — imported to extract variant slugs.
// Add new content files here whenever a tool has variants.
import ageContent from "content/tools/age-calculator";
import emiContent from "content/tools/emi-calculator";
import sipContent from "content/tools/sip-calculator";
import gratuityContent from "content/tools/gratuity-calculator";
import pensionContent from "content/tools/pension-calculator";
import retirementContent from "content/tools/retirement-calculator";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.clyrosoft.com";

// ─── Static marketing routes ──────────────────────────────────────────────────
const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: SITE_URL,
    lastModified: new Date("2025-01-01"),
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    url: `${SITE_URL}/services`,
    lastModified: new Date("2025-01-01"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/about-us`,
    lastModified: new Date("2025-01-01"),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${SITE_URL}/articles`,
    lastModified: new Date("2025-01-01"),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: `${SITE_URL}/contact-us`,
    lastModified: new Date("2025-01-01"),
    changeFrequency: "yearly",
    priority: 0.5,
  },
];

// ─── Category index pages ─────────────────────────────────────────────────────
// One hub page per category — important for SEO topical authority.
// Create app/(tools)/finance/page.tsx, /calculators/page.tsx, etc.
const categoryRoutes: MetadataRoute.Sitemap = [
  {
    url: `${SITE_URL}/finance`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  },
];

// ─── Variant page builder ─────────────────────────────────────────────────────
type VariantConfig = {
  baseSlug: string;
  variants: { slug: string }[];
};

function buildVariantRoutes(
  configs: VariantConfig[]
): MetadataRoute.Sitemap {
  return configs.flatMap(({ baseSlug, variants }) =>
    (variants ?? []).map((v) => ({
      url: `${SITE_URL}${baseSlug}/${v.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Base tool routes — auto-generated from registry (no manual work required)
  const toolRoutes: MetadataRoute.Sitemap = getAllToolSlugs().map((slug) => ({
    url: `${SITE_URL}${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Variant routes — generated from content file variant arrays
  const variantRoutes = buildVariantRoutes([
    { baseSlug: "/calculators/age-calculator", variants: ageContent.variants ?? [] },
    { baseSlug: "/finance/emi-calculator", variants: emiContent.variants ?? [] },
    { baseSlug: "/finance/sip-calculator", variants: sipContent.variants ?? [] },
    { baseSlug: "/finance/gratuity-calculator", variants: gratuityContent.variants ?? [] },
    { baseSlug: "/finance/pension-calculator", variants: pensionContent.variants ?? [] },
    { baseSlug: "/finance/retirement-calculator", variants: retirementContent.variants ?? [] },
  ]);

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...toolRoutes,
    ...variantRoutes,
  ];
}
