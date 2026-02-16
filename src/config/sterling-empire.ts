export interface SterlingEntity {
  name: string;
  description: string;
  status: "active" | "coming-soon";
  href?: string;
}

export const sterlingEntities: SterlingEntity[] = [
  {
    name: "BD Sterling Capital Management",
    description: "Investment research and capital allocation focused on long-term value creation.",
    status: "active",
    href: "/bd-sterling",
  },
  {
    name: "BD Sterling Holdings",
    description: "A diversified holding company acquiring and operating exceptional businesses.",
    status: "coming-soon",
  },
  {
    name: "Sterling Studios",
    description: "Film and media production with a focus on compelling storytelling.",
    status: "coming-soon",
  },
  {
    name: "The Sterling Foundation",
    description: "Philanthropic efforts focused on education, healthcare, and opportunity.",
    status: "coming-soon",
  },
];
