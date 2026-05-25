// Server component — master orchestrator for every tool page.
//
// SECTION ORDER (SEO-optimal, matches top utility sites like calculator.net):
//
//   1. ToolHero         — H1, description, badges, breadcrumbs
//   2. ToolAds zone=banner-top  — Leaderboard below hero (disabled until AdSense)
//   3. [children]       — The interactive tool (form + result) — MUST be above fold
//   4. ToolShare        — Share buttons after result = highest share intent
//   5. ToolAds zone=in-content  — Rectangle ad between tool and content
//   6. ToolContent      — About + How-to + Variants (SEO long-form)
//   7. ToolFAQ          — FAQ accordion (People Also Ask targeting)
//   8. RelatedTools     — Internal links to similar tools
//   9. RelatedBlogs     — Internal links to supporting articles
//  10. ToolCTA          — Final conversion / explore more tools
//  11. ToolAds zone=banner-bottom — Bottom leaderboard
//
// WHY THIS ORDER:
//   - Tool is above the fold → users immediately engage (reduces bounce)
//   - Share appears right after result → highest conversion moment
//   - Content and FAQ come AFTER tool → users read them on scroll
//   - Related tools + blogs → keeps users on site, distributes PageRank
//   - CTA last → final net before the user leaves

import type { ReactNode } from "react";
import type { ToolMeta } from "lib/tool-registry";
import type { ToolContent as ToolContentType } from "content/tools/types";
import { getRelatedTools } from "lib/tool-registry";
import { getBlogsByToolId } from "lib/blog-registry";

import ToolHero from "./ToolHero";
import ToolAds from "./ToolAds";
import ToolShare from "./ToolShare";
import ToolContent from "./ToolContent";
import ToolFAQ from "./ToolFAQ";
import RelatedTools from "./RelatedTools";
import RelatedBlogs from "./RelatedBlogs";
import ToolCTA from "./ToolCTA";

type Props = {
  tool: ToolMeta;
  /** Content from content/tools/[tool-id].ts — drives SEO text, FAQs, how-to guide */
  content?: ToolContentType;
  /** The interactive tool component (AgeCalculator, PensionCalculator, etc.) */
  children: ReactNode;
  /**
   * Overrides for programmatic SEO variant pages.
   * Example: pension-calculator/karnataka overrides title + description.
   */
  override?: {
    title?: string;
    description?: string;
  };
  /** Set true to activate ad zones after AdSense approval */
  adsEnabled?: boolean;
  /** Your WhatsApp channel invite link */
  whatsappHref?: string;
};

export default function ToolLayout({
  tool,
  content,
  children,
  override,
  adsEnabled = false,
  whatsappHref,
}: Props) {
  const relatedTools = getRelatedTools(tool.id);
  const relatedPosts = getBlogsByToolId(tool.id);

  // Use variant FAQs if an override is active and the content has variant data,
  // otherwise use the base FAQs from content.
  const displayFaqs = content?.faqs ?? [];

  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      {/* 1. Hero — H1, description, breadcrumbs, badges */}
      <ToolHero
        tool={tool}
        titleOverride={override?.title}
        descriptionOverride={override?.description}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* 2. Top ad — below hero, before tool (disabled by default) */}
        <ToolAds zone="banner-top" disabled={!adsEnabled} />

        {/* 3. Tool — interactive component, always above fold on desktop */}
        <div className="mt-6">{children}</div>

        {/* 4. Share — directly after tool result */}
        <ToolShare
          title={`Try this free ${tool.name} — instant results, no sign-up`}
          whatsappChannelHref={whatsappHref}
        />

        {/* 5. In-content ad — between tool and educational content */}
        <ToolAds zone="in-content" disabled={!adsEnabled} />

        {/* 6. SEO content — about + how-to + variants */}
        {content && <ToolContent content={content} toolName={tool.name} />}

        {/* 7. FAQ — People Also Ask targeting */}
        {displayFaqs.length > 0 && <ToolFAQ faqs={displayFaqs} />}

        {/* 8. Related tools — internal linking for SEO authority */}
        {relatedTools.length > 0 && (
          <div className="mt-8">
            <RelatedTools tools={relatedTools} />
          </div>
        )}

        {/* 9. Related blog posts — topic cluster internal linking */}
        {relatedPosts.length > 0 && (
          <RelatedBlogs posts={relatedPosts} />
        )}

        {/* 10. CTA — final conversion point */}
        <ToolCTA whatsappHref={whatsappHref} />

        {/* 11. Bottom ad — passive income before footer */}
        <ToolAds zone="banner-bottom" disabled={!adsEnabled} />
      </div>
    </main>
  );
}
