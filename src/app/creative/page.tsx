import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative",
  description: "Writing, books, and movies by Bhuvan.",
};

const sections = [
  {
    title: "Writing",
    description: "Essays and short reflections. Content coming soon.",
  },
  {
    title: "Books",
    description: "Notes from what I am reading. Content coming soon.",
  },
  {
    title: "Movies",
    description: "Notes from what I am watching. Content coming soon.",
  },
];

export default function CreativePage() {
  return (
    <section className="site-container">
      <h1 className="page-title">Creative</h1>
      <div className="page-copy">
        <p>Writing, books, and movies will live here.</p>
      </div>

      <div className="section-list">
        {sections.map((section) => (
          <section key={section.title} className="section-item">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </section>
        ))}
      </div>
    </section>
  );
}
