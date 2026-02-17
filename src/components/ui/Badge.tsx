import { cn } from "@/lib/utils";

import type { AccentColor } from "@/types/content";

interface BadgeProps {
  variant: "active" | "coming-soon" | "tag";
  accent?: AccentColor;
  children: React.ReactNode;
  className?: string;
}

const accentBadgeStyles: Record<AccentColor, string> = {
  red: "bg-letters-red/20 text-letters-red",
  green: "bg-bloomberg-green/20 text-bloomberg-green",
  amber: "bg-sterling-amber/20 text-sterling-amber",
  blue: "bg-movies-blue/20 text-movies-blue",
  pink: "bg-projects-pink/20 text-projects-pink",
  purple: "bg-readings-purple/20 text-readings-purple",
  cyan: "bg-system-cyan/20 text-system-cyan",
  highlight: "bg-highlight/20 text-highlight",
};

export function Badge({ variant, accent = "green", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded px-2 py-0.5 font-mono text-xs uppercase tracking-wider",
        variant === "active" && accentBadgeStyles[accent],
        variant === "coming-soon" && "bg-terminal-border text-terminal-text-dim",
        variant === "tag" && "bg-terminal-border text-terminal-text-dim",
        className
      )}
    >
      {children}
    </span>
  );
}
