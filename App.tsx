import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";

import HotHome from "./pages/HotHome";
import Trend from "./pages/Trend";
import Profile from "./pages/Profile";

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
              <Icon name="sc-telegram" type="evilicon" />
            ),
          }}
        />
        <Tab.Screen
          name="趋势"
          component={Trend}
          options={{
            tabBarLabel: "趋势",
            tabBarIcon: ({ color, size }) => (
              <Icon name="sc-telegram" type="evilicon" />
            ),
          }}
        />
        <Tab.Screen
          name="我的"
          component={Profile}
          options={{
            tabBarLabel: "我的",
            tabBarIcon: ({ color, size }) => (
              <Icon name="sc-telegram" type="evilicon" />
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
