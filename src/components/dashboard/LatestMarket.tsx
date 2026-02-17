import { Panel } from "@/components/ui/Panel";

export function LatestMarket() {
  return (
    <Panel title="SUBSTACK" accent="orange">
      <a
        href="https://bdsterling.substack.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <h3 className="font-mono text-base font-medium text-terminal-text transition-colors group-hover:text-bloomberg-green">
          BD Sterling
        </h3>
        <p className="mt-2 font-mono text-xs leading-relaxed text-terminal-text-dim">
          Markets, investing, and philosophy.
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-substack-orange transition-colors group-hover:text-substack-orange/80">
          Subscribe on Substack
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </span>
      </a>
    </Panel>
  );
}
