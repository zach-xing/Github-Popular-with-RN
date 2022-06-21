import { View, Text } from "react-native";
import React from "react";
import useStorage from "../../utils/storage";

const ScrollView = () => {
  const { getAsyncItem: getAsyncItemWithHotTab } = useStorage("hot-tab");
  const { getAsyncItem: getAsyncItemWithTrending } = useStorage("trending");

  React.useEffect(() => {
    (async () => {
      const hotTabData = await getAsyncItemWithHotTab();
      const trendingData = await getAsyncItemWithTrending();
      console.log(hotTabData, trendingData, "1");
    })();
  }, []);

  return (
    <View>
      <Text>ScrollView</Text>
    </View>
  );
};

export default ScrollView;
