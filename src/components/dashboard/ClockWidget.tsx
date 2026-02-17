"use client";

import { useEffect, useState } from "react";
import { Panel } from "@/components/ui/Panel";

export function ClockWidget() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) {
    return (
      <Panel title="CLOCK" accent="highlight">
        <div className="flex flex-col items-center py-2">
          <div className="font-mono text-2xl text-highlight">--:--:--</div>
          <div className="mt-1 font-mono text-xs text-terminal-text-dim">Loading...</div>
        </div>
      </Panel>
    );
  }

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  const dateStr = time.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Panel title="CLOCK" accent="highlight">
      <div className="flex flex-col items-center py-2">
        <div className="font-mono text-2xl text-highlight">
          {hours}:{minutes}:{seconds}
        </div>
        <div className="mt-1 font-mono text-xs text-terminal-text-dim">
          {dateStr}
        </div>
      </div>
    </Panel>
  );
}
