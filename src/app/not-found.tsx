import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-3rem)] flex-col items-center justify-center px-4">
      <div className="text-center">
        <p className="font-mono text-xs text-terminal-text-dim">{">"} ERROR 404</p>
        <h1 className="mt-2 font-mono text-4xl font-bold text-bloomberg-red">
          PAGE NOT FOUND
        </h1>
        <p className="mt-4 font-mono text-sm text-terminal-text-dim">
          The requested resource could not be located on this server.
        </p>
        <div className="mt-6 space-y-1 font-mono text-xs text-terminal-text-dim">
          <p>{">"} Possible causes:</p>
          <p>&nbsp;&nbsp;- The page may have been moved or deleted</p>
          <p>&nbsp;&nbsp;- The URL may be incorrect</p>
          <p>&nbsp;&nbsp;- You may not have access to this resource</p>
        </div>
        <Link
          href="/"
          className="mt-8 inline-block rounded border border-bloomberg-green/30 px-4 py-2 font-mono text-sm text-bloomberg-green transition-colors hover:bg-bloomberg-green/10"
        >
          ← Return to Dashboard
        </Link>
      </div>
    </div>
  );
}
