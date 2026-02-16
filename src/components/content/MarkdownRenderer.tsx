import { cn } from "@/lib/utils";

interface MarkdownRendererProps {
  html: string;
  className?: string;
  amber?: boolean;
}

export function MarkdownRenderer({ html, className, amber }: MarkdownRendererProps) {
  return (
    <article
      className={cn(
        "prose prose-lg max-w-none font-sans",
        amber && "prose-amber",
        className
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
