import * as React from 'react';
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login_bus from './screens/login_bus';
import Login_main from './screens/Login_main';
import login_Student from './screens/login_Student';


const Stack = createStackNavigator();
function App() {
  return (
    
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login_main">
      <Stack.Screen name="Login_main " component={Login_main}
        options={{
          title: '로그인선택화면'
      }}/>
      <Stack.Screen name="login_bus" component={login_bus} 
        options={{
          title: '로그인_기사'
      }}/>
        <Stack.Screen name="login_Student" component={login_Student} 
        options={{
          title: '로그인_학생'
      }}/>
         
    </Stack.Navigator>
  </NavigationContainer>
  
  );
}

export default App;
