export type Page = "home" | "scrap";

export interface Filter {
  modalOpen: boolean;
  currentHeadLine: string;
  currentDate: string;
  currentCountry: string;
}
