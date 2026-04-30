import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface GlowingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  active?: boolean;
}

export const GlowingButton = forwardRef<HTMLButtonElement, GlowingButtonProps>(
  ({ className, children, variant = "default", size = "default", active = false, ...props }, ref) => {
    return (
      <div className={cn("relative inline-flex", active && "glowing-box-active")}>
        <Button
          ref={ref}
          variant={variant}
          size={size}
          className={cn(
            "relative z-10",
            variant === "default" && "bg-gradient-to-r from-[#239DFF] to-[#4A3DFF] hover:opacity-90 transition-opacity",
            className
          )}
          {...props}
        >
          {children}
        </Button>
        <div className="glowing-box pointer-events-none">
          <div className="glowing-box-animations">
            <div className="glowing-box-glow"></div>
          </div>
          <div className="glowing-box-borders-masker">
            <div className="glowing-box-borders"></div>
          </div>
        </div>
      </div>
    );
  }
);

GlowingButton.displayName = "GlowingButton";
