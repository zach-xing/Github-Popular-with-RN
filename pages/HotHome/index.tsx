import React from "react";
import { StyleSheet } from "react-native";
import { Tab, Text, TabView } from "@rneui/themed";
import useStorage from "../../utils/storage";

const HotHome = () => {
  const [index, setIndex] = React.useState(0);
  const [tabText, setTabText] = React.useState<string[]>([]);
  const { setAsyncItem, getAsyncItem } = useStorage<string[]>("hot-tab");

  React.useEffect(() => {
    (async () => {
      let tabs = await getAsyncItem();
      if (tabs === null) {
        tabs = ["All", "React", "React Native"];
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
        <Tab.Item title="ALL" titleStyle={{ fontSize: 12 }} />
        <Tab.Item title="React" titleStyle={{ fontSize: 12 }} />
        <Tab.Item title="React Native" titleStyle={{ fontSize: 12 }} />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: "red", width: "100%" }}>
          <Text h1>Recent</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "blue", width: "100%" }}>
          <Text h1>Favorite</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "green", width: "100%" }}>
          <Text h1>Cart</Text>
        </TabView.Item>
      </TabView>
    </>
  );
};

export default HotHome;

const styles = StyleSheet.create({});
