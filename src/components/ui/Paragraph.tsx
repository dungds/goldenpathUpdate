// components/Paragraph.tsx
import { ReactNode } from "react";

type ParagraphProps = {
  size?: "sm" | "base" | "lg";
  className?: string;
  children: ReactNode;
};

const paragraphClasses = {
  sm: "text-sm leading-relaxed text-justify ",
  base: "text-base leading-relaxed text-justify ",
  lg: "text-lg leading-relaxed text-justify ",
};

export function Paragraph({
  size = "base",
  className = "",
  children,
}: ParagraphProps) {
  return <p className={`${paragraphClasses[size]} ${className}`}>{children}</p>;
}
