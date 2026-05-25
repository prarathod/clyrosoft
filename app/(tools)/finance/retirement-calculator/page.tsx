import type { Metadata } from "next";
import { getToolById } from "lib/tool-registry";
import { generateToolMetadata } from "lib/metadata";
import { generateWebApplicationSchema, faqSchema, breadcrumbSchema } from "lib/schema";
import { JsonLd } from "app/components/seo/JsonLd";
import ToolLayout from "app/components/tools/ToolLayout";
import RetirementCalculator from "./RetirementCalculator";
import retirementCalculatorContent from "content/tools/retirement-calculator";

const tool = getToolById("retirement-calculator")!;

export const metadata: Metadata = generateToolMetadata(tool);

export default function RetirementCalculatorPage() {
  return (
    <>
      <JsonLd schema={generateWebApplicationSchema(tool)} />
      <JsonLd schema={faqSchema(retirementCalculatorContent.faqs)} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", slug: "/" },
          { name: "Finance Calculators", slug: "/finance" },
          { name: tool.name, slug: tool.slug },
        ])}
      />
      <ToolLayout
        tool={tool}
        content={retirementCalculatorContent}
        adsEnabled={false}
      >
        <RetirementCalculator />
      </ToolLayout>
    </>
  );
}
