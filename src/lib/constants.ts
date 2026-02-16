export const SITE_NAME = "BHUVAN.ME";
export const SITE_DESCRIPTION = "Personal terminal for Bhuvan — letters, markets, projects, and more.";
export const SITE_URL = "https://bhuvan.me";

export const SECTIONS = {
  letters: {
    title: "Letters",
    description: "Essays and letters about life, ambition, and the world.",
    directory: "letters",
    accent: "green" as const,
  },
  markets: {
    title: "Markets",
    description: "Market commentary and analysis.",
    directory: "markets",
    accent: "green" as const,
  },
  movies: {
    title: "Movies",
    description: "Film reviews and commentary.",
    directory: "movies",
    accent: "green" as const,
  },
  projects: {
    title: "Projects",
    description: "Things I've built and am building.",
    directory: "projects",
    accent: "green" as const,
  },
  "bd-sterling": {
    title: "BD Sterling Capital Management",
    description: "Investment research and investor letters.",
    directory: "bd-sterling/investor-letters",
    accent: "amber" as const,
  },
} as const;
