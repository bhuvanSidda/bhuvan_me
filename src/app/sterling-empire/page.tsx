import type { Metadata } from "next";
import { Panel } from "@/components/ui/Panel";
import { EmpireCard } from "@/components/sterling/EmpireCard";
import { sterlingEntities } from "@/config/sterling-empire";

export const metadata: Metadata = {
  title: "Sterling Empire",
  description: "The Sterling Empire — a portfolio of businesses, studios, and foundations.",
};

export default function SterlingEmpirePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Panel title="STERLING EMPIRE" accent="amber">
        <p className="mb-6 font-mono text-xs text-terminal-text-dim">
          {">"} A portfolio of businesses, studios, and foundations.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {sterlingEntities.map((entity) => (
            <EmpireCard key={entity.name} entity={entity} />
          ))}
        </div>
      </Panel>
    </div>
  );
}
