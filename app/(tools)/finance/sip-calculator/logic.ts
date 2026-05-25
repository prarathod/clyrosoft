// SIP Calculator — pure business logic.
// Formula: Future Value of annuity due (standard SIP formula used by AMFI/all Indian fund houses).

export type SipInput = {
  /** Monthly investment amount in rupees */
  monthlyAmount: number;
  /** Expected annual return as a percentage — e.g. 12 for 12% */
  annualRate: number;
  /** Investment duration in years */
  durationYears: number;
};

export type SipYearlySummary = {
  year: number;
  invested: number;
  value: number;
  returns: number;
};

export type SipResult = {
  /** Total amount invested (monthlyAmount × months) */
  totalInvested: number;
  /** Estimated total value at maturity */
  maturityValue: number;
  /** Total returns earned (maturityValue - totalInvested) */
  totalReturns: number;
  /** Returns as % of total invested */
  returnsPercent: number;
  /** Wealth ratio: maturityValue / totalInvested */
  wealthRatio: number;
  /** Year-by-year corpus growth */
  yearlyBreakdown: SipYearlySummary[];
};

/**
 * Calculates SIP maturity value using the standard annuity-due formula.
 * FV = P × ((1+r)^n - 1) / r × (1+r)
 * where r = monthly rate, n = total months
 */
export function calculateSip(input: SipInput): SipResult {
  const { monthlyAmount, annualRate, durationYears } = input;
  const r = annualRate / 12 / 100; // monthly rate
  const n = durationYears * 12; // total months

  const totalInvested = monthlyAmount * n;

  // Edge case: zero interest
  if (r === 0) {
    const yearlyBreakdown = buildYearlyBreakdown(monthlyAmount, 0, durationYears);
    return {
      totalInvested,
      maturityValue: totalInvested,
      totalReturns: 0,
      returnsPercent: 0,
      wealthRatio: 1,
      yearlyBreakdown,
    };
  }

  // Standard SIP formula (annuity due — invested at beginning of month)
  const maturityValue = monthlyAmount * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const totalReturns = maturityValue - totalInvested;

  return {
    totalInvested: Math.round(totalInvested),
    maturityValue: Math.round(maturityValue),
    totalReturns: Math.round(totalReturns),
    returnsPercent: Math.round((totalReturns / totalInvested) * 100),
    wealthRatio: Math.round((maturityValue / totalInvested) * 10) / 10,
    yearlyBreakdown: buildYearlyBreakdown(monthlyAmount, r, durationYears),
  };
}

function buildYearlyBreakdown(
  monthlyAmount: number,
  monthlyRate: number,
  durationYears: number
): SipYearlySummary[] {
  const rows: SipYearlySummary[] = [];
  for (let year = 1; year <= durationYears; year++) {
    const n = year * 12;
    const invested = monthlyAmount * n;
    const value =
      monthlyRate === 0
        ? invested
        : monthlyAmount * ((Math.pow(1 + monthlyRate, n) - 1) / monthlyRate) * (1 + monthlyRate);
    rows.push({
      year,
      invested: Math.round(invested),
      value: Math.round(value),
      returns: Math.round(value - invested),
    });
  }
  return rows;
}

export { formatRupees, formatLakhCrore } from "../emi-calculator/logic";
