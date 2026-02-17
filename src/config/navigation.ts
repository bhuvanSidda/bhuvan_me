import type { AccentColor } from "@/types/content";

export interface NavItem {
  label: string;
  href: string;
  accent: AccentColor;
  external?: boolean;
}

export const navItems: NavItem[] = [
  { label: "LETTERS", href: "/letters", accent: "red" },
  { label: "SUBSTACK", href: "https://bdsterling.substack.com/", accent: "green", external: true },
  { label: "BD STERLING", href: "/bd-sterling", accent: "amber" },
  { label: "MOVIES", href: "/movies", accent: "blue" },
  { label: "READINGS", href: "/readings", accent: "purple" },
  { label: "PROJECTS", href: "/projects", accent: "pink" },
];
