// ─────────────────────────────────────────────────────────────────────────────
// BLOG REGISTRY — metadata for every published article/blog post.
//
// HOW TO ADD A NEW POST:
//   1. Add a BlogMeta entry here.
//   2. Create the article content (MDX or data file) in content/blog/.
//   3. Add relatedToolIds to point traffic back to tools.
//
// Internal linking strategy:
//   - Each blog post links to 1-3 tools via relatedToolIds.
//   - Each tool links to 2-3 blog posts via relatedPostIds (add to ToolMeta).
//   - Category pages link to both tools and posts in that category.
// ─────────────────────────────────────────────────────────────────────────────

export type BlogMeta = {
  id: string;
  title: string;
  /** Full path from root, e.g. "/articles/how-to-calculate-age" */
  slug: string;
  /** 140–160 chars */
  excerpt: string;
  /** ISO date string */
  publishedAt: string;
  /** Drives related tools suggestions and internal links */
  relatedToolIds: string[];
  /** Optional cover image path under /public */
  coverImage?: string;
  /** Category tag for the blog post */
  category?: string;
};

export const blogRegistry: BlogMeta[] = [
  {
    id: "how-to-calculate-age",
    title: "How to Calculate Your Exact Age — A Complete Guide",
    slug: "/articles/how-to-calculate-age",
    excerpt:
      "Learn how age is calculated mathematically, including how leap years affect the result. Includes examples and a free online calculator.",
    publishedAt: "2025-01-10",
    relatedToolIds: ["age-calculator"],
    coverImage: "/articles/article-1.png",
    category: "Calculators",
  },
  {
    id: "retirement-planning-india",
    title: "Retirement Planning in India: How Much Pension Will You Get?",
    slug: "/articles/retirement-planning-india",
    excerpt:
      "A practical guide to understanding pension systems in India — Old Pension Scheme, NPS, and EPFO. With a free pension calculator.",
    publishedAt: "2025-01-15",
    relatedToolIds: ["pension-calculator", "age-calculator"],
    coverImage: "/articles/article-2.png",
    category: "Finance",
  },
  {
    id: "marathi-biodata-format",
    title: "Marathi Marriage Biodata Format 2024 — Complete Guide",
    slug: "/articles/marathi-biodata-format",
    excerpt:
      "Everything you need to know about creating a Marathi marriage biodata: format, content, and how to make it stand out.",
    publishedAt: "2025-01-20",
    relatedToolIds: ["marathi-biodata", "invitation-generator"],
    coverImage: "/articles/article-3.png",
    category: "Regional",
  },
  {
    id: "attendance-rules-india",
    title: "Minimum Attendance Rules for Indian Colleges — Complete List",
    slug: "/articles/attendance-rules-india",
    excerpt:
      "UGC mandates 75% attendance for Indian college students. Learn the rules, exceptions, and how to calculate your current percentage.",
    publishedAt: "2025-02-01",
    relatedToolIds: ["attendance-calculator"],
    coverImage: "/articles/article-4.png",
    category: "Student",
  },
  {
    id: "home-loan-emi-guide",
    title: "Home Loan EMI in India: How It's Calculated and How to Reduce It",
    slug: "/articles/home-loan-emi-guide",
    excerpt:
      "A complete guide to understanding your home loan EMI — how banks calculate it, how prepayment reduces interest, and how to negotiate a better rate.",
    publishedAt: "2025-02-10",
    relatedToolIds: ["emi-calculator"],
    coverImage: "/articles/emi-guide.png",
    category: "Finance",
  },
  {
    id: "sip-vs-lump-sum",
    title: "SIP vs Lump Sum Investment: Which is Better for Indian Investors?",
    slug: "/articles/sip-vs-lump-sum",
    excerpt:
      "A data-driven comparison of SIP and lump sum mutual fund investing. Includes historical return analysis and a free SIP calculator to run your own numbers.",
    publishedAt: "2025-02-20",
    relatedToolIds: ["sip-calculator"],
    coverImage: "/articles/sip-guide.png",
    category: "Finance",
  },
  {
    id: "gratuity-eligibility-india",
    title: "Gratuity Rules in India: Who is Eligible and How Much Will You Get?",
    slug: "/articles/gratuity-eligibility-india",
    excerpt:
      "Everything about the Payment of Gratuity Act — who qualifies, how the amount is calculated, the tax-exempt limit, and what happens if you leave before 5 years.",
    publishedAt: "2025-03-05",
    relatedToolIds: ["gratuity-calculator"],
    coverImage: "/articles/gratuity-guide.png",
    category: "Finance",
  },
  {
    id: "retire-early-india",
    title: "How to Retire Early in India: The FIRE Calculator Guide",
    slug: "/articles/retire-early-india",
    excerpt:
      "A practical guide to the FIRE movement for Indian investors — how much corpus you need, which investments to use, and how to calculate your FIRE number.",
    publishedAt: "2025-03-15",
    relatedToolIds: ["retirement-calculator", "sip-calculator"],
    coverImage: "/articles/retirement-guide.png",
    category: "Finance",
  },
];

// ─── Query Helpers ────────────────────────────────────────────────────────────

export function getBlogById(id: string): BlogMeta | undefined {
  return blogRegistry.find((b) => b.id === id);
}

/**
 * Returns blog posts that reference a given toolId in their relatedToolIds.
 * Used by ToolLayout to show "Related Articles" below a tool.
 */
export function getBlogsByToolId(toolId: string): BlogMeta[] {
  return blogRegistry.filter((b) => b.relatedToolIds.includes(toolId));
}

export function getBlogsByCategory(category: string): BlogMeta[] {
  return blogRegistry.filter((b) => b.category === category);
}

export function getRecentPosts(limit = 5): BlogMeta[] {
  return [...blogRegistry]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit);
}
