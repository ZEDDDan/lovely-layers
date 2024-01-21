import useSWR from "swr";
import queryString from "query-string";
import { HomeResponse } from "../../types/homeResTypes";

export function useHomeData() {
  const params = queryString.stringify({
    populate: [
      "products_discount_button",
      "congratulation",
      "congratulation.img",
      "cards",
      "cards.img",
      "products_discount",
      "product_new",
      "products_discount.images",
      "products_discount.currency",
      "products_discount.category",
      "product_new.images",
      "product_new_link",
      "home_descs",
    ],
  });

  const { data, error, isLoading } = useSWR<HomeResponse>(
    `/api/home?${params}`
  );

  return {
    data,
    isLoading,
    error,
  };
}
