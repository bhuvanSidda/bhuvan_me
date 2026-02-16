import type { Metadata } from "next";
import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import { EmpireTerminal } from "@/components/sterling/EmpireTerminal";

export const metadata: Metadata = {
  title: "BD Sterling Capital Management",
  description: "Investment research and capital allocation focused on long-term value creation.",
};

export default function BDSterlingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Panel title="BD STERLING CAPITAL MANAGEMENT" accent="amber">
        <div className="space-y-6">
          <div>
            <h2 className="mb-3 font-mono text-lg font-bold text-sterling-amber">
              About
            </h2>
            <p className="font-sans text-sm leading-relaxed text-terminal-text">
              BD Sterling Capital Management is a research-driven investment firm focused on
              long-term value creation through disciplined capital allocation.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-mono text-lg font-bold text-sterling-amber">
              Philosophy
            </h2>
            <ul className="space-y-2 font-sans text-sm text-terminal-text">
              <li className="flex items-start gap-2">
                <span className="text-sterling-amber">▸</span>
                <span><strong className="text-white">Long-term thinking</strong> — We measure our performance in years, not quarters</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sterling-amber">▸</span>
                <span><strong className="text-white">Quality over quantity</strong> — We concentrate our capital in our highest-conviction ideas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sterling-amber">▸</span>
                <span><strong className="text-white">Margin of safety</strong> — We buy businesses at prices that provide a margin of safety</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sterling-amber">▸</span>
                <span><strong className="text-white">Intellectual honesty</strong> — We rigorously challenge our own assumptions</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 pt-4 sm:flex-row">
            <Link
              href="/bd-sterling/research"
              className="rounded border border-sterling-amber/30 px-4 py-2 text-center font-mono text-sm text-sterling-amber transition-colors hover:bg-sterling-amber/10"
            >
              Research →
            </Link>
            <Link
              href="/bd-sterling/investor-letters"
              className="rounded border border-sterling-amber/30 px-4 py-2 text-center font-mono text-sm text-sterling-amber transition-colors hover:bg-sterling-amber/10"
            >
              Investor Letters →
            </Link>
            <Link
              href="/bd-sterling/disclaimer"
              className="rounded border border-terminal-border px-4 py-2 text-center font-mono text-sm text-terminal-text-dim transition-colors hover:text-terminal-text"
            >
              Disclaimer
            </Link>
          </div>

          <EmpireTerminal />
        </div>
      </Panel>
    </div>
  );
}
