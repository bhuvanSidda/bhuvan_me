import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import { navItems } from "@/config/navigation";

export function QuickLinks() {
  return (
    <Panel title="QUICK LINKS">
      <div className="space-y-2">
        {navItems.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-center gap-2 font-mono text-sm text-terminal-text-dim transition-colors hover:text-bloomberg-green"
          >
            <span className="text-terminal-text-dim">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="transition-colors group-hover:text-bloomberg-green">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </Panel>
  );
}
