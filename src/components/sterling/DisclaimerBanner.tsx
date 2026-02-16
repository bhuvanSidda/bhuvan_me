export function DisclaimerBanner() {
  return (
    <div className="border-b border-sterling-amber/30 bg-sterling-amber/10 px-4 py-2">
      <p className="mx-auto max-w-7xl font-mono text-xs text-sterling-amber">
        ⚠ This is not investment advice. All content is for informational purposes only.{" "}
        <a
          href="/bd-sterling/disclaimer"
          className="underline transition-colors hover:text-sterling-amber/80"
        >
          Read full disclaimer →
        </a>
      </p>
    </div>
  );
}
