import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <div
      style={{ animationDelay: `${delay}s` }}
      className={`${className ?? ""} reveal-in`}
    >
      {children}
    </div>
  );
}
