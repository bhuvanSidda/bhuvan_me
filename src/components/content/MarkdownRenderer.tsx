import { cn } from "@/lib/utils";
import type { AccentColor } from "@/types/content";

interface MarkdownRendererProps {
  html: string;
  className?: string;
  accent?: AccentColor;
  /** @deprecated Use accent="amber" instead */
  amber?: boolean;
}

const proseClasses: Record<AccentColor, string> = {
  red: "prose-red",
  green: "",
  amber: "prose-amber",
  blue: "prose-blue",
  pink: "prose-pink",
  purple: "prose-purple",
  cyan: "",
};

export function MarkdownRenderer({ html, className, accent, amber }: MarkdownRendererProps) {
  const resolvedAccent = accent ?? (amber ? "amber" : "green");

  return (
    <article
      className={cn(
        "prose prose-lg max-w-none font-sans",
        proseClasses[resolvedAccent],
        className
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
