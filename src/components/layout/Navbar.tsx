"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";
import type { AccentColor } from "@/types/content";

const accentColorClasses: Record<AccentColor, string> = {
  red: "text-letters-red",
  green: "text-bloomberg-green",
  amber: "text-sterling-amber",
  blue: "text-movies-blue",
  pink: "text-projects-pink",
  purple: "text-readings-purple",
  cyan: "text-system-cyan",
};

const hoverColorClasses: Record<AccentColor, string> = {
  red: "hover:text-letters-red",
  green: "hover:text-bloomberg-green",
  amber: "hover:text-sterling-amber",
  blue: "hover:text-movies-blue",
  pink: "hover:text-projects-pink",
  purple: "hover:text-readings-purple",
  cyan: "hover:text-system-cyan",
};

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-terminal-border bg-terminal-black/90 backdrop-blur-sm">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4">
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-wider text-system-cyan transition-colors hover:text-system-cyan/80"
        >
          BHUVAN.ME
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-mono text-xs tracking-wider transition-colors",
                  isActive
                    ? accentColorClasses[item.accent]
                    : cn("text-terminal-text-dim", hoverColorClasses[item.accent])
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="flex flex-col gap-1 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-5 bg-terminal-text-dim" />
          <span className="block h-0.5 w-5 bg-terminal-text-dim" />
          <span className="block h-0.5 w-5 bg-terminal-text-dim" />
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </nav>
  );
}
