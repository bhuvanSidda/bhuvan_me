import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import { PostList } from "@/components/content/PostList";
import { Panel } from "@/components/ui/Panel";
import { PageTransition } from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: "Readings",
  description: "Book notes, reviews, and reading recommendations.",
};

export default function ReadingsPage() {
  const posts = getAllPosts("readings");

  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-4 py-8">
        <Panel title="READINGS" accent="purple">
          <p className="mb-6 font-mono text-xs text-terminal-text-dim">
            {">"} Book notes, reviews, and reading recommendations.
          </p>
          <PostList posts={posts} basePath="/readings" accent="purple" />
        </Panel>
      </div>
    </PageTransition>
  );
}
