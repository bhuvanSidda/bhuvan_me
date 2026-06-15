import Link from "next/link";

export default function NotFound() {
  return (
    <section className="site-container">
      <h1 className="page-title">Not found</h1>
      <div className="page-copy">
        <p>The page you requested does not exist.</p>
        <p>
          <Link href="/">Return home</Link>.
        </p>
      </div>
    </section>
  );
}
