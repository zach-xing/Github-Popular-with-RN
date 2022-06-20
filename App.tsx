import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";

import HotHome from "./pages/HotHome";
import Trend from "./pages/Trend";
import Profile from "./pages/Profile";
import Collect from "./pages/Collect";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="最热"
          component={HotHome}
          options={{
            tabBarLabel: "最热",
            tabBarIcon: ({ color, size }) => (
              <Icon name="iconfontdesktop" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="趋势"
          component={Trend}
          options={{
            tabBarLabel: "趋势",
            tabBarIcon: ({ color, size }) => (
              <Icon name="linechart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="收藏"
          component={Collect}
          options={{
            tabBarLabel: "收藏",
            tabBarIcon: ({ color, size }) => (
              <Icon name="hearto" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="我的"
          component={Profile}
          options={{
            tabBarLabel: "我的",
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
