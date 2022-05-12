export type Page = "home" | "scrap";

export interface Filter {
  modalOpen: boolean;
  currentHeadLine: string;
  currentDate: string;
  currentCountry: string;
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
