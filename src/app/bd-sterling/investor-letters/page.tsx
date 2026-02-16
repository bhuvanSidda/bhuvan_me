import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import { PostList } from "@/components/content/PostList";
import { Panel } from "@/components/ui/Panel";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investor Letters — BD Sterling",
  description: "Letters to investors from BD Sterling Capital Management.",
};

export default function InvestorLettersPage() {
  const posts = getAllPosts("bd-sterling/investor-letters");

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Link
        href="/bd-sterling"
        className="mb-6 inline-block font-mono text-xs text-terminal-text-dim transition-colors hover:text-sterling-amber"
      >
        ← Back to BD Sterling
      </Link>

      <Panel title="INVESTOR LETTERS" accent="amber">
        <p className="mb-6 font-mono text-xs text-terminal-text-dim">
          {">"} Letters to our investors and partners.
        </p>
        <PostList posts={posts} basePath="/bd-sterling/investor-letters" accent="amber" />
      </Panel>
    </div>
  );
}
