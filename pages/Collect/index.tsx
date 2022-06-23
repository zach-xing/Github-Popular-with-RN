import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CollectPage from "./CollectPage";
import RepoDetails from "../RepoDetails";

const Stack = createNativeStackNavigator();

const Collect = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="collect-page"
        component={CollectPage}
        options={{ title: "收藏" }}
      />
      <Stack.Screen
        name="repo-details"
        component={RepoDetails}
        options={{ title: "仓库详情" }}
      />
    </Stack.Navigator>
  );
};

export default Collect;
