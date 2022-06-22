import { useQuery } from "react-query";
import request from "../utils/request";

function fetchPopularRepo(value: string) {
  return request({
    url: `https://api.github.com/search/repositories?q=${value}&sort=stars`,
    method: "GET",
  });
}

/**
 * 获取最热的 repo
 * @param value string
 */
export function useFetchPopularRepos(value: string) {
  const { data, error, isLoading, refetch } = useQuery<{
    total_count: string;
    items: {
      id: string;
      full_name: string;
      description: string;
      stargazers_count: number;
      owner: {
        id: number;
        avatar_url: string;
      };
    }[];
  }>([`popular-repos-${value}`, value], () => fetchPopularRepo(value), {
    refetchInterval: false, // 停止轮询获取
  });

  /**
   * 刷新操作
   * @param callback 执行刷新完成之后的回调
   */
  const refetchPopularRepos = (callback?: Function) => {
    if (callback !== undefined) {
      callback(); // 执行回调
    }
    refetch();
  };

  return { repoData: data, error, isLoading, refetchPopularRepos };
}
