// Retirement Calculator — pure business logic.
// Inflation-adjusted projection using real rate of return.

export type RetirementInput = {
  /** Current age */
  currentAge: number;
  /** Target retirement age */
  retirementAge: number;
  /** Current retirement savings (EPF + PPF + NPS + other) in rupees */
  currentSavings: number;
  /** Monthly contribution to retirement savings */
  monthlyContribution: number;
  /** Expected annual investment return (%) */
  annualReturn: number;
  /** Expected annual inflation rate (%) */
  inflationRate: number;
  /** Desired monthly retirement income in today's rupees */
  desiredMonthlyIncome: number;
  /** Expected years of retirement (post-retirement life) */
  retirementDuration: number;
};

export type RetirementResult = {
  /** Years left to retirement */
  yearsToRetirement: number;
  /** Corpus at retirement (nominal value) */
  corpusAtRetirement: number;
  /** Monthly income needed at retirement (inflation-adjusted) */
  inflationAdjustedIncome: number;
  /** Required corpus to sustain retirement income */
  requiredCorpus: number;
  /** Gap: requiredCorpus - corpusAtRetirement (negative = surplus) */
  corpusGap: number;
  /** Whether you're on track */
  isOnTrack: boolean;
  /** Additional monthly savings needed to close the gap (0 if on track) */
  additionalSavingsNeeded: number;
  /** Year-by-year projection */
  yearlyProjection: RetirementProjectionRow[];
};

export type RetirementProjectionRow = {
  age: number;
  year: number;
  corpus: number;
  contributed: number;
};

export function calculateRetirement(input: RetirementInput): RetirementResult {
  const {
    currentAge,
    retirementAge,
    currentSavings,
    monthlyContribution,
    annualReturn,
    inflationRate,
    desiredMonthlyIncome,
    retirementDuration,
  } = input;

  const yearsToRetirement = retirementAge - currentAge;
  const r = annualReturn / 100;
  const inf = inflationRate / 100;
  const monthlyRate = r / 12;
  const n = yearsToRetirement * 12;

  // Project corpus at retirement
  // = FV of current savings + FV of monthly contributions (annuity due)
  const fvCurrentSavings = currentSavings * Math.pow(1 + r, yearsToRetirement);
  const fvContributions =
    monthlyRate > 0
      ? monthlyContribution * ((Math.pow(1 + monthlyRate, n) - 1) / monthlyRate) * (1 + monthlyRate)
      : monthlyContribution * n;
  const corpusAtRetirement = Math.round(fvCurrentSavings + fvContributions);

  // Inflation-adjusted monthly income needed at retirement
  const inflationAdjustedIncome = Math.round(
    desiredMonthlyIncome * Math.pow(1 + inf, yearsToRetirement)
  );

  // Required corpus to sustain retirement income for N years
  // Using present value of annuity: PV = PMT × (1 - (1+r)^-n) / r
  // but during retirement, use real rate of return to account for inflation
  const realRate = (1 + r) / (1 + inf) - 1;
  const retirementMonths = retirementDuration * 12;
  const monthlyRealRate = realRate / 12;
  const requiredCorpus =
    monthlyRealRate > 0
      ? Math.round(
          inflationAdjustedIncome *
            ((1 - Math.pow(1 + monthlyRealRate, -retirementMonths)) / monthlyRealRate)
        )
      : Math.round(inflationAdjustedIncome * retirementMonths);

  const corpusGap = requiredCorpus - corpusAtRetirement;
  const isOnTrack = corpusGap <= 0;

  // Additional monthly savings needed to close gap
  let additionalSavingsNeeded = 0;
  if (!isOnTrack && monthlyRate > 0) {
    // Solve for PMT: PV of annuity formula rearranged
    additionalSavingsNeeded = Math.round(
      (corpusGap * monthlyRate) / ((Math.pow(1 + monthlyRate, n) - 1) * (1 + monthlyRate))
    );
  }

  // Year-by-year projection
  const yearlyProjection = buildProjection(
    currentAge,
    retirementAge,
    currentSavings,
    monthlyContribution,
    r
  );

  return {
    yearsToRetirement,
    corpusAtRetirement,
    inflationAdjustedIncome,
    requiredCorpus,
    corpusGap,
    isOnTrack,
    additionalSavingsNeeded: Math.max(0, additionalSavingsNeeded),
    yearlyProjection,
  };
}

function buildProjection(
  currentAge: number,
  retirementAge: number,
  currentSavings: number,
  monthlyContribution: number,
  annualReturn: number
): RetirementProjectionRow[] {
  const rows: RetirementProjectionRow[] = [];
  let corpus = currentSavings;
  const r = annualReturn / 12;

  for (let year = 1; year <= retirementAge - currentAge; year++) {
    for (let m = 0; m < 12; m++) {
      corpus = corpus * (1 + r) + monthlyContribution;
    }
    rows.push({
      age: currentAge + year,
      year,
      corpus: Math.round(corpus),
      contributed: Math.round(currentSavings + monthlyContribution * year * 12),
    });
  }
  return rows;
}

export { formatRupees, formatLakhCrore } from "../emi-calculator/logic";
