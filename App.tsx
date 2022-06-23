import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";

import { QueryClient, QueryClientProvider } from "react-query";

import HotHome from "./pages/HotHome";
import Trend from "./pages/Trend";
import Profile from "./pages/Profile";
import Collect from "./pages/Collect";

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="最热"
            component={HotHome}
            options={{
              header: () => null,
              tabBarLabel: "最热",
              tabBarIcon: ({ color, size }) => (
                <Icon name="iconfontdesktop" color={color} size={size} />
              ),
              unmountOnBlur: true,
            }}
          />
          <Tab.Screen
            name="趋势"
            component={Trend}
            options={{
              header: () => null,
              tabBarLabel: "趋势",
              tabBarIcon: ({ color, size }) => (
                <Icon name="linechart" color={color} size={size} />
              ),
              unmountOnBlur: true,
            }}
          />
          <Tab.Screen
            name="收藏"
            component={Collect}
            options={{
              header: () => null,
              tabBarLabel: "收藏",
              tabBarIcon: ({ color, size }) => (
                <Icon name="hearto" color={color} size={size} />
              ),
              unmountOnBlur: true,
            }}
          />
          <Tab.Screen
            name="我的"
            component={Profile}
            options={{
              header: () => null,
              tabBarLabel: "我的",
              tabBarIcon: ({ color, size }) => (
                <Icon name="user" color={color} size={size} />
              ),
              unmountOnBlur: true,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
