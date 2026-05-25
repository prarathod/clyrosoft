// ─────────────────────────────────────────────────────────────────────────────
// AGE CALCULATOR — pure business logic.
// No React, no imports, fully testable in isolation.
// ─────────────────────────────────────────────────────────────────────────────

export type AgeResult = {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  nextBirthdayInDays: number;
  isToday: boolean;
};

/**
 * Calculates the exact age between two dates.
 *
 * @param dob   - Date of birth
 * @param asOf  - Reference date (defaults to today)
 */
export function calculateAge(dob: Date, asOf: Date = new Date()): AgeResult {
  // Normalise to midnight to avoid time-zone drift
  const birth = new Date(dob.getFullYear(), dob.getMonth(), dob.getDate());
  const today = new Date(asOf.getFullYear(), asOf.getMonth(), asOf.getDate());

  if (birth > today) {
    throw new Error("Date of birth cannot be in the future.");
  }

  // ── Years ────────────────────────────────────────────────────────────────
  let years = today.getFullYear() - birth.getFullYear();
  let monthsDiff = today.getMonth() - birth.getMonth();
  let daysDiff = today.getDate() - birth.getDate();

  if (daysDiff < 0) {
    monthsDiff -= 1;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    daysDiff += prevMonth.getDate();
  }

  if (monthsDiff < 0) {
    years -= 1;
    monthsDiff += 12;
  }

  // ── Total days ───────────────────────────────────────────────────────────
  const msPerDay = 24 * 60 * 60 * 1000;
  const totalDays = Math.floor((today.getTime() - birth.getTime()) / msPerDay);

  // ── Next birthday ────────────────────────────────────────────────────────
  const isToday = monthsDiff === 0 && daysDiff === 0;

  let nextBirthday = new Date(
    today.getFullYear(),
    birth.getMonth(),
    birth.getDate()
  );
  if (nextBirthday <= today && !isToday) {
    nextBirthday = new Date(
      today.getFullYear() + 1,
      birth.getMonth(),
      birth.getDate()
    );
  }
  const nextBirthdayInDays = isToday
    ? 0
    : Math.floor((nextBirthday.getTime() - today.getTime()) / msPerDay);

  return {
    years,
    months: monthsDiff,
    days: daysDiff,
    totalDays,
    totalHours: totalDays * 24,
    totalMinutes: totalDays * 24 * 60,
    nextBirthdayInDays,
    isToday,
  };
}

/**
 * Formats a date as "DD MMMM YYYY" — used in the result display.
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
