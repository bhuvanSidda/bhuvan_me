import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Bhuvan.",
};

export default function ContactPage() {
  return (
    <section className="site-container">
      <h1 className="page-title">Contact</h1>
      <div className="page-copy">
        <p>Content coming soon.</p>
      </div>
    </section>
  );
}
