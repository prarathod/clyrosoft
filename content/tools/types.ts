// ─────────────────────────────────────────────────────────────────────────────
// TOOL CONTENT TYPES
//
// Every tool has a matching content file at content/tools/[tool-id].ts
// The content drives: SEO text, FAQs (JSON-LD + display), how-to guide.
//
// NOTE: This is plain TypeScript, not MDX.
// Advantage: zero extra packages, full type safety, fast iteration.
// Upgrade path: swap the content files for MDX when you have 50+ tools
// and want non-developer content editing.
// ─────────────────────────────────────────────────────────────────────────────

export type FaqItem = {
  question: string;
  /** Plain text — no JSX. Used for both display and JSON-LD schema. */
  answer: string;
};

export type HowToStep = {
  step: number;
  title: string;
  description: string;
};

/**
 * A programmatic SEO variant of a tool.
 *
 * Example: pension-calculator has variants for "karnataka", "teachers", etc.
 * Each variant gets its own route, metadata, and FAQ set.
 */
export type ToolVariant = {
  /** URL slug — becomes /[category]/[tool]/[variant] */
  slug: string;
  /** Display name used in headings */
  label: string;
  /** Full page title for this variant */
  title: string;
  /** 140–160 char meta description */
  description: string;
  /** Keywords targeting this specific variant */
  keywords: string[];
  /** Override FAQs for this variant */
  faqs?: FaqItem[];
};

export type ToolContent = {
  /**
   * 2-4 sentence SEO intro rendered below the tool.
   * Must include the primary keyword naturally in the first sentence.
   */
  intro: string;

  /**
   * Step-by-step usage guide — rendered as a numbered list.
   * Targets "how to use [tool name]" queries and featured snippets.
   */
  howToUse: HowToStep[];

  /**
   * FAQ items — rendered in the FAQ section AND used to generate FAQ JSON-LD.
   * Target "People Also Ask" boxes in Google.
   * Aim for 4-6 questions per tool.
   */
  faqs: FaqItem[];

  /**
   * Optional programmatic SEO variants.
   * Leave empty until the base tool is ranking, then add variants.
   */
  variants?: ToolVariant[];

  /**
   * Optional affiliate or partner CTA text shown below the tool.
   * Example: "Need help with retirement planning? Talk to an expert."
   */
  affiliateCta?: {
    text: string;
    buttonLabel: string;
    href: string;
  };
};
