declare namespace API {
  /**
   * “最热”返回的数据格式 item
   */
  type HotDataItem = {
    id: string;
    full_name: string;
    description: string;
    stargazers_count: number;
    owner: {
      id: number;
      avatar_url: string;
    };
  };

  /**
   * “趋势”返回的数据格式 item
   */
  type TrendDataItem = {
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
  };
}
