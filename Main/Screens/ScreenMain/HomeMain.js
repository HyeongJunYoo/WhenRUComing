import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Location from '../../Screens/ScreenMain/Busr';
import TimeTable from '../../Screens/ScreenMain/BusMap';
import QRScan from '../../Screens/ScreenMain/QRCodeScannerScreen';
import Setting from '../../Screens/ScreenMain/Setting';

const Tab = createBottomTabNavigator();
function HomeMain() {
  return (
    <Tab.Navigator initialRouteName="Location">
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name="bus-marker"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TimeTable"
        component={TimeTable}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name="timetable"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="QRScan"
        component={QRScan}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons name="cog" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeMain;
