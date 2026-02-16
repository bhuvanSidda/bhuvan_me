"use client";

import type { Post, AccentColor } from "@/types/content";
import { PostCard } from "./PostCard";
import { motion } from "framer-motion";

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
      {posts.map((post, i) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.08 }}
        >
          <PostCard
            post={post}
            href={`${basePath}/${post.slug}`}
            accent={accent}
          />
        </motion.div>
      ))}
    </div>
  );
}
