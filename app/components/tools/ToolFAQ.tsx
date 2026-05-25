// Server component — FAQ section rendered as native <details>/<summary>.
//
// SEO role:     FAQ content targets "People Also Ask" SERP boxes and featured snippets.
//               The JSON-LD FAQ schema (injected in page.tsx) uses the same data.
//               <details>/<summary> renders fully without JavaScript — critical for SEO crawlers.
// UX role:      Users get quick answers without scrolling away from the tool.
// Performance:  Zero JavaScript. Pure HTML + Tailwind.

import type { FaqItem } from "content/tools/types";

type Props = {
  faqs: FaqItem[];
  heading?: string;
};

export default function ToolFAQ({ faqs, heading = "Frequently Asked Questions" }: Props) {
  if (faqs.length === 0) return null;

  return (
    <section
      aria-label="Frequently Asked Questions"
      className="mt-8 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
    >
      {/* Section header */}
      <div className="px-6 sm:px-8 py-5 border-b border-gray-100 bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-900">{heading}</h2>
        <p className="mt-0.5 text-sm text-gray-500">
          Common questions about this tool
        </p>
      </div>

      {/* FAQ items — native HTML accordion, zero JS, fully crawlable */}
      <div className="divide-y divide-gray-100">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group px-6 sm:px-8 py-0"
            // First item open by default to show Google there is content
            open={index === 0}
          >
            <summary
              className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none select-none"
              aria-expanded="false"
            >
              <h3 className="text-sm sm:text-base font-medium text-gray-800 leading-snug pr-4">
                {faq.question}
              </h3>
              {/* Chevron icon — rotates open/closed via group-open */}
              <span
                className="flex-shrink-0 w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                aria-hidden="true"
              >
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            {/* Answer */}
            <div className="pb-5 pr-8">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
