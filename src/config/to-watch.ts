export interface ToWatchItem {
  title: string;
  director: string;
  year: number;
  note?: string;
}

export const toWatch: ToWatchItem[] = [
  {
    title: "The Master",
    director: "Paul Thomas Anderson",
    year: 2012,
  },
  {
    title: "Margin Call",
    director: "J.C. Chandor",
    year: 2011,
  },
  {
    title: "Barry Lyndon",
    director: "Stanley Kubrick",
    year: 1975,
  },
  {
    title: "Oppenheimer",
    director: "Christopher Nolan",
    year: 2023,
  },
];
