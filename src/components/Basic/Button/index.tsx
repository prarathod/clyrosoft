"use client";
import React from "react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import colors from "./color.json";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  colorScheme?: keyof typeof colors;
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "default",
  colorScheme = "primary",
  isLoading = false,
  loadingText,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  disabled,
  ...props
}) => {
  const getColorStyles = () => {
    const getColor = (colorKey: "main" | "light" | "dark") => {
      const color = colors[colorScheme];
      if (typeof color === "object" && color !== null && colorKey in color) {
        return (color as { main: string; light: string; dark: string })[
          colorKey
        ];
      }
      return typeof color === "string" ? color : undefined;
    };

    if (variant === "default" || variant === "destructive") {
      return {
        backgroundColor: getColor("main"),
        color: colors.neutral.white,
        "&:hover": {
          backgroundColor: getColor("dark"),
        },
      };
    }

    if (variant === "outline") {
      return {
        border: `1px solid ${getColor("main")}`,
        color: getColor("main"),
        "&:hover": {
          backgroundColor: getColor("light"),
          color: colors.neutral.white,
        },
      };
    }

    return {};
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 300,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
      <ShadcnButton
        variant={variant}
        size={size}
        disabled={disabled || isLoading}
        className={cn(
          getColorStyles(),
          fullWidth && "w-full",
          isLoading && "opacity-70 cursor-not-allowed",
          className
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {loadingText}
          </>
        ) : (
          <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </>
        )}
      </ShadcnButton>
    </motion.div>
  );
};
