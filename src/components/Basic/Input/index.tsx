import React, { forwardRef, InputHTMLAttributes } from "react";
import { Input as ShadcnInput } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LucideIcon } from "lucide-react";

// Utility function for class names
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

const colorTheme = {
  primary: "#3B82F6",
  secondary: "#10B981",
  background: "#F3F4F6",
  text: "#1F2937",
  error: "#EF4444",
  success: "#10B981",
  warning: "#F59E0B",
};

// Utility function to get color based on input state
const getStatusColor = (
  error?: string,
  success?: string,
  warning?: string
): string => {
  if (error) return colorTheme.error;
  if (success) return colorTheme.success;
  if (warning) return colorTheme.warning;
  return colorTheme.primary;
};

// Props interface for DynamicInput
interface DynamicInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  success?: string;
  warning?: string;
  icon?: LucideIcon;
  size?: "sm" | "md" | "lg";
}

export const Input = forwardRef<HTMLInputElement, DynamicInputProps>(
  (
    {
      label,
      id,
      type = "text",
      placeholder,
      error,
      success,
      warning,
      className,
      required,
      disabled,
      readOnly,
      icon: Icon,
      size = "md",
      ...props
    },
    ref
  ) => {
    const inputSize = {
      sm: "py-1 text-sm",
      md: "py-2",
      lg: "py-3 text-lg",
    }[size];

    return (
      <div className="w-full">
        {label && (
          <Label
            htmlFor={id}
            className={cn(
              "mb-2 block font-medium",
              size === "sm"
                ? "text-sm"
                : size === "lg"
                ? "text-lg"
                : "text-base",
              error ? "text-red-500" : ""
            )}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </Label>
        )}
        <div className="relative">
          {Icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon
                className={cn(
                  "text-gray-400",
                  size === "sm"
                    ? "h-4 w-4"
                    : size === "lg"
                    ? "h-6 w-6"
                    : "h-5 w-5"
                )}
                aria-hidden="true"
              />
            </div>
          )}
          <ShadcnInput
            id={id}
            type={type}
            placeholder={placeholder}
            className={cn(
              className,
              "w-full",
              inputSize,
              Icon ? "pl-10" : "",
              error
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "",
              success
                ? "border-green-500 focus:border-green-500 focus:ring-green-500"
                : "",
              warning
                ? "border-yellow-500 focus:border-yellow-500 focus:ring-yellow-500"
                : ""
            )}
            disabled={disabled}
            readOnly={readOnly}
            ref={ref}
            style={{
              borderColor: getStatusColor(error, success, warning),
              backgroundColor: disabled ? colorTheme.background : undefined,
              color: colorTheme.text,
            }}
            {...props}
          />
        </div>
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        {success && <p className="mt-2 text-sm text-green-500">{success}</p>}
        {warning && <p className="mt-2 text-sm text-yellow-500">{warning}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
