import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import { Panel } from "@/components/ui/Panel";
import { PageTransition } from "@/components/ui/PageTransition";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Movies",
  description: "Film reviews and commentary.",
};

export default function MoviesPage() {
  const movies = getAllPosts("movies");

  return (
    <PageTransition>
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Panel title="MOVIES" accent="blue">
        <p className="mb-6 font-mono text-xs text-terminal-text-dim">
          {">"} Film reviews and commentary.
        </p>

        {movies.length === 0 ? (
          <p className="font-mono text-sm text-terminal-text-dim">
            {">"} No reviews yet. Check back soon.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {movies.map((movie) => (
              <Link
                key={movie.slug}
                href={`/movies/${movie.slug}`}
                className="group block"
              >
                <div className="rounded border border-terminal-border bg-terminal-black p-4 transition-all duration-200 hover:border-movies-blue/50">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-mono text-xs text-terminal-text-dim">
                      {movie.frontmatter.year} · {movie.frontmatter.director}
                    </span>
                    {movie.frontmatter.rating && (
                      <span className="font-mono text-xs text-movies-blue">
                        {movie.frontmatter.rating}/10
                      </span>
                    )}
                  </div>
                  <h3 className="font-mono text-sm font-medium text-terminal-text transition-colors group-hover:text-movies-blue">
                    {movie.frontmatter.title}
                  </h3>
                  <p className="mt-2 font-mono text-xs leading-relaxed text-terminal-text-dim">
                    {movie.frontmatter.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Panel>
    </div>
    </PageTransition>
  );
}
