// EMI Calculator content
// Primary keyword: "emi calculator" — 5M+ monthly searches
// Secondary: "home loan emi calculator", "car loan emi calculator"

import type { ToolContent } from "./types";

const emiCalculatorContent: ToolContent = {
  intro: `An EMI calculator helps you find your exact Equated Monthly Installment (EMI) for any loan — home loan, car loan, or personal loan — in seconds. EMI is the fixed monthly amount you pay to your bank until the loan is fully repaid, and it includes both the principal repayment and interest charges. Use this free EMI calculator to compare loan options, plan your monthly budget, and understand the total cost of borrowing before you sign any loan agreement.`,

  howToUse: [
    {
      step: 1,
      title: "Enter the loan amount",
      description:
        "Type the total loan amount you want to borrow. For a home loan this is typically ₹20 lakh to ₹1 crore. For personal loans, ₹1 lakh to ₹25 lakh.",
    },
    {
      step: 2,
      title: "Enter the annual interest rate",
      description:
        "Enter the rate of interest offered by your bank. Home loan rates are typically 8.5–10.5%. Car loans: 9–14%. Personal loans: 11–24%. Check your bank's website for the current rate.",
    },
    {
      step: 3,
      title: "Enter the loan tenure",
      description:
        "Enter how long you want to repay the loan. Home loans: 5–30 years. Car loans: 1–7 years. Personal loans: 1–5 years. A longer tenure means lower EMI but higher total interest paid.",
    },
    {
      step: 4,
      title: "View your EMI and total interest",
      description:
        "Your monthly EMI, total interest payable, and total repayment amount appear instantly. The amortization table shows exactly how much principal and interest you pay each month.",
    },
  ],

  faqs: [
    {
      question: "What is the EMI formula?",
      answer:
        "EMI = P × r × (1+r)^n / ((1+r)^n - 1), where P = loan principal, r = monthly interest rate (annual rate ÷ 12 ÷ 100), and n = loan tenure in months. This is called the reducing balance method used by all Indian banks.",
    },
    {
      question: "How can I reduce my EMI?",
      answer:
        "You can reduce your EMI by: (1) choosing a longer tenure — doubles the tenure roughly halves the EMI, (2) making a larger down payment to reduce the principal, (3) negotiating a lower interest rate, or (4) prepaying part of the loan to reduce outstanding principal.",
    },
    {
      question: "Does a longer tenure always mean a lower EMI?",
      answer:
        "Yes, a longer tenure reduces your monthly EMI. However, it also means you pay significantly more total interest. A ₹50 lakh home loan at 9% for 20 years costs ₹44.9 lakh in interest, but for 30 years it costs ₹74.7 lakh in interest — ₹30 lakh more.",
    },
    {
      question: "Can I calculate the EMI for home, car, and personal loans?",
      answer:
        "Yes. The same EMI formula applies to all loan types. The difference is in the loan amount, interest rate, and tenure you enter. Home loans typically have the lowest rates (8.5–10.5%) and longest tenures (up to 30 years).",
    },
    {
      question: "What is an amortization schedule?",
      answer:
        "An amortization schedule shows the breakdown of each EMI payment into principal and interest portions for every month of your loan. In the early months, most of your EMI goes toward interest. Over time, the principal portion increases.",
    },
    {
      question: "How much loan can I get based on my salary?",
      answer:
        "Most banks in India allow a maximum EMI of 40–50% of your net monthly salary. So if your take-home salary is ₹60,000, your maximum affordable EMI is ₹24,000–₹30,000. Use the calculator to find what loan amount and tenure gives you an EMI within this range.",
    },
  ],

  variants: [
    {
      slug: "home-loan",
      label: "Home Loan",
      title: "Home Loan EMI Calculator",
      description:
        "Free home loan EMI calculator. Calculate your monthly EMI for any home loan amount, tenure, and interest rate. Instant result with full amortization schedule.",
      keywords: [
        "home loan emi calculator",
        "housing loan emi calculator",
        "home loan monthly payment calculator",
        "mortgage calculator india",
      ],
    },
    {
      slug: "car-loan",
      label: "Car Loan",
      title: "Car Loan EMI Calculator",
      description:
        "Free car loan EMI calculator. Find your exact monthly car loan payment. Compare interest costs for different down payments and loan tenures.",
      keywords: [
        "car loan emi calculator",
        "auto loan emi calculator",
        "vehicle loan calculator india",
        "car loan monthly installment calculator",
      ],
    },
    {
      slug: "personal-loan",
      label: "Personal Loan",
      title: "Personal Loan EMI Calculator",
      description:
        "Free personal loan EMI calculator. Calculate your monthly EMI, total interest, and total repayment for any personal loan amount and interest rate.",
      keywords: [
        "personal loan emi calculator",
        "personal loan monthly payment",
        "unsecured loan emi calculator",
        "personal loan interest calculator india",
      ],
    },
  ],

  affiliateCta: {
    text: "Compare home loan interest rates from top Indian banks — HDFC, SBI, ICICI, Axis.",
    buttonLabel: "Compare Loan Rates →",
    href: "/finance/compare-loans",
  },
};

export default emiCalculatorContent;
