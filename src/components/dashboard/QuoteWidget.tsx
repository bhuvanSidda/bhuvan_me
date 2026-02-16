"use client";

import { useState, useEffect } from "react";
import { Panel } from "@/components/ui/Panel";
import { quotes } from "@/config/quotes";

export function QuoteWidget() {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const index = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[index]);
  }, []);

  return (
    <Panel title="QUOTE" accent="cyan">
      <blockquote className="border-l-2 border-system-cyan/30 pl-3">
        <p className="font-sans text-sm leading-relaxed text-terminal-text-dim italic">
          &ldquo;{quote.text}&rdquo;
        </p>
        <footer className="mt-2 font-mono text-xs text-terminal-text-dim">
          — {quote.author}
        </footer>
      </blockquote>
    </Panel>
  );
}
