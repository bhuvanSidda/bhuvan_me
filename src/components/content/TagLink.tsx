"use client";

import { useRouter } from "next/navigation";
import type { AccentColor } from "@/types/content";

interface TagLinkProps {
  tag: string;
  accent?: AccentColor;
}

const hoverColors: Record<AccentColor, string> = {
  red: "hover:text-letters-red",
  green: "hover:text-bloomberg-green",
  amber: "hover:text-sterling-amber",
  blue: "hover:text-movies-blue",
  pink: "hover:text-projects-pink",
  purple: "hover:text-readings-purple",
  cyan: "hover:text-system-cyan",
};

export function TagLink({ tag, accent = "green" }: TagLinkProps) {
  const router = useRouter();

  return (
    <span
      role="link"
      tabIndex={0}
      className={`cursor-pointer font-mono text-xs text-terminal-text-dim transition-colors ${hoverColors[accent]}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        router.push(`/tags/${encodeURIComponent(tag)}`);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          e.stopPropagation();
          router.push(`/tags/${encodeURIComponent(tag)}`);
        }
      }}
    >
      [{tag}]
    </span>
  );
}
