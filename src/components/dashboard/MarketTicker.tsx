"use client";

import { useState, useEffect, useCallback } from "react";

interface TickerItem {
  symbol: string;
  value: string;
  change: string;
  up: boolean;
}

const FALLBACK_ITEMS: TickerItem[] = [
  { symbol: "SPX", value: "5,892.41", change: "+0.43%", up: true },
  { symbol: "NDX", value: "18,234.56", change: "+0.67%", up: true },
  { symbol: "DJI", value: "43,891.23", change: "-0.12%", up: false },
  { symbol: "BTC", value: "98,432.10", change: "+2.34%", up: true },
  { symbol: "ETH", value: "3,421.89", change: "+1.87%", up: true },
  { symbol: "10Y", value: "4.23%", change: "-0.02", up: false },
  { symbol: "DXY", value: "104.32", change: "+0.15%", up: true },
  { symbol: "GOLD", value: "2,891.40", change: "+0.31%", up: true },
  { symbol: "OIL", value: "78.92", change: "-1.23%", up: false },
  { symbol: "VIX", value: "14.32", change: "-0.45", up: false },
];

const POLL_INTERVAL = 60_000;

export function MarketTicker() {
  const [items, setItems] = useState<TickerItem[]>(FALLBACK_ITEMS);

  const fetchTicker = useCallback(async () => {
    try {
      const res = await fetch("/api/ticker");
      if (!res.ok) return;
      const data: TickerItem[] = await res.json();
      if (data.length > 0) setItems(data);
    } catch {
      // keep current data on error
    }
  }, []);

  useEffect(() => {
    fetchTicker();
    const id = setInterval(fetchTicker, POLL_INTERVAL);
    return () => clearInterval(id);
  }, [fetchTicker]);

  return (
    <div className="overflow-hidden border-y border-terminal-border bg-terminal-panel">
      <div className="flex animate-ticker whitespace-nowrap py-2">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="mx-4 inline-flex items-center gap-2 font-mono text-xs">
            <span className="text-terminal-text-dim">{item.symbol}</span>
            <span className="text-terminal-text">{item.value}</span>
            <span className={item.up ? "text-bloomberg-green" : "text-bloomberg-red"}>
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
