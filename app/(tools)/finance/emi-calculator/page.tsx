import type { Metadata } from "next";
import { getToolById } from "lib/tool-registry";
import { generateToolMetadata } from "lib/metadata";
import { generateWebApplicationSchema, faqSchema, breadcrumbSchema } from "lib/schema";
import { JsonLd } from "app/components/seo/JsonLd";
import ToolLayout from "app/components/tools/ToolLayout";
import EmiCalculator from "./EmiCalculator";
import emiCalculatorContent from "content/tools/emi-calculator";

const tool = getToolById("emi-calculator")!;

export const metadata: Metadata = generateToolMetadata(tool);

export default function EmiCalculatorPage() {
  return (
    <>
      <JsonLd schema={generateWebApplicationSchema(tool)} />
      <JsonLd schema={faqSchema(emiCalculatorContent.faqs)} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", slug: "/" },
          { name: "Finance Calculators", slug: "/finance" },
          { name: tool.name, slug: tool.slug },
        ])}
      />
      <ToolLayout
        tool={tool}
        content={emiCalculatorContent}
        adsEnabled={false}
      >
        <EmiCalculator />
      </ToolLayout>
    </>
  );
}
