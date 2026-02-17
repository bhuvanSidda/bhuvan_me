import { Panel } from "@/components/ui/Panel";

export function LatestMarket() {
  return (
    <Panel title="MARKET COMMENTARY" accent="green">
      <a
        href="https://bdsterling.substack.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <p className="font-mono text-sm text-terminal-text-dim">
          {">"} Market commentary has moved to Substack.
        </p>
        <span className="mt-3 inline-block font-mono text-xs text-bloomberg-green transition-colors group-hover:text-bloomberg-green/80">
          Read on Substack →
        </span>
      </a>
    </Panel>
  );
}
