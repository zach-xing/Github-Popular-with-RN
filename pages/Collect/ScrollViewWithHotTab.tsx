import { View, Text } from "react-native";
import React from "react";
import useStorage from "../../utils/storage";

const ScrollViewWithHotTab = () => {
  const { getAsyncItem: getAsyncItemWithHotTab } = useStorage("hot-data");

  React.useEffect(() => {
    (async () => {
      const hotTabData = await getAsyncItemWithHotTab();
      console.log(hotTabData, "1");
    })();
  }, [1]);

  return (
    <View>
      <Text>ScrollViewWithHotTab</Text>
    </View>
  );
};

export default ScrollViewWithHotTab;
