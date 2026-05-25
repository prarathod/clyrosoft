// ─────────────────────────────────────────────────────────────────────────────
// METADATA — single source for all Next.js Metadata objects.
//
// USAGE:
//   Tool page:    export const metadata = generateToolMetadata(tool);
//   Static page:  export const metadata = generatePageMetadata({ ... });
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import type { ToolMeta } from "./tool-registry";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.clyrosoft.com";

const SITE_NAME = "ClyroSoft";

const DEFAULT_OG_IMAGE = `${SITE_URL}/og/default.png`;

// ─── Tool Pages ───────────────────────────────────────────────────────────────

/**
 * Generates full Metadata for a tool page from its registry entry.
 * Call once per tool — no manual title/description writing needed.
 *
 * @example
 * // app/(tools)/calculators/age-calculator/page.tsx
 * import { getToolById } from "lib/tool-registry";
 * import { generateToolMetadata } from "lib/metadata";
 * const tool = getToolById("age-calculator")!;
 * export const metadata = generateToolMetadata(tool);
 */
export function generateToolMetadata(tool: ToolMeta): Metadata {
  const canonicalUrl = `${SITE_URL}${tool.slug}`;
  // OG images live at /public/og/tools/[tool-id].png
  // Generate them with Vercel OG (@vercel/og) later, or use static PNGs.
  const ogImage = `${SITE_URL}/og/tools/${tool.id}.png`;

  return {
    title: `${tool.name} — Free Online Tool | ${SITE_NAME}`,
    description: tool.description,
    keywords: tool.keywords,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${tool.name} — Free Online Tool`,
      description: tool.description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${tool.name} — ${tool.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.name} — Free Online Tool`,
      description: tool.description,
      images: [ogImage],
      creator: "@clyrosoft",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// ─── Static / Marketing Pages ─────────────────────────────────────────────────

export type PageMetadataOptions = {
  title: string;
  /** 140–160 chars */
  description: string;
  /** e.g. "/about-us" */
  slug: string;
  keywords?: string[];
  /** Falls back to DEFAULT_OG_IMAGE */
  ogImage?: string;
  /** Defaults to "website" */
  ogType?: "website" | "article";
};

/**
 * Generates Metadata for non-tool pages (home, about, services, etc.)
 *
 * @example
 * export const metadata = generatePageMetadata({
 *   title: "About Us",
 *   description: "Learn about ClyroSoft and our mission.",
 *   slug: "/about-us",
 * });
 */
export function generatePageMetadata(opts: PageMetadataOptions): Metadata {
  const canonicalUrl = `${SITE_URL}${opts.slug}`;
  const image = opts.ogImage ?? DEFAULT_OG_IMAGE;

  return {
    title: `${opts.title} | ${SITE_NAME}`,
    description: opts.description,
    keywords: opts.keywords,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: opts.ogType ?? "website",
      locale: "en_IN",
      images: [{ url: image, width: 1200, height: 630, alt: opts.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ─── Site-wide defaults (used in root layout) ────────────────────────────────

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Free Online Utility Tools`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Free online utility tools — calculators, generators, converters, and AI tools. Built for everyday use.",
  keywords: [
    "free online tools",
    "utility tools",
    "online calculator",
    "online generator",
    "clyrosoft tools",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Free Online Utility Tools`,
    description:
      "Free online utility tools — calculators, generators, converters, and AI tools.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@clyrosoft",
    site: "@clyrosoft",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};
