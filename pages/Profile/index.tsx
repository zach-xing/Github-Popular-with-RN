import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileLayout from "./ProfileLayout";
import GithubInfo from "./subPages/GithubInfo";
import CustomHotTab from "./subPages/CustomHotTab";
import CustomTrendTab from "./subPages/CustomTrendTab";

const Stack = createNativeStackNavigator();

/**
 * 个人页面
 */
const Profile = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="layout"
        component={ProfileLayout}
        options={{ title: "我的" }}
      />
      <Stack.Screen
        name="github-info"
        component={GithubInfo}
        options={{ title: "Github信息" }}
      />
      <Stack.Screen
        name="custom-hot-tab"
        component={CustomHotTab}
        options={{ title: "自定义“最热”信息" }}
      />
      <Stack.Screen
        name="custom-trend-tab"
        component={CustomTrendTab}
        options={{ title: "自定义“趋势”信息" }}
      />
    </Stack.Navigator>
  );
};

export default Profile;
