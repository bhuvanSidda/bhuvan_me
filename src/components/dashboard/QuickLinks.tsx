import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import { navItems } from "@/config/navigation";
import type { AccentColor } from "@/types/content";

const hoverColorClasses: Record<AccentColor, string> = {
  red: "hover:text-letters-red group-hover:text-letters-red",
  green: "hover:text-bloomberg-green group-hover:text-bloomberg-green",
  amber: "hover:text-sterling-amber group-hover:text-sterling-amber",
  blue: "hover:text-movies-blue group-hover:text-movies-blue",
  pink: "hover:text-projects-pink group-hover:text-projects-pink",
  purple: "hover:text-readings-purple group-hover:text-readings-purple",
  cyan: "hover:text-system-cyan group-hover:text-system-cyan",
  highlight: "hover:text-highlight group-hover:text-highlight",
};

export function QuickLinks() {
  return (
    <Panel title="QUICK LINKS">
      <div className="space-y-2">
        {navItems.map((item, i) => {
          const className = `group flex items-center gap-2 font-mono text-sm text-terminal-text-dim transition-colors ${hoverColorClasses[item.accent]}`;
          const children = (
            <>
              <span className="text-terminal-text-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={`transition-colors ${hoverColorClasses[item.accent]}`}>
                {item.label}
              </span>
            </>
          );
          return item.external ? (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {children}
            </a>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className={className}
            >
              {children}
            </Link>
          );
        })}
      </div>
    </Panel>
  );
}
