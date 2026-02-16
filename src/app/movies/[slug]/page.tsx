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
  return getAllSlugs("movies").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug("movies", slug);
  if (!post) return {};
  return {
    title: `${post.frontmatter.title} — Movie Review`,
    description: post.frontmatter.excerpt,
  };
}

export default async function MovieReviewPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug("movies", slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/movies"
        className="mb-6 inline-block font-mono text-xs text-terminal-text-dim transition-colors hover:text-movies-blue"
      >
        ← Back to Movies
      </Link>

      <Panel title="MOVIE REVIEW" accent="blue">
        <header className="mb-8">
          <div className="flex items-center gap-4">
            <time className="font-mono text-xs text-terminal-text-dim">
              {format(new Date(post.frontmatter.date), "MMMM d, yyyy")}
            </time>
            {post.frontmatter.rating && (
              <span className="font-mono text-xs text-movies-blue">
                Rating: {post.frontmatter.rating}/10
              </span>
            )}
          </div>
          <h1 className="mt-2 font-mono text-2xl font-bold text-white">
            {post.frontmatter.title}
          </h1>
          {(post.frontmatter.director || post.frontmatter.year) && (
            <p className="mt-1 font-mono text-xs text-terminal-text-dim">
              {post.frontmatter.director} · {post.frontmatter.year}
            </p>
          )}
        </header>
        <MarkdownRenderer html={post.html} accent="blue" />
      </Panel>
    </div>
  );
}
