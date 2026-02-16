import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { getAllSlugs, getPostBySlug } from "@/lib/content";
import { MarkdownRenderer } from "@/components/content/MarkdownRenderer";
import { Panel } from "@/components/ui/Panel";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs("markets").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug("markets", slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  };
}

export default async function MarketPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug("markets", slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/markets"
        className="mb-6 inline-block font-mono text-xs text-terminal-text-dim transition-colors hover:text-bloomberg-green"
      >
        ← Back to Markets
      </Link>

      <Panel title="MARKET COMMENTARY" accent="green">
        <header className="mb-8">
          <time className="font-mono text-xs text-terminal-text-dim">
            {format(new Date(post.frontmatter.date), "MMMM d, yyyy")}
          </time>
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
        <MarkdownRenderer html={post.html} />
      </Panel>
    </div>
  );
}
