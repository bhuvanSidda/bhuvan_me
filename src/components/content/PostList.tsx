import type { Post, AccentColor } from "@/types/content";
import { PostCard } from "./PostCard";

interface PostListProps {
  posts: Post[];
  basePath: string;
  accent?: AccentColor;
}

export function PostList({ posts, basePath, accent = "green" }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="rounded border border-terminal-border bg-terminal-panel p-8 text-center">
        <p className="font-mono text-sm text-terminal-text-dim">
          {">"} No entries found. Check back soon.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          post={post}
          href={`${basePath}/${post.slug}`}
          accent={accent}
        />
      ))}
    </div>
  );
}
