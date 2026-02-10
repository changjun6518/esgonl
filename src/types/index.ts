export interface Article {
  idx: number;
  category: string;
  title: string;
  summary: string;
  thumbnail: string;
  author: string;
  date: string;
  tags?: string[];
}

export interface Quote {
  id: number;
  date: string;
  text: string;
  attribution: string;
  year: number;
  month: number;
}

export type SectionType = 'am' | 'noon' | 'pm' | 'snack';
