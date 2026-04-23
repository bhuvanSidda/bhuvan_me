import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import { Panel } from "@/components/ui/Panel";
import { PageTransition } from "@/components/ui/PageTransition";
import Link from "next/link";
import { toWatch } from "@/config/to-watch";

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

      <div className="mt-6">
        <Panel title="TO WATCH" accent="blue">
          <p className="mb-4 font-mono text-xs text-terminal-text-dim">
            {">"} Queue of films on the list.
          </p>

          {toWatch.length === 0 ? (
            <p className="font-mono text-sm text-terminal-text-dim">
              {">"} List is empty.
            </p>
          ) : (
            <ul className="divide-y divide-terminal-border">
              {toWatch.map((item) => (
                <li
                  key={`${item.title}-${item.year}`}
                  className="flex items-baseline justify-between gap-4 py-2 first:pt-0 last:pb-0"
                >
                  <div className="min-w-0">
                    <span className="font-mono text-sm text-terminal-text">
                      {item.title}
                    </span>
                    {item.note && (
                      <span className="ml-2 font-mono text-xs text-terminal-text-dim">
                        — {item.note}
                      </span>
                    )}
                  </div>
                  <span className="shrink-0 font-mono text-xs text-terminal-text-dim">
                    {item.year} · {item.director}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Panel>
      </div>
    </div>
    </PageTransition>
  );
}
