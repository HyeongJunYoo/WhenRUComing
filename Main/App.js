// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

 
// Import React and Component
import React from 'react';
// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';

//임포트할 화면들/
import loginmain from './Screens/Login/loginmain';
import loginbus from './Screens/Login/loginbus';
import LoginStudent from './Screens/Login/LoginStudent';
import Homemain from './Screens/ScreenMain/Homemain' ;

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
      <Stack.Navigator initialRouteName="loginmain">
        {/* SplashScreen which will come once for 5 Seconds */}      
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="loginmain"
          component={loginmain}
          options={{headerShown: false}}
        />
           <Stack.Screen
          name="loginbus"
          component={loginbus}
          options={{headerShown: true}}
        />
           <Stack.Screen
          name="LoginStudent"
          component={LoginStudent}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Homemain"
          component={Homemain}
          options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page */}
      </Stack.Navigator>
    </NavigationContainer>
  );
 };
export default App;