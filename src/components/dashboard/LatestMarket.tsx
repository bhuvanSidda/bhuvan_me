import Link from "next/link";
import { format } from "date-fns";
import { Panel } from "@/components/ui/Panel";
import type { Post } from "@/types/content";

interface LatestMarketProps {
  post: Post | null;
}

export function LatestMarket({ post }: LatestMarketProps) {
  if (!post) {
    return (
      <Panel title="LATEST MARKET COMMENTARY" accent="green">
        <p className="font-mono text-sm text-terminal-text-dim">
          {">"} No market commentary yet. Check back soon.
        </p>
      </Panel>
    );
  }

  return (
    <Panel title="LATEST MARKET COMMENTARY" accent="green">
      <Link href={`/markets/${post.slug}`} className="group block">
        <time className="font-mono text-xs text-terminal-text-dim">
          {format(new Date(post.frontmatter.date), "yyyy.MM.dd")}
        </time>
        <h3 className="mt-1 font-mono text-base font-medium text-terminal-text transition-colors group-hover:text-bloomberg-green">
          {post.frontmatter.title}
        </h3>
        <p className="mt-2 font-mono text-xs leading-relaxed text-terminal-text-dim">
          {post.frontmatter.excerpt}
        </p>
        <span className="mt-3 inline-block font-mono text-xs text-bloomberg-green">
          Read analysis →
        </span>
      </Link>
    </Panel>
  );
}
