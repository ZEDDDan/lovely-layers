import { StrapiArrayResponse } from "./strapiRes";

export interface FavouritesAttributes {
  title: string;
}

export type FavouritesResponse = StrapiArrayResponse<FavouritesAttributes>;
