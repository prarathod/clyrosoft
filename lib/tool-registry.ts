// ─────────────────────────────────────────────────────────────────────────────
// TOOL REGISTRY — central source of truth for every utility tool on the site.
//
// HOW TO ADD A NEW TOOL:
//   1. Add a ToolMeta entry to `toolRegistry` below.
//   2. Create the route at app/(tools)/[category]/[tool-slug]/
//   3. Everything else (sitemap, metadata, schema, internal links) is automatic.
// ─────────────────────────────────────────────────────────────────────────────

// ─── Types ───────────────────────────────────────────────────────────────────

export type ToolCategory =
  | "calculator"
  | "generator"
  | "converter"
  | "ai-tool"
  | "regional"
  | "finance"
  | "student"
  | "health";

export type ToolMeta = {
  /** Unique stable ID — never change once published (used in URLs, OG images, analytics) */
  id: string;
  /** Display name shown in headings, cards, and <title> */
  name: string;
  /** Full path from root, e.g. "/calculators/age-calculator" */
  slug: string;
  /** Primary category — drives routing and category index pages */
  category: ToolCategory;
  /** One-line hook used in cards and the tools directory */
  tagline: string;
  /** 140–160 chars — used as meta description and OG description */
  description: string;
  /** Primary keywords for this tool — first item is the main target keyword */
  keywords: string[];
  /** IDs of related tools — drives the RelatedTools component and internal links */
  relatedToolIds: string[];
  /** True if this tool calls an AI API */
  isAI: boolean;
  /** True if tool is behind a paywall */
  isPremium: boolean;
  /** Show "New" badge — set to false after 30 days */
  isNew?: boolean;
  /** Show on homepage featured section */
  isFeatured?: boolean;
  /**
   * Returns the tool-specific JSON-LD object (WITHOUT @context or @type:WebPage wrapper).
   * lib/schema.ts wraps this inside a full WebPage + WebApplication schema.
   */
  schema: () => Record<string, unknown>;
};

// ─── Registry ────────────────────────────────────────────────────────────────

export const toolRegistry: ToolMeta[] = [
  // ── Calculators ────────────────────────────────────────────────────────────
  {
    id: "age-calculator",
    name: "Age Calculator",
    slug: "/calculators/age-calculator",
    category: "calculator",
    tagline: "Find your exact age in seconds",
    description:
      "Free online age calculator. Instantly find your exact age in years, months, days, hours, and minutes from your date of birth.",
    keywords: [
      "age calculator",
      "how old am i",
      "date of birth calculator",
      "age finder online",
      "calculate my age",
    ],
    relatedToolIds: ["pension-calculator", "attendance-calculator"],
    isAI: false,
    isPremium: false,
    isFeatured: true,
    isNew: false,
    schema: () => ({
      "@type": "WebApplication",
      name: "Age Calculator",
      applicationCategory: "UtilityApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    }),
  },
  {
    id: "attendance-calculator",
    name: "Attendance Calculator",
    slug: "/calculators/attendance-calculator",
    category: "student",
    tagline: "Track your attendance percentage instantly",
    description:
      "Free attendance calculator for students. Calculate your attendance percentage and find how many classes you can miss while staying above the required limit.",
    keywords: [
      "attendance calculator",
      "attendance percentage calculator",
      "how many classes can i miss",
      "student attendance tracker",
    ],
    relatedToolIds: ["age-calculator"],
    isAI: false,
    isPremium: false,
    isFeatured: false,
    isNew: true,
    schema: () => ({
      "@type": "WebApplication",
      name: "Attendance Calculator",
      applicationCategory: "EducationApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    }),
  },

  // ── Finance ────────────────────────────────────────────────────────────────
  {
    id: "emi-calculator",
    name: "EMI Calculator",
    slug: "/finance/emi-calculator",
    category: "finance",
    tagline: "Calculate your loan EMI in seconds",
    description:
      "Free EMI calculator for home loans, car loans, and personal loans. Get your exact monthly EMI, total interest payable, and full amortization schedule instantly.",
    keywords: [
      "emi calculator",
      "loan emi calculator",
      "home loan emi calculator",
      "car loan emi calculator",
      "personal loan emi calculator",
      "emi calculation formula india",
    ],
    relatedToolIds: ["sip-calculator", "gratuity-calculator", "pension-calculator"],
    isAI: false,
    isPremium: false,
    isFeatured: true,
    isNew: false,
    schema: () => ({
      "@type": "WebApplication",
      name: "EMI Calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    }),
  },
  {
    id: "sip-calculator",
    name: "SIP Calculator",
    slug: "/finance/sip-calculator",
    category: "finance",
    tagline: "See how your SIP investment grows",
    description:
      "Free SIP calculator. Find out how much wealth your monthly SIP investments will build over time. Calculate returns, total corpus, and year-by-year growth.",
    keywords: [
      "sip calculator",
      "sip return calculator",
      "mutual fund sip calculator",
      "monthly sip calculator",
      "sip investment calculator india",
      "sip maturity calculator",
    ],
    relatedToolIds: ["emi-calculator", "retirement-calculator", "pension-calculator"],
    isAI: false,
    isPremium: false,
    isFeatured: true,
    isNew: false,
    schema: () => ({
      "@type": "WebApplication",
      name: "SIP Calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    }),
  },
  {
    id: "gratuity-calculator",
    name: "Gratuity Calculator",
    slug: "/finance/gratuity-calculator",
    category: "finance",
    tagline: "Calculate your gratuity payout instantly",
    description:
      "Free gratuity calculator for India. Calculate your gratuity amount as per the Payment of Gratuity Act. Know your exact payout before leaving a job.",
    keywords: [
      "gratuity calculator",
      "gratuity calculation india",
      "gratuity amount calculator",
      "how to calculate gratuity",
      "gratuity calculator for private employees",
      "payment of gratuity act calculator",
    ],
    relatedToolIds: ["pension-calculator", "emi-calculator", "retirement-calculator"],
    isAI: false,
    isPremium: false,
    isFeatured: false,
    isNew: false,
    schema: () => ({
      "@type": "WebApplication",
      name: "Gratuity Calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    }),
  },
  {
    id: "pension-calculator",
    name: "Pension Calculator",
    slug: "/finance/pension-calculator",
    category: "finance",
    tagline: "Plan your retirement with clarity",
    description:
      "Free online pension calculator. Estimate your retirement corpus, monthly pension amount, and plan your financial future with our easy-to-use tool.",
    keywords: [
      "pension calculator",
      "retirement calculator india",
      "retirement corpus calculator",
      "pension fund calculator",
      "monthly pension calculator",
    ],
    relatedToolIds: ["emi-calculator", "sip-calculator", "gratuity-calculator"],
    isAI: false,
    isPremium: false,
    isFeatured: true,
    isNew: false,
    schema: () => ({
      "@type": "WebApplication",
      name: "Pension Calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    }),
  },
  {
    id: "retirement-calculator",
    name: "Retirement Calculator",
    slug: "/finance/retirement-calculator",
    category: "finance",
    tagline: "Find out if you are on track to retire",
    description:
      "Free retirement planning calculator. Enter your current savings, monthly contributions, and expected return to see if you can retire comfortably on your target date.",
    keywords: [
      "retirement calculator india",
      "retirement planning calculator",
      "retirement corpus calculator",
      "how much to save for retirement",
      "retirement savings calculator",
    ],
    relatedToolIds: ["sip-calculator", "pension-calculator", "gratuity-calculator"],
    isAI: false,
    isPremium: false,
    isFeatured: false,
    isNew: true,
    schema: () => ({
      "@type": "WebApplication",
      name: "Retirement Calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    }),
  },

  // ── Generators ─────────────────────────────────────────────────────────────
  {
    id: "marathi-biodata",
    name: "Marathi Biodata Maker",
    slug: "/generators/marathi-biodata",
    category: "regional",
    tagline: "Create your marriage biodata in Marathi",
    description:
      "Free Marathi marriage biodata maker. Create a professional marriage biodata in Marathi language. Fill the form, preview, and download as PDF instantly.",
    keywords: [
      "marathi biodata",
      "marathi marriage biodata",
      "biodata in marathi language",
      "marriage biodata maker marathi",
      "lagna patrika marathi",
    ],
    relatedToolIds: ["invitation-generator"],
    isAI: false,
    isPremium: false,
    isFeatured: true,
    isNew: false,
    schema: () => ({
      "@type": "WebApplication",
      name: "Marathi Biodata Maker",
      applicationCategory: "UtilityApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    }),
  },
  {
    id: "invitation-generator",
    name: "Invitation Card Generator",
    slug: "/generators/invitation-card",
    category: "generator",
    tagline: "Create beautiful invitation cards free",
    description:
      "Free online invitation card generator. Design stunning wedding, birthday, and event invitation cards. Download as high-resolution image or PDF instantly.",
    keywords: [
      "invitation card maker",
      "free invitation card generator",
      "online invitation maker",
      "wedding invitation card creator",
      "birthday invitation maker",
    ],
    relatedToolIds: ["marathi-biodata"],
    isAI: false,
    isPremium: false,
    isFeatured: false,
    isNew: true,
    schema: () => ({
      "@type": "WebApplication",
      name: "Invitation Card Generator",
      applicationCategory: "UtilityApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    }),
  },

  // ── AI Tools ───────────────────────────────────────────────────────────────
  {
    id: "ai-love-letter",
    name: "AI Love Letter Generator",
    slug: "/ai-tools/love-letter-generator",
    category: "ai-tool",
    tagline: "Write heartfelt love letters with AI",
    description:
      "AI-powered love letter generator. Create personalized, heartfelt love letters in seconds. Describe your feelings, pick a tone, and let AI write for you.",
    keywords: [
      "ai love letter generator",
      "love letter writer",
      "ai letter generator",
      "romantic letter generator",
      "write love letter online",
    ],
    relatedToolIds: ["invitation-generator"],
    isAI: true,
    isPremium: false,
    isFeatured: false,
    isNew: true,
    schema: () => ({
      "@type": "WebApplication",
      name: "AI Love Letter Generator",
      applicationCategory: "UtilityApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    }),
  },
];

// ─── Query Helpers ────────────────────────────────────────────────────────────
// Keep these pure functions — no React, no side effects.

export function getToolById(id: string): ToolMeta | undefined {
  return toolRegistry.find((t) => t.id === id);
}

export function getToolBySlug(slug: string): ToolMeta | undefined {
  return toolRegistry.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: ToolCategory): ToolMeta[] {
  return toolRegistry.filter((t) => t.category === category);
}

/**
 * Returns full ToolMeta objects for the relatedToolIds of a given tool.
 * Safe — silently ignores IDs that don't exist yet.
 */
export function getRelatedTools(toolId: string): ToolMeta[] {
  const tool = getToolById(toolId);
  if (!tool) return [];
  return tool.relatedToolIds
    .map((id) => getToolById(id))
    .filter((t): t is ToolMeta => t !== undefined);
}

export function getFeaturedTools(): ToolMeta[] {
  return toolRegistry.filter((t) => t.isFeatured);
}

/** Used by app/sitemap.ts to auto-include all tool routes */
export function getAllToolSlugs(): string[] {
  return toolRegistry.map((t) => t.slug);
}

/** All unique categories present in the registry */
export function getAllCategories(): ToolCategory[] {
  return [...new Set(toolRegistry.map((t) => t.category))];
}
