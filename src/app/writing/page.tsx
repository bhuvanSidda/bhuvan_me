import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "Writing by Bhuvan.",
};

export default function WritingPage() {
  return (
    <section className="site-container">
      <h1 className="page-title">Writing</h1>
      <div className="page-copy">
        <p>Content coming soon.</p>
      </div>
    </section>
  );
}
