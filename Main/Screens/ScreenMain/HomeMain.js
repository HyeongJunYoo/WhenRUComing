import React, {useEffect} from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Location from "../../Screens/ScreenMain/Busr";
import TimeTable from "../../Screens/ScreenMain/BusMap";
import QRScan from "../../Screens/ScreenMain/QRCodeScannerScreen";
import Setting from "../../Screens/ScreenMain/Setting";

const Tab = createBottomTabNavigator();
function HomeMain() {
  return(
    <Tab.Navigator initialRouteName="Location">       
        <Tab.Screen name="Location" component={Location}/>
        <Tab.Screen name="TimeTable" component={TimeTable}/>
        <Tab.Screen name="QRScan" component={QRScan}/>   
        <Tab.Screen name="Setting" component={Setting}/>          
      </Tab.Navigator>
  );
}

export default HomeMain;