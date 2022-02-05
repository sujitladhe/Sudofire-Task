import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { LogBox } from "react-native";
import Login from "./src/screens/Login";
import Dashboard from "./src/screens/Dashboard";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const Tab = createBottomTabNavigator();

export default function App() {
  return ( 
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Login">
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: () => {
              return <Feather name="user" size={20} color="black" />;
            },
          }}
        />

        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: () => {
              return <Feather name="refresh-ccw" size={20} color="black" />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
