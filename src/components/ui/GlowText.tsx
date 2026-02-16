import { cn } from "@/lib/utils";

interface GlowTextProps {
  children: React.ReactNode;
  color?: "green" | "amber";
  className?: string;
}

export function GlowText({ children, color = "green", className }: GlowTextProps) {
  return (
    <span
      className={cn(
        color === "green" && "text-bloomberg-green drop-shadow-[0_0_8px_rgba(0,210,106,0.4)]",
        color === "amber" && "text-sterling-amber drop-shadow-[0_0_8px_rgba(240,165,0,0.4)]",
        className
      )}
    >
      {children}
    </span>
  );
}
