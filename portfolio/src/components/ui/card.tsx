"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "elevated";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl transition-all duration-300",
          {
            "bg-white/5 backdrop-blur-xl border border-white/10": variant === "glass",
            "bg-white/5 border border-white/10": variant === "default",
            "bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl": variant === "elevated",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card };
