// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

 
// Import React and Component
import React from 'react';
// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';

//임포트할 화면들/
import LoginMain from './Screens/Login/LoginMain';
import LoginBus from './Screens/Login/LoginBus';
import LoginStudent from './Screens/Login/LoginStudent';
import CheckLogin from './Screens/Login/CheckLogin' ;
import HomeMain from './Screens/ScreenMain/HomeMain' ;
import Busr from './Screens/ScreenMain/Busr' ;
import BusMap from './Screens/ScreenMain/BusMap' ;



const Stack = createNativeStackNavigator();

// const Auth = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="loginmain">
//         <Stack.Screen
//           name="loginmain"
//           component={loginmain}
//           options={{headerShown: false}}
//         />
//            <Stack.Screen
//           name="loginbus"
//           component={loginbus}
//           options={{headerShown: false}}
//         />
//            <Stack.Screen
//           name="LoginStudent"
//           component={LoginStudent}
//           options={{headerShown: false}}
//         />
       
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
//  };


 
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginMain">
        {/* SplashScreen which will come once for 5 Seconds */}      
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="LoginMain"
          component={LoginMain}
          options={{headerShown: false}}
        />
           <Stack.Screen
          name="LoginBus"
          component={LoginBus}
          options={{headerShown: true}}
        />
           <Stack.Screen
          name="LoginStudent"
          component={LoginStudent}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="HomeMain"
          component={HomeMain}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Busr"
          component={Busr}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="BusMap"
          component={BusMap}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CheckLogin"
          component={CheckLogin}
          options={{headerShown: false}}
        />
        
        {/* Navigation Drawer as a landing page */}
      </Stack.Navigator>
    </NavigationContainer>
  );
 };
export default App;