import type { Metadata } from "next";
import { getToolById } from "lib/tool-registry";
import { generateToolMetadata } from "lib/metadata";
import { generateWebApplicationSchema, faqSchema, breadcrumbSchema } from "lib/schema";
import { JsonLd } from "app/components/seo/JsonLd";
import ToolLayout from "app/components/tools/ToolLayout";
import GratuityCalculator from "./GratuityCalculator";
import gratuityCalculatorContent from "content/tools/gratuity-calculator";

const tool = getToolById("gratuity-calculator")!;

export const metadata: Metadata = generateToolMetadata(tool);

export default function GratuityCalculatorPage() {
  return (
    <>
      <JsonLd schema={generateWebApplicationSchema(tool)} />
      <JsonLd schema={faqSchema(gratuityCalculatorContent.faqs)} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", slug: "/" },
          { name: "Finance Calculators", slug: "/finance" },
          { name: tool.name, slug: tool.slug },
        ])}
      />
      <ToolLayout
        tool={tool}
        content={gratuityCalculatorContent}
        adsEnabled={false}
      >
        <GratuityCalculator />
      </ToolLayout>
    </>
  );
}
