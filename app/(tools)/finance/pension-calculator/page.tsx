// Base pension calculator page — /finance/pension-calculator
// Variant pages are at /finance/pension-calculator/[variant]

import type { Metadata } from "next";
import { getToolById } from "lib/tool-registry";
import { generateToolMetadata } from "lib/metadata";
import { generateWebApplicationSchema, faqSchema, breadcrumbSchema } from "lib/schema";
import { JsonLd } from "app/components/seo/JsonLd";
import ToolLayout from "app/components/tools/ToolLayout";
import pensionContent from "content/tools/pension-calculator";

const tool = getToolById("pension-calculator")!;

export const metadata: Metadata = generateToolMetadata(tool);

// Placeholder — replace with real PensionCalculator component
function PensionCalculatorPlaceholder() {
  return (
    <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-8 text-center text-gray-400">
      <p className="font-medium">Pension Calculator — coming soon</p>
      <p className="text-sm mt-1">
        Build <code>PensionCalculator.tsx</code> and <code>logic.ts</code> in this folder.
      </p>
    </div>
  );
}

export default function PensionCalculatorPage() {
  return (
    <>
      <JsonLd schema={generateWebApplicationSchema(tool)} />
      <JsonLd schema={faqSchema(pensionContent.faqs)} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", slug: "/" },
          { name: "Finance Tools", slug: "/finance" },
          { name: tool.name, slug: tool.slug },
        ])}
      />

      <ToolLayout
        tool={tool}
        content={pensionContent}
        adsEnabled={false}
      >
        <PensionCalculatorPlaceholder />
      </ToolLayout>
    </>
  );
}
