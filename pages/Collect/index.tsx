import { StyleSheet, View } from "react-native";
import React from "react";
import { Tab, Text, TabView } from "@rneui/themed";

import ScrollView from "./ScrollView";

const Collect = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "white",
          height: 1,
        }}
        variant="primary"
      >
        <Tab.Item title="最热" titleStyle={{ fontSize: 12 }} />
        <Tab.Item title="趋势" titleStyle={{ fontSize: 12 }} />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: "100%" }}>
          <ScrollView />
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <Text h1>Cart</Text>
        </TabView.Item>
      </TabView>
    </>
  );
};

export default Collect;

const styles = StyleSheet.create({});
