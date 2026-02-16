import { cn } from "@/lib/utils";

interface GlowTextProps {
  children: React.ReactNode;
  color?: "red" | "green" | "amber" | "blue" | "pink" | "purple" | "cyan";
  className?: string;
}

const glowStyles: Record<string, string> = {
  red: "text-letters-red drop-shadow-[0_0_8px_rgba(221,55,55,0.4)]",
  green: "text-bloomberg-green drop-shadow-[0_0_8px_rgba(0,210,106,0.4)]",
  amber: "text-sterling-amber drop-shadow-[0_0_8px_rgba(240,165,0,0.4)]",
  blue: "text-movies-blue drop-shadow-[0_0_8px_rgba(74,158,255,0.4)]",
  pink: "text-projects-pink drop-shadow-[0_0_8px_rgba(228,65,144,0.4)]",
  purple: "text-readings-purple drop-shadow-[0_0_8px_rgba(167,139,250,0.4)]",
  cyan: "text-system-cyan drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]",
};

export function GlowText({ children, color = "green", className }: GlowTextProps) {
  return (
    <span className={cn(glowStyles[color], className)}>
      {children}
    </span>
  );
}
