import { useQuery } from "react-query";
import request from "../utils/request";

type TimeSpanType = "daily" | "weekly" | "monthly";

function fetchTrend(language: string, timespan: TimeSpanType) {
  return request({
    url: `https://gh-trending-api.herokuapp.com/repositories/${language.toLowerCase()}?since=${timespan}`,
  });
}

/**
 * 获取某种语言的 trend
 * @param language
 * @param timespan
 * @returns
 */
export function useFetchTrend(language: string, timespan: TimeSpanType) {
  const { data, error, isLoading, refetch } = useQuery<
    Array<{
      rank: number;
      username: string;
      repositoryName: string;
      url: string;
      description: string;
      language: string;
      languageColor: string;
      totalStars: number;
      builtBy: Array<{
        username: string;
        url: string;
        avatar: string;
      }>;
    }>
  >(
    `${language.toLowerCase()}-${timespan}`,
    () => fetchTrend(language, timespan),
    {
      refetchInterval: false, // 停止轮询获取
    }
  );

  return {
    trendData: data,
    error,
    isLoading,
    refetch,
  };
}
