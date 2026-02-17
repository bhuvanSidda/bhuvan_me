"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import type { AccentColor } from "@/types/content";

const accentColorClasses: Record<AccentColor, string> = {
  red: "text-letters-red",
  green: "text-bloomberg-green",
  amber: "text-sterling-amber",
  blue: "text-movies-blue",
  pink: "text-projects-pink",
  purple: "text-readings-purple",
  cyan: "text-system-cyan",
  highlight: "text-highlight",
  orange: "text-substack-orange",
};

const hoverColorClasses: Record<AccentColor, string> = {
  red: "hover:text-letters-red",
  green: "hover:text-bloomberg-green",
  amber: "hover:text-sterling-amber",
  blue: "hover:text-movies-blue",
  pink: "hover:text-projects-pink",
  purple: "hover:text-readings-purple",
  cyan: "hover:text-system-cyan",
  highlight: "hover:text-highlight",
  orange: "hover:text-substack-orange",
};

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex flex-col bg-terminal-black"
        >
          <div className="flex h-12 items-center justify-between border-b border-terminal-border px-4">
            <span className="font-mono text-sm text-system-cyan">
              BHUVAN.ME
            </span>
            <button
              onClick={onClose}
              className="font-mono text-sm text-terminal-text-dim hover:text-terminal-text"
              aria-label="Close menu"
            >
              [ESC]
            </button>
          </div>

          <div className="flex flex-1 flex-col justify-center px-8">
            <div className="space-y-1">
              <p className="mb-4 font-mono text-xs text-terminal-text-dim">
                {">"} SELECT DESTINATION:
              </p>
              {navItems.map((item, i) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                        className={cn(
                          "block py-3 font-mono text-lg tracking-wider transition-colors",
                          cn("text-terminal-text-dim", hoverColorClasses[item.accent])
                        )}
                      >
                        <span className="text-terminal-text-dim">
                          {String(i + 1).padStart(2, "0")}{" "}
                        </span>
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          "block py-3 font-mono text-lg tracking-wider transition-colors",
                          isActive
                            ? accentColorClasses[item.accent]
                            : cn("text-terminal-text-dim", hoverColorClasses[item.accent])
                        )}
                      >
                        <span className="text-terminal-text-dim">
                          {String(i + 1).padStart(2, "0")}{" "}
                        </span>
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="border-t border-terminal-border px-8 py-4">
            <p className="font-mono text-xs text-terminal-text-dim">
              {">"} Press ESC or tap [ESC] to close
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
