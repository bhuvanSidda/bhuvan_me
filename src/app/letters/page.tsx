import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import { PostList } from "@/components/content/PostList";
import { Panel } from "@/components/ui/Panel";

export const metadata: Metadata = {
  title: "Letters",
  description: "Essays and letters about life, ambition, and the world.",
};

export default function LettersPage() {
  const posts = getAllPosts("letters");

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Panel title="LETTERS" accent="green">
        <p className="mb-6 font-mono text-xs text-terminal-text-dim">
          {">"} Essays and letters about life, ambition, and the world.
        </p>
        <PostList posts={posts} basePath="/letters" accent="green" />
      </Panel>
    </div>
  );
}
