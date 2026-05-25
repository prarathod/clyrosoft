// Gratuity Calculator content
// Primary keyword: "gratuity calculator" — 500K+ monthly searches (India)
// Secondary: "how to calculate gratuity", "gratuity formula"

import type { ToolContent } from "./types";

const gratuityCalculatorContent: ToolContent = {
  intro: `A gratuity calculator helps you instantly find out how much gratuity you are entitled to receive when leaving a job in India. Gratuity is a statutory benefit paid by employers to employees who have completed 5 or more years of continuous service, as per the Payment of Gratuity Act, 1972. The calculation depends on your last drawn basic salary and total years of service. Use this free gratuity calculator to know your exact payout — whether you are about to resign, retire, or simply planning ahead.`,

  howToUse: [
    {
      step: 1,
      title: "Enter your last drawn basic salary",
      description:
        "Enter your monthly basic salary plus dearness allowance (DA). Do not include HRA, travel allowance, or other variable components. For government employees, use basic pay as per the pay matrix.",
    },
    {
      step: 2,
      title: "Enter your years of service",
      description:
        "Enter the total number of completed years of continuous service with the same employer. Note: You must have worked for at least 5 years to be eligible for gratuity under the Payment of Gratuity Act.",
    },
    {
      step: 3,
      title: "Select your employment type",
      description:
        "Select whether you are a private sector employee (Payment of Gratuity Act) or a government employee (different formula and higher limits apply).",
    },
    {
      step: 4,
      title: "View your gratuity amount",
      description:
        "Your calculated gratuity amount appears instantly, along with the tax-exempt portion. Gratuity up to ₹20 lakh is fully tax-free for private sector employees.",
    },
  ],

  faqs: [
    {
      question: "What is the gratuity formula for private employees?",
      answer:
        "Gratuity = (Last drawn basic salary × 15 × Years of service) / 26. The number 15 represents 15 days of salary per year, and 26 represents working days in a month. For example, if your basic salary is ₹50,000 and you have worked for 10 years: Gratuity = (50,000 × 15 × 10) / 26 = ₹2,88,461.",
    },
    {
      question: "What is the minimum years of service required for gratuity?",
      answer:
        "You must complete a minimum of 5 years of continuous service with the same employer to be eligible for gratuity under the Payment of Gratuity Act, 1972. For employees who die or become disabled, gratuity is paid regardless of service period.",
    },
    {
      question: "What is the maximum gratuity amount in India?",
      answer:
        "The maximum gratuity amount for private sector employees is ₹20 lakh (₹20,00,000) as of the latest amendment. Any gratuity amount up to ₹20 lakh is fully exempt from income tax. Government employees have different rules.",
    },
    {
      question: "Is gratuity taxable in India?",
      answer:
        "Gratuity is fully tax-free up to ₹20 lakh for government employees and employees covered under the Payment of Gratuity Act. For employees not covered by the Act, the exemption is limited to ₹10 lakh. Any amount above the exemption limit is taxed as per your income tax slab.",
    },
    {
      question: "What happens to gratuity if I resign before 5 years?",
      answer:
        "You are not entitled to gratuity if you resign before completing 5 years of continuous service. The 5-year rule applies strictly under the Payment of Gratuity Act. However, some employers voluntarily pay gratuity for shorter service periods as a benefit — check your offer letter or company policy.",
    },
    {
      question: "How is gratuity calculated for government employees?",
      answer:
        "For Central Government employees, gratuity = (Basic Pay + DA) × Years of Service × 1/4. Maximum gratuity for central govt employees is ₹20 lakh. State government rules may vary. The formula and limits differ from private sector calculations.",
    },
  ],

  variants: [
    {
      slug: "private-employees",
      label: "Private Employees",
      title: "Gratuity Calculator for Private Sector Employees",
      description:
        "Calculate your gratuity as per the Payment of Gratuity Act for private sector employees. Instant formula-based calculation with tax exemption details.",
      keywords: [
        "gratuity calculator private employees",
        "gratuity formula private sector india",
        "private company gratuity calculation",
      ],
    },
    {
      slug: "government-employees",
      label: "Government Employees",
      title: "Gratuity Calculator for Government Employees India",
      description:
        "Calculate your retirement gratuity as a Central or State Government employee. Different formula from private sector — get accurate results instantly.",
      keywords: [
        "government employee gratuity calculator",
        "central government gratuity calculator",
        "retirement gratuity calculator india",
      ],
    },
  ],
};

export default gratuityCalculatorContent;
