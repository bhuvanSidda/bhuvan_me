import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { SterlingEntity } from "@/config/sterling-empire";
import { cn } from "@/lib/utils";

interface EmpireCardProps {
  entity: SterlingEntity;
}

export function EmpireCard({ entity }: EmpireCardProps) {
  const isActive = entity.status === "active";

  const card = (
    <div
      className={cn(
        "rounded border p-6 transition-all duration-200",
        isActive
          ? "border-sterling-amber/30 bg-terminal-panel hover:border-sterling-amber/60"
          : "border-terminal-border bg-terminal-panel opacity-60"
      )}
    >
      <div className="mb-3 flex items-center justify-between">
        <Badge variant={isActive ? "active" : "coming-soon"}>
          {isActive ? "Active" : "Coming Soon"}
        </Badge>
      </div>
      <h3
        className={cn(
          "mb-2 font-mono text-base font-medium",
          isActive ? "text-sterling-amber" : "text-terminal-text-dim"
        )}
      >
        {entity.name}
      </h3>
      <p className="font-mono text-xs leading-relaxed text-terminal-text-dim">
        {entity.description}
      </p>
      {isActive && (
        <span className="mt-4 inline-block font-mono text-xs text-sterling-amber">
          Learn more →
        </span>
      )}
    </div>
  );

  if (isActive && entity.href) {
    return (
      <Link href={entity.href} className="group block">
        {card}
      </Link>
    );
  }

  return card;
}
