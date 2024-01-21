import useSWR from "swr";
import queryString from "query-string";
import { FooterResponse } from "../../types/footerRes";

export function useFooterData() {
  const params = queryString.stringify({
    populate: ["support_block", "social_links", "social_links.icon"],
  });

  const { data, error, isLoading } = useSWR<FooterResponse>(
    `/api/footer?${params}`
  );

  return {
    data,
    isLoading,
    error,
  };
}
