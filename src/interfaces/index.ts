export type Page = "home" | "scrap";

export interface Modal {
  open: boolean;
  currentHeadLine: string;
  currentDate: string;
  currentCountry: string;
}
