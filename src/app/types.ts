export interface Faq {
  id: number;
  documentId: string;
  Question: string;
  Answer: string;
  createdAt: string;
}

export interface Tea {
  id: number;
  documentId: string;
  NameShort: string;
  Name: string;
  Kanji: string;
  Caption: string;
  Description: string;
  Quote: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Presentations: ListItem[];
  Profile: { id: number; Content: string }[];
}

export interface ListItem {
  id: number;
  Name: string;
  Price: number;
  Type: "grams" | "pieces";
  Amount: number;
}

export interface Experience {
  id: number;
  documentId: string;
  ImageCaption: string;
  ImageCaptionDescription: string;
  Title: string;
  Description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Benefits: { id: number; Name: string; Description: string }[];
  Preparations: { id: number; Name: string; Description: string }[];
}
