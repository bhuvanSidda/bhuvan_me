import type { Metadata } from "next";
import { Panel } from "@/components/ui/Panel";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research — BD Sterling",
  description: "Investment research and market analysis from BD Sterling Capital Management.",
};

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Link
        href="/bd-sterling"
        className="mb-6 inline-block font-mono text-xs text-terminal-text-dim transition-colors hover:text-sterling-amber"
      >
        ← Back to BD Sterling
      </Link>

      <Panel title="RESEARCH" accent="amber">
        <div className="space-y-6">
          <p className="font-sans text-sm leading-relaxed text-terminal-text">
            Our research combines deep fundamental analysis with a macro-aware perspective.
            We publish our thinking on markets, individual businesses, and the broader
            investment landscape.
          </p>

          <div className="rounded border border-sterling-amber/30 bg-sterling-amber/5 p-6">
            <h3 className="mb-2 font-mono text-sm font-bold text-sterling-amber">
              Subscribe to Our Research
            </h3>
            <p className="mb-4 font-sans text-sm text-terminal-text-dim">
              Get our latest research and market commentary delivered to your inbox.
            </p>
            <a
              href="https://substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-sterling-amber px-4 py-2 font-mono text-sm font-medium text-terminal-black transition-colors hover:bg-sterling-amber/90"
            >
              Read our research →
            </a>
          </div>
        </div>
      </Panel>
    </div>
  );
}
