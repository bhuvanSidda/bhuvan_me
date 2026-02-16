"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cursor } from "./Cursor";

const bootLines = [
  { text: "> INITIALIZING SYSTEM...", delay: 0 },
  { text: "> LOADING BHUVAN.ME v1.0.0", delay: 600 },
  { text: "> ████████████████████████ 100%", delay: 1400 },
  { text: ">", delay: 2000 },
  { text: "> NAME:     Bhuvan", delay: 2400 },
  { text: "> STATUS:   ONLINE", delay: 2800 },
  { text: ">", delay: 3200 },
  { text: "> Welcome.", delay: 3600 },
];

const BOOT_DURATION = 4800;
const SESSION_KEY = "bhuvan-me-booted";

export function BootSequence({ children }: { children: React.ReactNode }) {
  const [showBoot, setShowBoot] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isComplete, setIsComplete] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const hasBooted = sessionStorage.getItem(SESSION_KEY);
    if (hasBooted) {
      setShowBoot(false);
      setIsComplete(true);
    } else {
      setShowBoot(true);
    }
    setChecked(true);
  }, []);

  useEffect(() => {
    if (!showBoot) return;

    bootLines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines(index + 1);
      }, line.delay);
    });

    const timer = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "true");
      setIsComplete(true);
    }, BOOT_DURATION);

    return () => clearTimeout(timer);
  }, [showBoot]);

  if (!checked) {
    return <div className="min-h-screen bg-terminal-black" />;
  }

  return (
    <>
      <AnimatePresence>
        {showBoot && !isComplete && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-terminal-black"
          >
            <div className="w-full max-w-lg px-8">
              <div className="space-y-1">
                {bootLines.slice(0, visibleLines).map((line, i) => (
                  <div
                    key={i}
                    className={`font-mono text-sm ${
                      line.text.includes("ONLINE") || line.text.includes("Welcome")
                        ? "text-system-cyan"
                        : line.text.includes("████")
                        ? "text-system-cyan"
                        : "text-terminal-text-dim"
                    }`}
                  >
                    {line.text}
                  </div>
                ))}
                {visibleLines > 0 && visibleLines < bootLines.length && (
                  <div className="mt-1">
                    <Cursor />
                  </div>
                )}
                {visibleLines === bootLines.length && (
                  <div className="mt-1">
                    <span className="font-mono text-sm text-terminal-text-dim">{">"} </span>
                    <Cursor />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={showBoot ? { opacity: 0 } : { opacity: 1 }}
        animate={isComplete ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}
