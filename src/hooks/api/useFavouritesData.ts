import useSWR from "swr";
import { FavouritesResponse } from "../../types/favouritesRes";

export const useFavouritesData = () => {
  const { data, error, isLoading } =
    useSWR<FavouritesResponse>("/api/categories");

  return {
    data: data?.data ? data?.data : [],
    isLoading,
    error,
  };
};
