import { View, Text } from "react-native";
import React from "react";
import useStorage from "../../utils/storage";

const ScrollViewWithTrendTab = () => {
  const { getAsyncItem: getAsyncItemWithTrending } =
    useStorage("trending-data");

  React.useEffect(() => {
    (async () => {
      const trendingData = await getAsyncItemWithTrending();
      console.log(trendingData, "2");
    })();
  }, [1]);

  return (
    <View>
      <Text>ScrollViewWithTrendTab</Text>
    </View>
  );
};

export default ScrollViewWithTrendTab;
