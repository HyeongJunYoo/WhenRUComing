import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  BackHandler,
  Icon,
ImageBackground
} from 'react-native';

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