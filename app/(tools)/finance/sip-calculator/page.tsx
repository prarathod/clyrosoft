import type { Metadata } from "next";
import { getToolById } from "lib/tool-registry";
import { generateToolMetadata } from "lib/metadata";
import { generateWebApplicationSchema, faqSchema, breadcrumbSchema } from "lib/schema";
import { JsonLd } from "app/components/seo/JsonLd";
import ToolLayout from "app/components/tools/ToolLayout";
import SipCalculator from "./SipCalculator";
import sipCalculatorContent from "content/tools/sip-calculator";

const tool = getToolById("sip-calculator")!;

export const metadata: Metadata = generateToolMetadata(tool);

export default function SipCalculatorPage() {
  return (
    <>
      <JsonLd schema={generateWebApplicationSchema(tool)} />
      <JsonLd schema={faqSchema(sipCalculatorContent.faqs)} />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", slug: "/" },
          { name: "Finance Calculators", slug: "/finance" },
          { name: tool.name, slug: tool.slug },
        ])}
      />
      <ToolLayout
        tool={tool}
        content={sipCalculatorContent}
        adsEnabled={false}
      >
        <SipCalculator />
      </ToolLayout>
    </>
  );
}
