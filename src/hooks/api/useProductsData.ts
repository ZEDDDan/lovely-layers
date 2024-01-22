import useSWR from "swr";
import qs from "qs";
import { Product, StrapiArrayResponse } from "../../types/strapiRes";

interface IProductsProps {
  slug: string;
  shoesSizeIds: number[];
  brandIds: number[];
  prices: [number, number];
}

export function useProductsData({
  slug,
  shoesSizeIds,
  brandIds,
  prices,
}: IProductsProps) {
  const params = qs.stringify(
    {
      populate: ["currency"],
      filters: {
        category: {
          slug: {
            $eq: slug,
          },
        },
        shoes_sizes: {
          id: { $in: shoesSizeIds },
        },
        brand: {
          id: { $in: brandIds },
        },
        price: { $between: prices },
      },
    },
    { encodeValuesOnly: true }
  );

  const { data, error, isLoading } = useSWR<StrapiArrayResponse<Product>>(
    `/api/products?${params}`
  );

  return {
    data: data?.data || [],
    isLoading,
    error,
  };
}
