// Clean form container for tool input sections.
// Use this as a wrapper around your Ant Design <Form> inside tool components.
// "use client" is intentionally NOT here — wrap it inside your client tool component.

import type { ReactNode } from "react";

type Props = {
  /** Section heading above the form — e.g. "Enter your details" */
  title?: string;
  /** Optional sub-text below the title */
  description?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Consistent visual container for every tool input form.
 *
 * @example
 * // Inside your "use client" tool component:
 * import ToolForm from "app/components/tools/ToolForm";
 *
 * <ToolForm title="Enter your date of birth">
 *   <Form layout="vertical" onFinish={onFinish}>
 *     ...
 *   </Form>
 * </ToolForm>
 */
export default function ToolForm({ title, description, children, className = "" }: Props) {
  return (
    <div
      className={`bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 ${className}`}
    >
      {(title || description) && (
        <div className="mb-6">
          {title && (
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          )}
          {description && (
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
