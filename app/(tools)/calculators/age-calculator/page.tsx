// ─────────────────────────────────────────────────────────────────────────────
// AGE CALCULATOR PAGE — reference implementation for the universal tool pattern.
//
// THIS FILE IS THE TEMPLATE. Copy it for every new tool and change 3 things:
//   1. The toolId passed to getToolById()
//   2. The content import (from content/tools/[tool-id])
//   3. The tool component import ([ToolName])
//
// Everything else — metadata, schema, layout, FAQs, related tools, related blogs,
// share buttons, CTA — is AUTOMATIC from the registry and content file.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import { getToolById } from "lib/tool-registry";
import { generateToolMetadata } from "lib/metadata";
import { generateWebApplicationSchema, faqSchema, breadcrumbSchema } from "lib/schema";
import { JsonLd } from "app/components/seo/JsonLd";
import ToolLayout from "app/components/tools/ToolLayout";
import AgeCalculator from "./AgeCalculator";
import ageCalculatorContent from "content/tools/age-calculator";

// ─── 1. Tool reference — the single source of truth ──────────────────────────
const tool = getToolById("age-calculator")!;

// ─── 2. Metadata — fully auto-generated from registry ─────────────────────────
export const metadata: Metadata = generateToolMetadata(tool);

// ─── 3. Page ──────────────────────────────────────────────────────────────────
export default function AgeCalculatorPage() {
  return (
    <>
      {/*
        JSON-LD structured data — injected into <head> by Next.js.
        Targets: Rich results, WebApplication entity, FAQ boxes, breadcrumbs.
      */}
      <JsonLd schema={generateWebApplicationSchema(tool)} />
      <JsonLd schema={faqSchema(ageCalculatorContent.faqs)} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", slug: "/" },
          { name: "Calculators", slug: "/calculators" },
          { name: tool.name, slug: tool.slug },
        ])}
      />

      {/*
        ToolLayout handles the full page structure:
        Hero → Ads → Tool → Share → Content → FAQ → Related Tools →
        Related Blogs → CTA → Ads

        Pass `content` from the tool's content file.
        Pass `adsEnabled={true}` after AdSense approval.
        Pass `whatsappHref` when you have a WhatsApp channel.
      */}
      <ToolLayout
        tool={tool}
        content={ageCalculatorContent}
        adsEnabled={false}
        // whatsappHref="https://whatsapp.com/channel/your-channel-id"
      >
        <AgeCalculator />
      </ToolLayout>
    </>
  );
}
