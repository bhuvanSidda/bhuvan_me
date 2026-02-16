import { getAllTags } from "@/lib/content";
import { TagLink } from "@/components/content/TagLink";

export function TagCloud() {
  const tags = getAllTags();

  if (tags.length === 0) return null;

  return (
    <section className="border-t border-terminal-border">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <h2 className="mb-4 font-mono text-xs text-terminal-text-dim">TAGS //</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TagLink key={tag} tag={tag} accent="green" />
          ))}
        </div>
      </div>
    </section>
  );
}
