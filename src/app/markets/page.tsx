import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import { PostList } from "@/components/content/PostList";
import { Panel } from "@/components/ui/Panel";

export const metadata: Metadata = {
  title: "Markets",
  description: "Market commentary and analysis.",
};

export default function MarketsPage() {
  const posts = getAllPosts("markets");

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Panel title="MARKETS" accent="green">
        <p className="mb-6 font-mono text-xs text-terminal-text-dim">
          {">"} Market commentary and analysis.
        </p>
        <PostList posts={posts} basePath="/markets" accent="green" />
      </Panel>
    </div>
  );
}
