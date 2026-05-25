// Gratuity Calculator — pure business logic.
// Formulas as per Payment of Gratuity Act, 1972 (India).

export type EmploymentType = "private" | "government";

export type GratuityInput = {
  /** Last drawn basic salary + DA in rupees per month */
  basicSalary: number;
  /** Total years of continuous service (can include fractions for partial year) */
  yearsOfService: number;
  employmentType: EmploymentType;
};

export type GratuityResult = {
  /** Calculated gratuity amount */
  gratuity: number;
  /** Tax-exempt portion */
  taxExemptAmount: number;
  /** Taxable portion (gratuity - taxExemptAmount) */
  taxableAmount: number;
  /** Whether the employee is eligible (needs 5+ years for private) */
  isEligible: boolean;
  /** Formula used for display */
  formulaUsed: string;
};

// Maximum tax-exempt gratuity for private sector employees (as of 2024 amendment)
const PRIVATE_MAX_EXEMPT = 2_000_000; // ₹20 lakh

/**
 * Private sector formula (Payment of Gratuity Act, covered employees):
 *   Gratuity = (Basic + DA) × 15 × Years / 26
 *   - 15 = 15 days salary per year
 *   - 26 = working days per month
 *
 * Government employee formula:
 *   Gratuity = (Basic + DA) × Years × 1/4
 *   (Each 6 months = 0.5 year counts; max = ₹20 lakh)
 */
export function calculateGratuity(input: GratuityInput): GratuityResult {
  const { basicSalary, yearsOfService, employmentType } = input;

  const completedYears = Math.floor(yearsOfService);
  const months = Math.round((yearsOfService - completedYears) * 12);

  // For private employees: must complete 5 years (except death/disability)
  const isEligible = employmentType === "government" || completedYears >= 5;

  let gratuity = 0;
  let formulaUsed = "";

  if (!isEligible) {
    return {
      gratuity: 0,
      taxExemptAmount: 0,
      taxableAmount: 0,
      isEligible: false,
      formulaUsed: "Not eligible — minimum 5 years required",
    };
  }

  if (employmentType === "private") {
    // Round up to next year if >= 6 months in current year
    const effectiveYears = months >= 6 ? completedYears + 1 : completedYears;
    gratuity = Math.round((basicSalary * 15 * effectiveYears) / 26);
    formulaUsed = `(₹${basicSalary.toLocaleString("en-IN")} × 15 × ${effectiveYears}) ÷ 26`;
  } else {
    // Government: every 6-month block counts as half year
    const halfYears = Math.floor(yearsOfService * 2); // total 6-month blocks
    gratuity = Math.round((basicSalary * halfYears) / 4);
    const effectiveYears = halfYears / 2;
    formulaUsed = `(₹${basicSalary.toLocaleString("en-IN")} × ${effectiveYears}) ÷ 4`;
  }

  // Cap at ₹20 lakh (applicable to both private and govt as of 2024)
  const cappedGratuity = Math.min(gratuity, PRIVATE_MAX_EXEMPT);
  const taxExemptAmount = cappedGratuity;
  const taxableAmount = Math.max(0, gratuity - PRIVATE_MAX_EXEMPT);

  return {
    gratuity,
    taxExemptAmount,
    taxableAmount,
    isEligible: true,
    formulaUsed,
  };
}

export { formatRupees, formatLakhCrore } from "../emi-calculator/logic";
