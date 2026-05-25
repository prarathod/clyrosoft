// ─────────────────────────────────────────────────────────────────────────────
// SCHEMA — JSON-LD structured data generators.
//
// USAGE in a page:
//   import { JsonLd, generateWebApplicationSchema } from "app/components/seo/JsonLd";
//   import { webPageSchema, organizationSchema } from "lib/schema";
//
//   <JsonLd schema={generateWebApplicationSchema(tool)} />
//   <JsonLd schema={organizationSchema()} />
// ─────────────────────────────────────────────────────────────────────────────

import type { ToolMeta } from "./tool-registry";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.clyrosoft.com";

const SITE_NAME = "ClyroSoft";

// ─── Base ─────────────────────────────────────────────────────────────────────

/** Wraps any schema object with @context */
export function withContext(schema: Record<string, unknown>) {
  return { "@context": "https://schema.org", ...schema };
}

// ─── Organization ─────────────────────────────────────────────────────────────

export function organizationSchema() {
  return withContext({
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/clr-logo.png`,
    },
    sameAs: [
      "https://www.linkedin.com/company/clyrosoft",
      "https://twitter.com/clyrosoft",
      "https://www.instagram.com/clyrosoft",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: `${SITE_URL}/contact-us`,
    },
  });
}

// ─── Website ──────────────────────────────────────────────────────────────────

export function websiteSchema() {
  return withContext({
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  });
}

// ─── Web Application (Tool Pages) ────────────────────────────────────────────

/**
 * Full schema for a tool page.
 * Includes the WebPage wrapper + the tool's own schema from the registry.
 */
export function generateWebApplicationSchema(tool: ToolMeta) {
  return withContext({
    "@type": "WebPage",
    name: tool.name,
    description: tool.description,
    url: `${SITE_URL}${tool.slug}`,
    breadcrumb: breadcrumbSchema([
      { name: "Home", slug: "/" },
      { name: categoryLabel(tool.category), slug: `/${tool.category}s` },
      { name: tool.name, slug: tool.slug },
    ]),
    mainEntity: {
      ...tool.schema(),
      name: tool.name,
      description: tool.description,
      url: `${SITE_URL}${tool.slug}`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  });
}

// ─── Article ──────────────────────────────────────────────────────────────────

export type ArticleSchemaOptions = {
  title: string;
  description: string;
  slug: string;
  publishedAt: string; // ISO 8601
  updatedAt?: string;
  authorName?: string;
  imageUrl?: string;
};

export function articleSchema(opts: ArticleSchemaOptions) {
  return withContext({
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: `${SITE_URL}${opts.slug}`,
    datePublished: opts.publishedAt,
    dateModified: opts.updatedAt ?? opts.publishedAt,
    author: {
      "@type": "Person",
      name: opts.authorName ?? SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/clr-logo.png`,
      },
    },
    image: opts.imageUrl
      ? { "@type": "ImageObject", url: opts.imageUrl }
      : undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${opts.slug}`,
    },
  });
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * FAQ schema — great for tool pages to capture "People Also Ask" in SERPs.
 *
 * @example
 * <JsonLd schema={faqSchema([
 *   { question: "How is age calculated?", answer: "Age is calculated from..." },
 * ])} />
 */
export function faqSchema(faqs: FaqItem[]) {
  return withContext({
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  });
}

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

export type BreadcrumbItem = {
  name: string;
  slug: string;
};

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.slug}`,
    })),
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function categoryLabel(category: ToolMeta["category"]): string {
  const labels: Record<ToolMeta["category"], string> = {
    calculator: "Calculators",
    generator: "Generators",
    converter: "Converters",
    "ai-tool": "AI Tools",
    regional: "Regional Tools",
    finance: "Finance Tools",
    student: "Student Tools",
    health: "Health Tools",
  };
  return labels[category] ?? "Tools";
}
