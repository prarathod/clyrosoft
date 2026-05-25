// Retirement Calculator content
// Primary keyword: "retirement calculator india" — 200K+ monthly searches
// Secondary: "how much to save for retirement", "retirement planning calculator"

import type { ToolContent } from "./types";

const retirementCalculatorContent: ToolContent = {
  intro: `A retirement calculator tells you whether you are saving enough to retire comfortably. It takes your current age, retirement age, existing savings, monthly contributions, and expected investment return to project your retirement corpus — and compares it against how much you actually need. Most financial advisors recommend saving 25× your annual expenses for a comfortable retirement in India. Use this free retirement planning calculator to see if you are on track, and by how much you need to increase your savings.`,

  howToUse: [
    {
      step: 1,
      title: "Enter your current age and target retirement age",
      description:
        "Most people retire between 58 and 65 in India. The number of years remaining to retirement determines how long your investments have to grow.",
    },
    {
      step: 2,
      title: "Enter your current savings and monthly contribution",
      description:
        "Enter your existing retirement savings (EPF + PPF + NPS + other investments) and how much you are adding to these savings every month.",
    },
    {
      step: 3,
      title: "Enter expected return and inflation rate",
      description:
        "Use 10–12% for equity-heavy portfolios, 7–8% for balanced portfolios. Set inflation at 6–7% for India. The calculator will show your retirement corpus in today's value (inflation-adjusted).",
    },
    {
      step: 4,
      title: "Enter your desired monthly retirement income",
      description:
        "How much monthly income do you need in retirement? A common rule of thumb is 70–80% of your current monthly expenses, adjusted for inflation.",
    },
  ],

  faqs: [
    {
      question: "How much money do I need to retire in India?",
      answer:
        "A common rule is 25× your annual expenses (the 4% withdrawal rule). If you spend ₹60,000/month today, you need approximately ₹1.8 crore in today's value. However, adjusted for 6% inflation, the actual corpus required 20 years from now would be ₹5.8 crore.",
    },
    {
      question: "What is the 4% withdrawal rule for retirement?",
      answer:
        "The 4% rule states that you can safely withdraw 4% of your retirement corpus every year without running out of money for 30 years. So for ₹50,000/month (₹6 lakh/year) income, you need ₹1.5 crore corpus. This rule was developed for US markets — for India, 3–3.5% withdrawal is more conservative.",
    },
    {
      question: "What is the best retirement investment in India?",
      answer:
        "The ideal retirement portfolio for Indians includes: NPS (tax benefits + market returns), EPF (employer contribution), PPF (guaranteed 7.1% return), and equity mutual funds (for long-term growth). A combination of these provides both growth and safety.",
    },
    {
      question: "When should I start saving for retirement?",
      answer:
        "The earlier the better. Starting at 25 with ₹5,000/month at 12% return gives you ₹3.4 crore by 60. Starting at 35 with the same amount gives only ₹1.05 crore — one-third of the amount with just 10 years difference. Every decade you delay roughly halves your retirement corpus.",
    },
    {
      question: "How does inflation affect retirement planning?",
      answer:
        "Inflation erodes purchasing power over time. At 6% annual inflation, your ₹50,000 monthly expense today will become ₹1.6 lakh per month after 20 years. Your retirement corpus must be large enough to support this inflated expense for 20–30 years of retirement life.",
    },
  ],

  variants: [
    {
      slug: "early-retirement",
      label: "Early Retirement",
      title: "Early Retirement Calculator India (FIRE Calculator)",
      description:
        "Calculate how much you need to retire early in India. Find your FIRE number — the corpus required to retire at 40, 45, or 50.",
      keywords: [
        "early retirement calculator india",
        "fire calculator india",
        "retire at 40 india calculator",
        "financial independence calculator",
      ],
    },
  ],

  affiliateCta: {
    text: "Start building your retirement corpus with NPS — tax benefits up to ₹2 lakh under 80C + 80CCD.",
    buttonLabel: "Open NPS Account →",
    href: "/finance/open-nps",
  },
};

export default retirementCalculatorContent;
