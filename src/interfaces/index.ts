export type Page = "home" | "scrap";

export interface Filter {
  modalOpen: boolean;
  headline: string;
  date: string;
  country: string[];
}

export interface Article {
  _id: string;
  headline: { main: string };
  source: string;
  byline: { original: string };
  author: string;
  publishDate: string;
  isScrapped: boolean;
}
