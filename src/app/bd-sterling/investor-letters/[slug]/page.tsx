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
  return getAllSlugs("bd-sterling/investor-letters").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug("bd-sterling/investor-letters", slug);
  if (!post) return {};
  return {
    title: `${post.frontmatter.title} — BD Sterling`,
    description: post.frontmatter.excerpt,
  };
}

export default async function InvestorLetterPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug("bd-sterling/investor-letters", slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/bd-sterling/investor-letters"
        className="mb-6 inline-block font-mono text-xs text-terminal-text-dim transition-colors hover:text-sterling-amber"
      >
        ← Back to Investor Letters
      </Link>

      <Panel title="INVESTOR LETTER" accent="amber">
        <header className="mb-8">
          <time className="font-mono text-xs text-terminal-text-dim">
            {format(new Date(post.frontmatter.date), "MMMM d, yyyy")}
          </time>
          <h1 className="mt-2 font-mono text-2xl font-bold text-sterling-amber">
            {post.frontmatter.title}
          </h1>
        </header>
        <MarkdownRenderer html={post.html} amber />
      </Panel>
    </div>
  );
}
