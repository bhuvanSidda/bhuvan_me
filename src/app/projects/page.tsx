import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import { Panel } from "@/components/ui/Panel";
import { Badge } from "@/components/ui/Badge";
import { TagLink } from "@/components/content/TagLink";
import { PageTransition } from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've built and am building.",
};

export default function ProjectsPage() {
  const projects = getAllPosts("projects");

  return (
    <PageTransition>
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Panel title="PROJECTS" accent="pink">
        <p className="mb-6 font-mono text-xs text-terminal-text-dim">
          {">"} Things I&apos;ve built and am building.
        </p>

        {projects.length === 0 ? (
          <p className="font-mono text-sm text-terminal-text-dim">
            {">"} No projects yet. Check back soon.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="rounded border border-terminal-border bg-terminal-black p-4 transition-all duration-200 hover:border-projects-pink/50"
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-mono text-sm font-medium text-terminal-text">
                    {project.frontmatter.title}
                  </h3>
                  {project.frontmatter.status && (
                    <Badge
                      variant={project.frontmatter.status === "Active" ? "active" : "tag"}
                      accent="pink"
                    >
                      {project.frontmatter.status}
                    </Badge>
                  )}
                </div>
                <p className="mb-3 font-mono text-xs leading-relaxed text-terminal-text-dim">
                  {project.frontmatter.excerpt}
                </p>
                {project.frontmatter.tags && (
                  <div className="flex flex-wrap gap-1">
                    {project.frontmatter.tags.map((tag) => (
                      <TagLink key={tag} tag={tag} accent="pink" />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </Panel>
    </div>
    </PageTransition>
  );
}
