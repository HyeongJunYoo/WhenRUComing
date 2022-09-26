import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome, Entypo } from "@expo/vector-icons";

import A from "../../Screens/ScreenMain/A.js";
import B from "../../Screens/ScreenMain/B.js";

export default function Navigation() {
    return (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    );
  }

  const Stack = createNativeStackNavigator();
  function RootNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Busr" component={Busr} />
      </Stack.Navigator>
    );
  }
  const BottomTab = createBottomTabNavigator();
  function BottomTabNavigator() {
    return (
      <BottomTab.Navigator initialRouteName="ScreenA">
        <BottomTab.Screen name="ScreenA" component={ScreenA} />
        <BottomTab.Screen name="ScreenB" component={ScreenB} />
      </BottomTab.Navigator>
    );
  }