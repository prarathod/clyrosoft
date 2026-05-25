// Result display container used by all tool output sections.
// Intentionally has no state — fully composable.

import type { ReactNode } from "react";

// ─── Single Stat ──────────────────────────────────────────────────────────────

type StatProps = {
  label: string;
  value: string | number;
  unit?: string;
  highlight?: boolean;
};

/**
 * One result data point inside a ResultCard.
 *
 * @example
 * <ResultStat label="Years" value={25} highlight />
 * <ResultStat label="Days" value={9131} unit="days" />
 */
export function ResultStat({ label, value, unit, highlight = false }: StatProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-4 rounded-xl ${
        highlight
          ? "bg-blue-50 border border-blue-200"
          : "bg-gray-50 border border-gray-200"
      }`}
    >
      <span
        className={`text-3xl font-bold tabular-nums ${
          highlight ? "text-blue-700" : "text-gray-900"
        }`}
      >
        {value}
        {unit && (
          <span className="text-base font-normal ml-1 text-gray-500">{unit}</span>
        )}
      </span>
      <span className="mt-1 text-sm text-gray-500">{label}</span>
    </div>
  );
}

// ─── Result Card ──────────────────────────────────────────────────────────────

type ResultCardProps = {
  /** Card heading — e.g. "Your Age" */
  title: string;
  children: ReactNode;
  /** Extra content below the stats — e.g. a share button or note */
  footer?: ReactNode;
  className?: string;
};

/**
 * Wraps tool output in a consistent, styled card.
 *
 * @example
 * <ResultCard title="Your Age">
 *   <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
 *     <ResultStat label="Years"  value={years}  highlight />
 *     <ResultStat label="Months" value={months} />
 *     <ResultStat label="Days"   value={days}   />
 *     <ResultStat label="Hours"  value={hours}  />
 *   </div>
 * </ResultCard>
 */
export default function ResultCard({
  title,
  children,
  footer,
  className = "",
}: ResultCardProps) {
  return (
    <div
      className={`mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="px-6 sm:px-8 py-4 border-b border-gray-100 bg-gray-50">
        <h3 className="text-base font-semibold text-gray-800">{title}</h3>
      </div>

      {/* Content */}
      <div className="px-6 sm:px-8 py-6">{children}</div>

      {/* Optional footer */}
      {footer && (
        <div className="px-6 sm:px-8 py-4 border-t border-gray-100 bg-gray-50">
          {footer}
        </div>
      )}
    </div>
  );
}
