import { Panel } from "@/components/ui/Panel";
import { nowReading } from "@/config/now-reading";

export function NowReading() {
  if (nowReading.length === 0) return null;

  return (
    <Panel title="NOW READING" accent="purple">
      <div className="space-y-3">
        {nowReading.map((book) => (
          <div key={book.title}>
            <h4 className="font-mono text-sm text-terminal-text">
              {book.title}
            </h4>
            <p className="mt-0.5 font-mono text-xs text-terminal-text-dim">
              {book.author}
            </p>
            {book.progress !== undefined && (
              <div className="mt-2 flex items-center gap-2">
                <div className="h-1 flex-1 rounded-full bg-terminal-border">
                  <div
                    className="h-1 rounded-full bg-readings-purple"
                    style={{ width: `${book.progress}%` }}
                  />
                </div>
                <span className="font-mono text-xs text-terminal-text-dim">
                  {book.progress}%
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </Panel>
  );
}
