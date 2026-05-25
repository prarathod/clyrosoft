// SEO content for the Pension Calculator.
// Primary keyword: "pension calculator" (~200K monthly searches IN)
// Secondary: "retirement calculator india", "monthly pension calculator"

import type { ToolContent } from "./types";

const pensionCalculatorContent: ToolContent = {
  intro: `This free pension calculator helps you estimate your monthly pension and retirement corpus based on your current salary, years of service, and expected return rate. Whether you are a government employee, a teacher, or a private sector professional planning your retirement, this tool gives you a clear financial picture in seconds — without any financial jargon. Use the results to understand how much you need to save today to live comfortably tomorrow.`,

  howToUse: [
    {
      step: 1,
      title: "Enter your current basic salary",
      description:
        "Type your current monthly basic salary. This is the base salary before allowances like HRA or DA.",
    },
    {
      step: 2,
      title: "Enter your years of service",
      description:
        "How many years have you worked, or plan to work before retirement? Government employees typically need 20+ years for full pension benefits.",
    },
    {
      step: 3,
      title: "Set the expected return rate",
      description:
        "Enter the expected annual return on your pension fund. Government EPF is currently 8.1%. NPS varies by fund choice (7–12%).",
    },
    {
      step: 4,
      title: "View your pension estimate",
      description:
        "See your estimated monthly pension, total corpus at retirement, and a year-by-year growth breakdown.",
    },
  ],

  faqs: [
    {
      question: "How is pension calculated in India?",
      answer:
        "For government employees under the Old Pension Scheme, pension = (last drawn basic salary × years of service) / 2, subject to a maximum of 50% of last drawn salary. For NPS subscribers, pension depends on corpus accumulated and annuity rates at retirement.",
    },
    {
      question: "What is the minimum pension in India?",
      answer:
        "Under EPS (Employees' Pension Scheme), the minimum pension is ₹1,000 per month for EPFO members. Government pension minimums vary by state and service rules.",
    },
    {
      question: "How much pension will I get after 20 years of service?",
      answer:
        "Under the Old Pension Scheme, after 20 years of service: pension = (last basic salary × 20) / 2 = 10 months of basic salary, paid monthly. Enter your actual salary in the calculator above for an exact figure.",
    },
    {
      question: "Is NPS better than the Old Pension Scheme?",
      answer:
        "NPS offers market-linked returns and a larger corpus at retirement but no guaranteed monthly pension. The Old Pension Scheme guarantees 50% of last salary as monthly pension. Which is better depends on your risk tolerance and investment horizon.",
    },
    {
      question: "Can private employees use this pension calculator?",
      answer:
        "Yes. Private employees can use this calculator for EPFO pension estimation. Adjust the years of service and expected return rate to match your EPF account details for the most accurate results.",
    },
  ],

  variants: [
    {
      slug: "karnataka",
      label: "Karnataka",
      title: "Karnataka Government Pension Calculator",
      description:
        "Calculate Karnataka government employee pension based on the Karnataka Civil Services Rules. Free online tool — instant results.",
      keywords: [
        "karnataka pension calculator",
        "karnataka government employee pension",
        "karnataka pension calculation formula",
      ],
      faqs: [
        {
          question: "How is Karnataka government pension calculated?",
          answer:
            "Karnataka government pension is calculated under the Karnataka Civil Services Rules: pension = (last pay × qualifying service in years) / 2, subject to a maximum of 50% of last drawn pay.",
        },
        {
          question: "What is the minimum pension for Karnataka government employees?",
          answer:
            "The minimum pension for Karnataka government employees is ₹9,000 per month as of the latest revision.",
        },
      ],
    },
    {
      slug: "teachers",
      label: "Teachers",
      title: "Teachers Pension Calculator India",
      description:
        "Free pension calculator for school and college teachers in India. Estimate your monthly pension based on your salary and years of teaching service.",
      keywords: [
        "teachers pension calculator india",
        "school teacher pension calculator",
        "teacher retirement calculator india",
      ],
      faqs: [
        {
          question: "Do private school teachers get pension in India?",
          answer:
            "Private school teachers covered under EPFO are eligible for EPS pension after 10 years of service. Government school teachers receive pension under the applicable state pension scheme or NPS.",
        },
      ],
    },
    {
      slug: "private-employees",
      label: "Private Employees",
      title: "Pension Calculator for Private Employees in India",
      description:
        "Calculate your EPS (EPFO) pension as a private sector employee. Free tool — enter your salary and service years for an instant estimate.",
      keywords: [
        "private employees pension calculator",
        "eps pension calculator",
        "epfo pension calculator india",
        "private sector pension india",
      ],
      faqs: [
        {
          question: "How much pension do private employees get from EPFO?",
          answer:
            "Private employees contributing to EPFO for 10+ years are eligible for EPS pension. The pension = (pensionable salary × pensionable service) / 70, where pensionable salary is currently capped at ₹15,000 per month.",
        },
      ],
    },
  ],
};

export default pensionCalculatorContent;
