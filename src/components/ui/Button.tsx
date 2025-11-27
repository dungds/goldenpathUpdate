// src/components/ui/Button.tsx
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "default" | "outline" | "ghost" | "light" | "dark" | "submit";
type Size = "default" | "sm" | "lg";

interface SharedProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps =
  | (SharedProps &
      ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

const buttonVariants = {
  base: "inline-flex align-center items-center justify-center  font-medium focus:outline-none  transition-all duration-300 ease-in-out text-center content-center",
  variant: {
    default: "bg-primary text-text-primary hover:bg-primary-dark",
    outline: "border border-white hover:bg-white hover:text-text-primary",
    ghost: "bg-transparent hover:bg-gray-100",
    light: "bg-white text-black hover:bg-[#FFF2D9]",
    dark: "bg-black text-white hover:bg-wwhite",
    submit: "bg-blue-600  text-white hover:bg-blue-700",
  },
  size: {
    default: "h-10 px-6 text-base",
    sm: "h-8 px-3 text-sm",
    lg: "h-12 px-6 text-lg",
  },
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    { className, variant = "default", size = "default", href, ...props },
    ref
  ) => {
    const classes = cn(
      buttonVariants.base,
      buttonVariants.variant[variant],
      buttonVariants.size[size],
      className
    );

    if (href) {
      return (
        <Link
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {props.children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cn(classes, "text-center")}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    );
  }
);

Button.displayName = "Button";
