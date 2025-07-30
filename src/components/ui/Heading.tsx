// components/Heading.tsx
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

export function H1({ children, className = "" }: HeadingProps) {
  return (
    <h1
      className={twMerge(
        "text-2xl md:text-3xl lg:text-5xl font-bold",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className = "" }: HeadingProps) {
  return (
    <h2 className={twMerge("text-2xl md:text-3xl font-semibold", className)}>
      {children}
    </h2>
  );
}

export function H3({ children, className = "" }: HeadingProps) {
  return (
    <h3 className={twMerge("text-xl md:text-2xl font-semibold", className)}>
      {children}
    </h3>
  );
}

export function H4({ children, className = "" }: HeadingProps) {
  return (
    <h4
      className={twMerge(
        "text-[1.125rem] md:text-[1.25rem] font-medium",
        className
      )}
    >
      {children}
    </h4>
  );
}
