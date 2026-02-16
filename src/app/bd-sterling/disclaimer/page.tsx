import type { Metadata } from "next";
import { Panel } from "@/components/ui/Panel";
import { processMarkdown } from "@/lib/markdown";
import { MarkdownRenderer } from "@/components/content/MarkdownRenderer";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const metadata: Metadata = {
  title: "Disclaimer — BD Sterling",
  description: "Legal disclaimer for BD Sterling Capital Management.",
};

export default async function DisclaimerPage() {
  const filePath = path.join(process.cwd(), "content", "bd-sterling", "disclaimer.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContents);
  const html = await processMarkdown(content);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/bd-sterling"
        className="mb-6 inline-block font-mono text-xs text-terminal-text-dim transition-colors hover:text-sterling-amber"
      >
        ← Back to BD Sterling
      </Link>

      <Panel title="LEGAL DISCLAIMER" accent="amber">
        <MarkdownRenderer html={html} amber />
      </Panel>
    </div>
  );
}
