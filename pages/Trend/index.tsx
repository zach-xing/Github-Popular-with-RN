import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TrendTabView from "./TrendTabView";
import RepoDetails from "../RepoDetails";

const Stack = createNativeStackNavigator();

const Trend = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="trend-page"
        component={TrendTabView}
        options={{ title: "趋势" }}
      />
      <Stack.Screen
        name="repo-details"
        component={RepoDetails}
        options={{ title: "仓库详情" }}
      />
    </Stack.Navigator>
  );
};

export default Trend;
