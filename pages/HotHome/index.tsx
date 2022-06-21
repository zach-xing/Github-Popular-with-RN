import React from "react";
import { StyleSheet } from "react-native";
import { Tab, Text, TabView } from "@rneui/themed";
import useStorage from "../../utils/storage";

import ScrollView from "./ScrollView";

const HotHome = () => {
  const [index, setIndex] = React.useState(0);
  const [tabText, setTabText] = React.useState<string[]>([]);
  const { setAsyncItem, getAsyncItem } = useStorage<string[]>("hot-tab");

  React.useEffect(() => {
    (async () => {
      let tabs = await getAsyncItem();
      if (tabs === null) {
        tabs = ["All", "React", "React Native", "TypeScript"]; // 默认的 tabs 显示的内容
        setAsyncItem(tabs);
      }
      setTabText(tabs);
    })();
  }, []);

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "white",
          height: 1,
        }}
        scrollable={true}
        variant="primary"
      >
        {tabText.map((item) => (
          <Tab.Item key={item} title={item} titleStyle={{ fontSize: 12 }} />
        ))}
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        {tabText.map((item) => (
          <TabView.Item key={item} style={{ width: "100%" }}>
            <ScrollView value={item} />
          </TabView.Item>
        ))}
      </TabView>
    </>
  );
};

export default HotHome;

const styles = StyleSheet.create({});
