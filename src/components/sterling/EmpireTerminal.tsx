"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";

export function EmpireTerminal() {
  const [buffer, setBuffer] = useState("");
  const [flash, setFlash] = useState(false);
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetBuffer = useCallback(() => {
    setBuffer("");
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const key = e.key.toLowerCase();
      if (key.length !== 1 || key < "a" || key > "z") return;

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      setBuffer((prev) => {
        const next = prev + key;

        if ("empire".startsWith(next)) {
          if (next === "empire") {
            setFlash(true);
            setTimeout(() => {
              router.push("/sterling-empire");
            }, 400);
            return next;
          }
          return next;
        }

        // Wrong key — reset to just this key if it's "e", otherwise clear
        return key === "e" ? "e" : "";
      });

      timeoutRef.current = setTimeout(resetBuffer, 3000);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [resetBuffer, router]);

  return (
    <>
      {flash && (
        <div className="fixed inset-0 z-50 animate-pulse bg-bloomberg-green/20 pointer-events-none" />
      )}
      <div className="mt-6 font-mono text-xs text-terminal-text-dim/30 select-none">
        <span>&gt; </span>
        <span className="text-terminal-text-dim/50">{buffer}</span>
        <span className="animate-pulse">_</span>
      </div>
    </>
  );
}
