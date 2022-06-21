import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ModalDropdown from "react-native-modal-dropdown";
import { Tab, TabView } from "@rneui/themed";
import useStorage from "../../utils/storage";

import ScrollView from "./ScrollView";

const Trend = () => {
  const { setAsyncItem, getAsyncItem } = useStorage<string[]>("trending");

  const [curTimeSpan, setCurTimeSpan] = React.useState<
    "daily" | "weekly" | "monthly"
  >("daily");
  const [index, setIndex] = React.useState(0);
  const [tabText, setTabText] = React.useState<string[]>([]);

  React.useEffect(() => {
    (async () => {
      let tabs = await getAsyncItem();
      if (tabs === null) {
        tabs = ["All Language", "C", "C++", "JavaScript", "TypeScript"];
        setAsyncItem(tabs);
      }
      setTabText(tabs);
    })();
  }, []);

  const changeSelected = (index: string, value: string) => {
    setCurTimeSpan(value.toLowerCase() as "daily" | "weekly" | "monthly");
  };

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

      <View>
        <ModalDropdown
          options={["Daily", "Weekly", "Monthly"]}
          defaultValue="Daily"
          textStyle={{
            width: "100%",
            fontSize: 16,
            backgroundColor: "white",
            padding: 10,
            borderTopWidth: 0.5,
            borderBottomWidth: 0.5,
          }}
          dropdownStyle={{
            marginTop: 0,
            marginLeft: "10%",
            marginRight: "10%",
            width: "80%",
          }}
          dropdownTextStyle={{ fontSize: 14 }}
          onSelect={changeSelected}
        />
      </View>

      <TabView value={index} onChange={setIndex} animationType="spring">
        {tabText.map((item) => (
          <TabView.Item key={item} style={{ width: "100%" }}>
            <ScrollView
              language={item === "All Language" ? "" : item}
              timespan={curTimeSpan}
            />
          </TabView.Item>
        ))}
      </TabView>
    </>
  );
};

export default Trend;

const styles = StyleSheet.create({});
