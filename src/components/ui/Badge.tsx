import { cn } from "@/lib/utils";

interface BadgeProps {
  variant: "active" | "coming-soon" | "tag";
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded px-2 py-0.5 font-mono text-xs uppercase tracking-wider",
        variant === "active" && "bg-bloomberg-green/20 text-bloomberg-green",
        variant === "coming-soon" && "bg-terminal-border text-terminal-text-dim",
        variant === "tag" && "bg-terminal-border text-terminal-text-dim",
        className
      )}
    >
      {children}
    </span>
  );
}
