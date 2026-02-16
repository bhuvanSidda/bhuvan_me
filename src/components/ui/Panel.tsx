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
  green: "border-bloomberg-green/30 text-bloomberg-green",
  amber: "border-sterling-amber/30 text-sterling-amber",
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
