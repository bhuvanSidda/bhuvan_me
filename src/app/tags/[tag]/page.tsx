import type { Metadata } from "next";
import Link from "next/link";
import { format } from "date-fns";
import { getAllTags, getPostsByTag, taggableSections } from "@/lib/content";
import { Panel } from "@/components/ui/Panel";
import { TagLink } from "@/components/content/TagLink";
import { PageTransition } from "@/components/ui/PageTransition";
import type { ContentSection, AccentColor } from "@/types/content";

interface Props {
  params: Promise<{ tag: string }>;
}

const sectionConfig: Record<ContentSection, { accent: AccentColor; label: string; path: string }> = {
  letters: { accent: "red", label: "Letters", path: "/letters" },
  markets: { accent: "green", label: "Markets", path: "/markets" },
  movies: { accent: "blue", label: "Movies", path: "/movies" },
  projects: { accent: "pink", label: "Projects", path: "/projects" },
  readings: { accent: "purple", label: "Readings", path: "/readings" },
  "bd-sterling/investor-letters": { accent: "amber", label: "BD Sterling", path: "/bd-sterling/investor-letters" },
};

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  return {
    title: `[${decoded}] — Tagged Posts`,
    description: `All posts tagged with "${decoded}"`,
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const posts = getPostsByTag(decoded);

  // Group posts by section
  const grouped = new Map<ContentSection, typeof posts>();
  for (const post of posts) {
    const existing = grouped.get(post.section) || [];
    existing.push(post);
    grouped.set(post.section, existing);
  }

  // Order sections by taggableSections order
  const orderedSections = taggableSections
    .map((s) => s.section)
    .filter((s) => grouped.has(s));

  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-4 py-8">
        <Link
          href="/"
          className="mb-6 inline-block font-mono text-xs text-terminal-text-dim transition-colors hover:text-bloomberg-green"
        >
          ← Home
        </Link>

        <div className="mb-6">
          <h1 className="font-mono text-xl text-white">
            Posts tagged <span className="text-bloomberg-green">[{decoded}]</span>
          </h1>
          <p className="mt-1 font-mono text-xs text-terminal-text-dim">
            {posts.length} {posts.length === 1 ? "post" : "posts"} found
          </p>
        </div>

        {posts.length === 0 ? (
          <Panel title="NO RESULTS">
            <p className="font-mono text-sm text-terminal-text-dim">
              {">"} No posts found with tag [{decoded}].
            </p>
          </Panel>
        ) : (
          <div className="space-y-6">
            {orderedSections.map((section) => {
              const config = sectionConfig[section];
              const sectionPosts = grouped.get(section)!;
              return (
                <Panel key={section} title={config.label} accent={config.accent}>
                  <div className="space-y-3">
                    {sectionPosts.map((post) => (
                      <Link
                        key={`${section}-${post.slug}`}
                        href={`${config.path}/${post.slug}`}
                        className="group block"
                      >
                        <div className="rounded border border-terminal-border bg-terminal-black p-3 transition-all duration-200 hover:border-terminal-text-dim/30">
                          <div className="mb-1 flex items-center gap-3">
                            <time className="font-mono text-xs text-terminal-text-dim">
                              {format(new Date(post.frontmatter.date), "yyyy.MM.dd")}
                            </time>
                            {post.frontmatter.tags
                              ?.filter((t) => t !== decoded)
                              .slice(0, 2)
                              .map((t) => (
                                <TagLink key={t} tag={t} accent={config.accent} />
                              ))}
                          </div>
                          <h3 className="font-mono text-sm text-terminal-text transition-colors group-hover:text-white">
                            {post.frontmatter.title}
                          </h3>
                          {post.frontmatter.excerpt && (
                            <p className="mt-1 font-mono text-xs leading-relaxed text-terminal-text-dim">
                              {post.frontmatter.excerpt}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </Panel>
              );
            })}
          </div>
        )}
      </div>
    </PageTransition>
  );
}
