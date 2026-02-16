import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post, PostWithHTML, PostFrontmatter, ContentSection, AccentColor } from "@/types/content";
import { processMarkdown } from "./markdown";

const contentDirectory = path.join(process.cwd(), "content");

function getDirectory(section: ContentSection): string {
  return path.join(contentDirectory, section);
}

export function getAllPosts(section: ContentSection): Post[] {
  const dir = getDirectory(section);

  if (!fs.existsSync(dir)) {
    return [];
  }

  const filenames = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(dir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as PostFrontmatter,
      content,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export async function getPostBySlug(
  section: ContentSection,
  slug: string
): Promise<PostWithHTML | null> {
  const dir = getDirectory(section);
  const filePath = path.join(dir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const html = await processMarkdown(content);

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
    html,
  };
}

export function getLatestPost(section: ContentSection): Post | null {
  const posts = getAllPosts(section);
  return posts[0] || null;
}

export function getFeaturedPosts(section: ContentSection): Post[] {
  return getAllPosts(section).filter((p) => p.frontmatter.featured);
}

export interface TaggedPost extends Post {
  section: ContentSection;
}

const taggableSections: { section: ContentSection; accent: AccentColor; label: string }[] = [
  { section: "letters", accent: "red", label: "Letters" },
  { section: "markets", accent: "green", label: "Markets" },
  { section: "movies", accent: "blue", label: "Movies" },
  { section: "projects", accent: "pink", label: "Projects" },
  { section: "readings", accent: "purple", label: "Readings" },
];

export { taggableSections };

export function getAllTags(): string[] {
  const tags = new Set<string>();
  for (const { section } of taggableSections) {
    for (const post of getAllPosts(section)) {
      post.frontmatter.tags?.forEach((tag) => tags.add(tag));
    }
  }
  return Array.from(tags).sort();
}

export function getPostsByTag(tag: string): TaggedPost[] {
  const results: TaggedPost[] = [];
  for (const { section } of taggableSections) {
    for (const post of getAllPosts(section)) {
      if (post.frontmatter.tags?.includes(tag)) {
        results.push({ ...post, section });
      }
    }
  }
  return results.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export function getAllSlugs(section: ContentSection): string[] {
  const dir = getDirectory(section);

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
