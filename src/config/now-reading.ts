export interface NowReadingItem {
  title: string;
  author: string;
  progress?: number; // 0-100 percentage
  link?: string;
}

export const nowReading: NowReadingItem[] = [
  {
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    progress: 72,
  },
  {
    title: "Poor Charlie's Almanack",
    author: "Charles T. Munger",
    progress: 35,
  },
];
