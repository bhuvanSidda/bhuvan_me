"use client";

import { cn } from "@/lib/utils";
import type { AccentColor } from "@/types/content";

interface PanelProps {
  title?: string;
  accent?: AccentColor;
  children: React.ReactNode;
  className?: string;
}

const accentStyles: Record<AccentColor, string> = {
  red: "border-letters-red/30 text-letters-red",
  green: "border-bloomberg-green/30 text-bloomberg-green",
  amber: "border-sterling-amber/30 text-sterling-amber",
  blue: "border-movies-blue/30 text-movies-blue",
  pink: "border-projects-pink/30 text-projects-pink",
  purple: "border-readings-purple/30 text-readings-purple",
  cyan: "border-system-cyan/30 text-system-cyan",
  highlight: "border-highlight/30 text-highlight",
  orange: "border-substack-orange/30 text-substack-orange",
};

export function Panel({ title, accent = "green", children, className }: PanelProps) {
  return (
    <div
      className={cn(
        "rounded border border-terminal-border bg-terminal-panel",
        className
      )}
    >
      {title && (
        <div
          className={cn(
            "border-b px-4 py-2 font-mono text-xs uppercase tracking-wider",
            accentStyles[accent]
          )}
        >
          {title}
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
}
