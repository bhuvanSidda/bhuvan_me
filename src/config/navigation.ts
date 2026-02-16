import type { AccentColor } from "@/types/content";

export interface NavItem {
  label: string;
  href: string;
  accent: AccentColor;
}

export const navItems: NavItem[] = [
  { label: "LETTERS", href: "/letters", accent: "red" },
  { label: "MARKETS", href: "/markets", accent: "green" },
  { label: "BD STERLING", href: "/bd-sterling", accent: "amber" },
  { label: "EMPIRE", href: "/sterling-empire", accent: "amber" },
  { label: "MOVIES", href: "/movies", accent: "blue" },
  { label: "READINGS", href: "/readings", accent: "purple" },
  { label: "PROJECTS", href: "/projects", accent: "pink" },
];
