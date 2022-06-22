import { View, Text, FlatList } from "react-native";
import React from "react";
import useStorage from "../../utils/storage";

import HotScrollViewItem from "../../components/HotScrollViewItem";

const ScrollViewWithHotTab = () => {
  const [showLoading, setShowLoading] = React.useState(false);
  const [collectedArr, setCollectedArr] = React.useState<
    Array<API.HotDataItem>
  >([]);
  const { getAsyncItem: getAsyncItemWithHotTab } =
    useStorage<Array<API.HotDataItem>>("hot-data");

  React.useEffect(() => {
    (async () => {
      await refetch();
    })();
  }, []);

  // 重新获取已收藏的数据
  const refetch = async () => {
    setShowLoading(true);
    const hotTabData = await getAsyncItemWithHotTab();
    setCollectedArr(hotTabData!);
    setShowLoading(false);
  };

  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={collectedArr}
        refreshing={showLoading}
        onRefresh={refetch}
        renderItem={({ item }) => <HotScrollViewItem key={item.id} {...item} />}
      />
    </View>
  );
};

export default ScrollViewWithHotTab;
