import { View, Text, FlatList } from "react-native";
import React from "react";
import useStorage from "../../utils/storage";
import TrendScrollViewItem from "../../components/TrendScrollViewItem";

const ScrollViewWithTrendTab = () => {
  const { getAsyncItem: getAsyncItemWithTrending } =
    useStorage<Array<API.TrendDataItem>>("trending-data");
  const [showLoading, setShowLoading] = React.useState(false);
  const [collectedArr, setCollectedArr] = React.useState<
    Array<API.TrendDataItem>
  >([]);

  React.useEffect(() => {
    (async () => {
      await refetch();
    })();
  }, []);

  // 重新获取已收藏的趋势数据
  const refetch = async () => {
    setShowLoading(true);
    const trendingData = await getAsyncItemWithTrending();
    setCollectedArr(trendingData!);
    setShowLoading(false);
  };

  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={collectedArr}
        refreshing={showLoading}
        onRefresh={refetch}
        renderItem={({ item }) => (
          <TrendScrollViewItem key={item.rank} {...item} />
        )}
      />
    </View>
  );
};

export default ScrollViewWithTrendTab;
