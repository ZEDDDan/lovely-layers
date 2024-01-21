import useSWR from "swr";
import { CategoryResponse } from "../../types/categoryRes";
import queryString from "query-string";

export function useCategoryDataBySlug(slug: string) {
  const params = queryString.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
  });

  const { data, error, isLoading } = useSWR<CategoryResponse>(
    `/api/categories?${params}`
  );

  return {
    data: data?.data?.length ? data.data[0] : null,
    isLoading,
    error,
  };
}
