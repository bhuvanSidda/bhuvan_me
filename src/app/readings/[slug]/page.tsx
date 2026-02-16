import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { getAllSlugs, getPostBySlug } from "@/lib/content";
import { getReadingTime } from "@/lib/reading-time";
import { MarkdownRenderer } from "@/components/content/MarkdownRenderer";
import { Panel } from "@/components/ui/Panel";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs("readings").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug("readings", slug);
  if (!post) return {};
  return {
    title: `${post.frontmatter.title} — Reading Notes`,
    description: post.frontmatter.excerpt,
  };
}

export default async function ReadingNotePage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug("readings", slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/readings"
        className="mb-6 inline-block font-mono text-xs text-terminal-text-dim transition-colors hover:text-readings-purple"
      >
        ← Back to Readings
      </Link>

      <Panel title="READING NOTES" accent="purple">
        <header className="mb-8">
          <div className="flex items-center gap-3">
            <time className="font-mono text-xs text-terminal-text-dim">
              {format(new Date(post.frontmatter.date), "MMMM d, yyyy")}
            </time>
            <span className="font-mono text-xs text-terminal-text-dim">
              · {getReadingTime(post.content)} min read
            </span>
          </div>
          <h1 className="mt-2 font-mono text-2xl font-bold text-white">
            {post.frontmatter.title}
          </h1>
          {post.frontmatter.tags && (
            <div className="mt-2 flex gap-2">
              {post.frontmatter.tags.map((tag) => (
                <span key={tag} className="font-mono text-xs text-terminal-text-dim">
                  [{tag}]
                </span>
              ))}
            </div>
          )}
        </header>
        <MarkdownRenderer html={post.html} accent="purple" />
      </Panel>
    </div>
  );
}
