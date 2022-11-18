
// import { createBottomTabNavigator } from "@react-navigation/top-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import A from "../../Screens/ScreenMain/A";
import B from "../../Screens/ScreenMain/B";

const Tab = createMaterialTopTabNavigator();
export default function Busr() {
    return (
      <Tab.Navigator initialRouteName="A">       
        <Tab.Screen name="기흥역 노선" component={A} />
        <Tab.Screen name="스타벅스 노선" component={B}/>       
      </Tab.Navigator>
      );
}



 