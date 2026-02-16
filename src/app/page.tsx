import { getLatestPost, getAllPosts } from "@/lib/content";
import { BootSequence } from "@/components/terminal/BootSequence";
import { ClockWidget } from "@/components/dashboard/ClockWidget";
import { MarketTicker } from "@/components/dashboard/MarketTicker";
import { LatestEssay } from "@/components/dashboard/LatestEssay";
import { RecentProjects } from "@/components/dashboard/RecentProjects";
import { QuickLinks } from "@/components/dashboard/QuickLinks";

export default function Home() {
  const latestLetter = getLatestPost("letters");
  const projects = getAllPosts("projects").slice(0, 3);

  return (
    <BootSequence>
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Top row */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <LatestEssay post={latestLetter} />
          </div>
          <div>
            <ClockWidget />
          </div>
        </div>

        {/* Market ticker */}
        <div className="my-4">
          <MarketTicker />
        </div>

        {/* Bottom row */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <RecentProjects projects={projects} />
          </div>
          <div>
            <QuickLinks />
          </div>
        </div>
      </div>
    </BootSequence>
  );
}
