import { getLatestPost, getAllPosts } from "@/lib/content";
import { BootSequence } from "@/components/terminal/BootSequence";
import { ClockWidget } from "@/components/dashboard/ClockWidget";
import { MarketTicker } from "@/components/dashboard/MarketTicker";
import { LatestEssay } from "@/components/dashboard/LatestEssay";
import { LatestMarket } from "@/components/dashboard/LatestMarket";
import { RecentProjects } from "@/components/dashboard/RecentProjects";
import { NowReading } from "@/components/dashboard/NowReading";
import { QuoteWidget } from "@/components/dashboard/QuoteWidget";

export default function Home() {
  const latestLetter = getLatestPost("letters");
  const latestMarket = getLatestPost("markets");
  const projects = getAllPosts("projects").slice(0, 3);

  return (
    <BootSequence>
      {/* Market ticker — top strip */}
      <MarketTicker />

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Top row */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <LatestEssay post={latestLetter} />
          </div>
          <div className="space-y-4">
            <ClockWidget />
            <NowReading />
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <LatestMarket post={latestMarket} />
          </div>
          <div className="space-y-4">
            <RecentProjects projects={projects} />
            <QuoteWidget />
          </div>
        </div>
      </div>
    </BootSequence>
  );
}
