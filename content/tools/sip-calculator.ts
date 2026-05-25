// SIP Calculator content
// Primary keyword: "sip calculator" — 1.5M+ monthly searches (India)
// Secondary: "sip return calculator", "mutual fund sip calculator"

import type { ToolContent } from "./types";

const sipCalculatorContent: ToolContent = {
  intro: `A SIP (Systematic Investment Plan) calculator helps you estimate the wealth your monthly mutual fund investments will build over time. By investing a fixed amount every month through SIP, you benefit from rupee-cost averaging and the power of compounding. Use this free SIP calculator to see how even small monthly investments — ₹500 or ₹1,000 — can grow into significant wealth over 10, 20, or 30 years, and plan your financial goals with clarity.`,

  howToUse: [
    {
      step: 1,
      title: "Enter your monthly SIP amount",
      description:
        "The amount you invest every month — starting from ₹500. Most mutual funds accept SIPs from ₹100/month. Enter what you can comfortably invest without affecting your monthly budget.",
    },
    {
      step: 2,
      title: "Set the expected annual return",
      description:
        "Historical average returns: Equity mutual funds = 12–15% CAGR over 10+ years. Debt funds = 6–8%. Balanced/hybrid funds = 9–11%. Use 12% as a conservative estimate for long-term equity SIPs.",
    },
    {
      step: 3,
      title: "Enter the investment duration",
      description:
        "The number of years you plan to stay invested. SIPs work best over 5+ years. The longer you stay invested, the more powerful compounding becomes.",
    },
    {
      step: 4,
      title: "View your projected wealth",
      description:
        "See your total invested amount, estimated returns, and final corpus. The year-by-year breakdown shows how your wealth grows each year — watch the power of compounding kick in after year 5.",
    },
  ],

  faqs: [
    {
      question: "What is SIP and how does it work?",
      answer:
        "SIP (Systematic Investment Plan) is a method of investing a fixed amount in mutual funds at regular intervals (usually monthly). Each month, the amount is debited from your bank account and units of the chosen mutual fund are purchased at the current NAV. You accumulate more units when NAV is low and fewer when NAV is high — this is called rupee-cost averaging.",
    },
    {
      question: "What is a realistic SIP return expectation?",
      answer:
        "For equity mutual funds (large-cap) over 10+ years, 10–12% annual return is a reasonable conservative estimate. Mid-cap and small-cap funds have delivered 14–18% historically but carry higher risk. Debt funds typically return 6–8%. The calculator uses a constant return rate — actual returns fluctuate year to year.",
    },
    {
      question: "Is ₹500 SIP per month worth it?",
      answer:
        "Yes. ₹500/month at 12% annual return over 20 years grows to approximately ₹4.5 lakhs from just ₹1.2 lakhs invested. The same ₹500/month over 30 years becomes ₹17.5 lakhs from ₹1.8 lakhs invested. Starting small and staying consistent is far better than waiting to invest a large amount.",
    },
    {
      question: "What is the difference between SIP and lump sum investment?",
      answer:
        "SIP invests a fixed amount monthly regardless of market levels — it reduces timing risk through rupee-cost averaging. A lump sum invests all at once, which can give better returns if the market rises after investment but higher losses if it falls. SIP is recommended for salaried investors who have regular income.",
    },
    {
      question: "How is SIP return calculated?",
      answer:
        "SIP maturity value = P × ((1+r)^n - 1) / r × (1+r), where P = monthly investment, r = monthly return rate (annual rate ÷ 12 ÷ 100), and n = total number of months. This formula gives the future value of all monthly installments compounded at the given rate.",
    },
    {
      question: "Can I stop or pause a SIP?",
      answer:
        "Yes. Most mutual fund SIPs can be paused (for 1–3 months) or stopped at any time without penalties. You can also increase (step-up SIP) or decrease the amount. The invested amount stays in the fund and continues to grow.",
    },
  ],

  variants: [
    {
      slug: "monthly",
      label: "Monthly SIP",
      title: "Monthly SIP Return Calculator",
      description:
        "Calculate exactly how much your monthly SIP will be worth at maturity. Free tool — enter your SIP amount, rate, and years for an instant result.",
      keywords: [
        "monthly sip calculator",
        "sip monthly return calculator",
        "monthly mutual fund sip calculator",
      ],
    },
    {
      slug: "lump-sum",
      label: "Lump Sum",
      title: "Lump Sum Mutual Fund Calculator",
      description:
        "Calculate the future value of a one-time (lump sum) mutual fund investment. Compare lump sum vs SIP returns instantly.",
      keywords: [
        "lump sum calculator",
        "mutual fund lump sum calculator",
        "one time investment calculator",
        "lump sum vs sip calculator",
      ],
    },
    {
      slug: "step-up",
      label: "Step-Up SIP",
      title: "Step-Up SIP Calculator",
      description:
        "Calculate returns for a step-up SIP where you increase your investment amount each year. Free tool — see how annual SIP top-ups supercharge your returns.",
      keywords: [
        "step up sip calculator",
        "sip top up calculator",
        "increasing sip calculator",
        "annual sip increment calculator",
      ],
    },
  ],

  affiliateCta: {
    text: "Start your SIP today with top-rated mutual funds — zero commission, paperless process.",
    buttonLabel: "Start Investing →",
    href: "/finance/start-sip",
  },
};

export default sipCalculatorContent;
