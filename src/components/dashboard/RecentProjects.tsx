import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import { Badge } from "@/components/ui/Badge";
import type { Post } from "@/types/content";

interface RecentProjectsProps {
  projects: Post[];
}

export function RecentProjects({ projects }: RecentProjectsProps) {
  return (
    <Panel title="RECENT PROJECTS">
      {projects.length === 0 ? (
        <p className="font-mono text-sm text-terminal-text-dim">
          {">"} No projects yet.
        </p>
      ) : (
        <div className="space-y-3">
          {projects.slice(0, 3).map((project) => (
            <Link
              key={project.slug}
              href={`/projects`}
              className="group block"
            >
              <div className="flex items-start justify-between">
                <h4 className="font-mono text-sm text-terminal-text transition-colors group-hover:text-bloomberg-green">
                  {project.frontmatter.title}
                </h4>
                {project.frontmatter.status && (
                  <Badge variant={project.frontmatter.status === "Active" ? "active" : "tag"}>
                    {project.frontmatter.status}
                  </Badge>
                )}
              </div>
              <p className="mt-1 font-mono text-xs text-terminal-text-dim">
                {project.frontmatter.excerpt}
              </p>
            </Link>
          ))}
        </div>
      )}
    </Panel>
  );
}
