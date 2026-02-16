export function Footer() {
  return (
    <footer className="border-t border-terminal-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 md:flex-row">
        <p className="font-mono text-xs text-terminal-text-dim">
          &copy; {new Date().getFullYear()} BHUVAN.ME — All rights reserved
        </p>
        <p className="font-mono text-xs text-terminal-text-dim">
          SYSTEM STATUS: <span className="text-system-cyan">ONLINE</span>
        </p>
      </div>
    </footer>
  );
}
