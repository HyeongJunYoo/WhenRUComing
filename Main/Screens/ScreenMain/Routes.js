import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
//import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeMain from "./HomeMain";
import QRCodeScannerScreen from "./QRCodeScannerScreen";
import QRCodeData from "./QRCodeData";

const mainStack = createStackNavigator (
    {
        HomeMain: HomeMain,
        QRCodeScannerScreen: QRCodeScannerScreen,
        QRCodeData: QRCodeData
    },
    { defaultNavigationOptions: { header: null } }
);

const AppContainer = createAppContainer(mainStack);

export default AppContainer;