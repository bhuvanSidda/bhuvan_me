export interface PostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
  featured?: boolean;
  rating?: number; // for movies
  director?: string; // for movies
  year?: number; // for movies
  status?: string; // for projects
  url?: string; // for projects
  github?: string; // for projects
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string; // raw markdown
}

export interface PostWithHTML extends Post {
  html: string; // processed HTML
}

export type ContentSection = "letters" | "markets" | "movies" | "projects" | "readings" | "bd-sterling/investor-letters";

export type AccentColor = "red" | "green" | "amber" | "blue" | "pink" | "purple" | "cyan";
