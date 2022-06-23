import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabView from "./TabView";
import RepoDetails from "../RepoDetails";

const Stack = createNativeStackNavigator();

const HotHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="hot-home"
        component={TabView}
        options={{ title: "最热" }}
      />
      <Stack.Screen
        name="repo-details"
        component={RepoDetails}
        options={{ title: "仓库详情" }}
      />
    </Stack.Navigator>
  );
};

export default HotHome;
