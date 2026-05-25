// EMI Calculator — pure business logic.
// Formula: Reducing balance method used by all Indian banks.
// No React, no imports. Fully testable in isolation.

export type EmiInput = {
  /** Total loan amount in rupees */
  principal: number;
  /** Annual interest rate as a percentage — e.g. 8.5 for 8.5% */
  annualRate: number;
  /** Loan tenure in months */
  tenureMonths: number;
};

export type AmortizationRow = {
  month: number;
  emi: number;
  principalPaid: number;
  interestPaid: number;
  balance: number;
};

export type EmiResult = {
  emi: number;
  totalAmount: number;
  totalInterest: number;
  /** Principal as % of total repayment */
  principalPercent: number;
  /** Interest as % of total repayment */
  interestPercent: number;
  /** Full month-by-month breakdown — can be large for 30-year loans */
  schedule: AmortizationRow[];
  /** Yearly summary for a compact chart — grouped from schedule */
  yearlyBreakdown: YearlySummary[];
};

export type YearlySummary = {
  year: number;
  principalPaid: number;
  interestPaid: number;
  balance: number;
};

/**
 * Calculates EMI and generates the full amortization schedule.
 *
 * @example
 * const result = calculateEmi({ principal: 5000000, annualRate: 8.5, tenureMonths: 240 });
 * // { emi: 43391, totalInterest: 5413840, ... }
 */
export function calculateEmi(input: EmiInput): EmiResult {
  const { principal, annualRate, tenureMonths } = input;
  const r = annualRate / 12 / 100; // monthly rate

  // Edge case: zero interest rate (some subsidized loans)
  if (r === 0) {
    const emi = Math.round(principal / tenureMonths);
    const schedule: AmortizationRow[] = [];
    let balance = principal;
    for (let m = 1; m <= tenureMonths; m++) {
      const principalPaid = m === tenureMonths ? balance : emi;
      balance -= principalPaid;
      schedule.push({
        month: m,
        emi,
        principalPaid: Math.round(principalPaid),
        interestPaid: 0,
        balance: Math.max(0, Math.round(balance)),
      });
    }
    return {
      emi,
      totalAmount: principal,
      totalInterest: 0,
      principalPercent: 100,
      interestPercent: 0,
      schedule,
      yearlyBreakdown: buildYearlyBreakdown(schedule),
    };
  }

  // Standard EMI formula: P × r × (1+r)^n / ((1+r)^n - 1)
  const compoundFactor = Math.pow(1 + r, tenureMonths);
  const rawEmi = (principal * r * compoundFactor) / (compoundFactor - 1);
  const emi = Math.round(rawEmi);
  const totalAmount = emi * tenureMonths;
  const totalInterest = totalAmount - principal;

  // Amortization schedule
  const schedule: AmortizationRow[] = [];
  let balance = principal;

  for (let m = 1; m <= tenureMonths; m++) {
    const interestPaid = balance * r;
    const principalPaid = rawEmi - interestPaid;

    // Last month — zero out the balance to handle rounding
    balance = m === tenureMonths ? 0 : balance - principalPaid;

    schedule.push({
      month: m,
      emi,
      principalPaid: Math.round(principalPaid),
      interestPaid: Math.round(interestPaid),
      balance: Math.max(0, Math.round(balance)),
    });
  }

  return {
    emi,
    totalAmount,
    totalInterest,
    principalPercent: Math.round((principal / totalAmount) * 100),
    interestPercent: Math.round((totalInterest / totalAmount) * 100),
    schedule,
    yearlyBreakdown: buildYearlyBreakdown(schedule),
  };
}

function buildYearlyBreakdown(schedule: AmortizationRow[]): YearlySummary[] {
  const years: YearlySummary[] = [];
  for (let yearIdx = 0; yearIdx * 12 < schedule.length; yearIdx++) {
    const monthsInYear = schedule.slice(yearIdx * 12, yearIdx * 12 + 12);
    years.push({
      year: yearIdx + 1,
      principalPaid: monthsInYear.reduce((s, m) => s + m.principalPaid, 0),
      interestPaid: monthsInYear.reduce((s, m) => s + m.interestPaid, 0),
      balance: monthsInYear[monthsInYear.length - 1]?.balance ?? 0,
    });
  }
  return years;
}

/** Formats a rupee amount as ₹1,23,456 (Indian number format) */
export function formatRupees(amount: number): string {
  return "₹" + amount.toLocaleString("en-IN");
}

/** Formats a number to lakh/crore for readability */
export function formatLakhCrore(amount: number): string {
  if (amount >= 10_000_000) return `₹${(amount / 10_000_000).toFixed(2)} Cr`;
  if (amount >= 100_000) return `₹${(amount / 100_000).toFixed(2)} L`;
  return formatRupees(amount);
}
