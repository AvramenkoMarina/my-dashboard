export type Lang = "en" | "fr";

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Texts {
  title: string;
  search: string;
  prev: string;
  next: string;
  retry: string;
}
