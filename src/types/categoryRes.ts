import { StrapiArrayResponse } from "./strapiRes";

export interface CategoryAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  slug: string;
  label: string;
}

// Используйте общий и конкретный тип вместе
export type CategoryResponse = StrapiArrayResponse<CategoryAttributes>;
