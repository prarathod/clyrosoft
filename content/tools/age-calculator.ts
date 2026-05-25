// SEO content for the Age Calculator tool.
// Primary keyword: "age calculator" (~2.5M monthly searches)
// Secondary: "how old am i", "date of birth calculator"

import type { ToolContent } from "./types";

const ageCalculatorContent: ToolContent = {
  intro: `Our free age calculator gives you your exact age in years, months, days, hours, and minutes from any date of birth. Whether you need to find out how old you are today, verify an age for a form, or simply satisfy your curiosity, this tool calculates your precise age instantly — no sign-up, no ads blocking the result, and no installation required. The calculator also tells you how many days until your next birthday.`,

  howToUse: [
    {
      step: 1,
      title: "Select your date of birth",
      description:
        "Click the date field and choose your birth date from the calendar. You can type it directly in DD/MM/YYYY format or use the date picker.",
    },
    {
      step: 2,
      title: "Click Calculate Age",
      description:
        'Press the "Calculate Age" button. Your exact age appears instantly — no loading, no page refresh.',
    },
    {
      step: 3,
      title: "View your results",
      description:
        "See your age broken down by years, months, and days. Scroll down to see your total age in days, hours, and minutes. Your next birthday countdown is shown automatically.",
    },
  ],

  faqs: [
    {
      question: "How is my exact age calculated?",
      answer:
        "Your age is calculated by finding the difference between your date of birth and today's date. The calculator accounts for leap years and months of different lengths to give you an accurate count of years, months, and remaining days.",
    },
    {
      question: "How many days old am I?",
      answer:
        "Enter your date of birth in the calculator above and click Calculate. The result section shows your total age in days, accounting for all leap years since your birth.",
    },
    {
      question: "How many hours and minutes old am I?",
      answer:
        "The calculator converts your total age in days into hours and minutes. For example, if you are 9,131 days old, you are approximately 219,144 hours or 13,148,640 minutes old.",
    },
    {
      question: "Can I calculate the age of someone else?",
      answer:
        "Yes. Simply enter their date of birth instead of yours. The calculator works for any date of birth — people, pets, companies, or any event.",
    },
    {
      question: "How many days until my next birthday?",
      answer:
        "After calculating your age, the result card shows a countdown to your next birthday in days. If today is your birthday, the calculator will wish you Happy Birthday.",
    },
    {
      question: "Does this age calculator work for any country?",
      answer:
        "Yes. Age is calculated universally based on the Gregorian calendar. The result is shown in the Indian date format (DD/MM/YYYY) by default but accepts any valid date.",
    },
  ],

  variants: [
    {
      slug: "in-years",
      label: "Age in Years",
      title: "Age Calculator in Years",
      description:
        "Calculate your exact age in years from your date of birth. Free online tool — instant result.",
      keywords: ["age calculator in years", "calculate age in years", "how old am i in years"],
    },
    {
      slug: "in-days",
      label: "Age in Days",
      title: "Age Calculator in Days — How Many Days Old Am I?",
      description:
        "Find out exactly how many days old you are. Enter your date of birth and get your age in days instantly.",
      keywords: [
        "age calculator in days",
        "how many days old am i",
        "days since birth calculator",
      ],
    },
    {
      slug: "birthday",
      label: "Birthday Calculator",
      title: "Birthday Calculator — Days Until Your Next Birthday",
      description:
        "Calculate how many days until your next birthday. Free birthday countdown calculator — enter your date of birth.",
      keywords: ["birthday calculator", "days until birthday", "birthday countdown calculator"],
    },
  ],
};

export default ageCalculatorContent;
