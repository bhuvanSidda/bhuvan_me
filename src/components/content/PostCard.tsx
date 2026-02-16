import Link from "next/link";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import type { Post, AccentColor } from "@/types/content";
import { TagLink } from "@/components/content/TagLink";

interface PostCardProps {
  post: Post;
  href: string;
  accent?: AccentColor;
}

const accentColors: Record<AccentColor, string> = {
  red: "hover:border-letters-red/50 group-hover:text-letters-red",
  green: "hover:border-bloomberg-green/50 group-hover:text-bloomberg-green",
  amber: "hover:border-sterling-amber/50 group-hover:text-sterling-amber",
  blue: "hover:border-movies-blue/50 group-hover:text-movies-blue",
  pink: "hover:border-projects-pink/50 group-hover:text-projects-pink",
  purple: "hover:border-readings-purple/50 group-hover:text-readings-purple",
  cyan: "hover:border-system-cyan/50 group-hover:text-system-cyan",
};

export function PostCard({ post, href, accent = "green" }: PostCardProps) {
  return (
    <Link href={href} className="group block">
      <article
        className={cn(
          "rounded border border-terminal-border bg-terminal-panel p-4 transition-all duration-200",
          accentColors[accent]
        )}
      >
        <div className="mb-2 flex items-center gap-3">
          <time className="font-mono text-xs text-terminal-text-dim">
            {format(new Date(post.frontmatter.date), "yyyy.MM.dd")}
          </time>
          {post.frontmatter.tags?.slice(0, 2).map((tag) => (
            <TagLink key={tag} tag={tag} accent={accent} />
          ))}
        </div>
        <h3
          className={cn(
            "mb-1 font-mono text-sm font-medium text-terminal-text transition-colors",
            accentColors[accent]
          )}
        >
          {post.frontmatter.title}
        </h3>
        {post.frontmatter.excerpt && (
          <p className="font-mono text-xs leading-relaxed text-terminal-text-dim">
            {post.frontmatter.excerpt}
          </p>
        )}
      </article>
    </Link>
  );
}
