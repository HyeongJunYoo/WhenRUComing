 // Import React and Component
 import React, {useState, useEffect, createRef} from 'react';
 import {
   StyleSheet,
   TextInput,
   View,
   Text,
   ScrollView,
   Image,
   Keyboard,
   TouchableOpacity,
   KeyboardAvoidingView,
   Alert,
   ImageBackground
 } from 'react-native';
 import { logout } from "../../Screens/Login/Auth";
 
 
 function Setting({navigation}) {

   const signOutSubmit = async () => { // 로그아웃 함수
     try {
       await logout();
       navigation.reset({routes: [{name: "LoginStudent"}]});
       console.log("로그아웃 하였습니다.");
     } catch (e) {
       Alert.alert("로그아웃에 실패하였습니다.");
       console.log(e);
     }
   }
  
   return (
     <View style={styles.mainBody}>
       <ScrollView
         keyboardShouldPersistTaps="handled"
         contentContainerStyle={{
           flex: 1,
           justifyContent: 'center',
           alignContent: 'center',
         }}>
           
         <View>
           <KeyboardAvoidingView enabled>
             <View style={{alignItems: 'center'}}>
               <Image
                 source={require('../../Image/aboutreact.png')}
                 style={{
                   width: '50%',
                   height: 100,
                   resizeMode: 'contain',
                   margin: 30,
                 }}
               />
             </View>
             <TouchableOpacity
               style={styles.buttonStyle}
               activeOpacity={0.5}
               onPress={(signOutSubmit)}>
               <Text style={styles.buttonTextStyle}>로그아웃</Text>
             </TouchableOpacity>
           </KeyboardAvoidingView>
         </View>
       </ScrollView>
     </View>
   );
 };
 export default Setting;
  
 const styles = StyleSheet.create({
   mainBody: {
     flex: 1,
     justifyContent: 'center',
     backgroundColor: '#FFFFFF',
     alignContent: 'center',
   },
   bgImage: {
     width: '100%', 
     height: '100%'
   },
   SectionStyle: {
     flexDirection: 'row',
     height: 40,
     marginTop: 20,
     marginLeft: 35,
     marginRight: 35,
     margin: 10,
   },
   buttonStyle: {
     backgroundColor: '#7DE24E',
     borderWidth: 0,
     color: '#FFFFFF',
     borderColor: '#7DE24E',
     height: 40,
     alignItems: 'center',
     borderRadius: 30,
     marginLeft: 35,
     marginRight: 35,
     marginTop: 20,
     marginBottom: 25,
   },
   buttonTextStyle: {
     color: '#000000',
     paddingVertical: 10,
     fontSize: 16,
   },
   inputStyle: {
     flex: 1,
     color: '#000000',
     paddingLeft: 15,
     paddingRight: 15,
     borderWidth: 1,
     borderRadius: 30,
     borderColor: '#dadae8',
   },
   registerTextStyle: {
     color: '#000000',
     textAlign: 'center',
     fontWeight: 'bold',
     fontSize: 14,
     alignSelf: 'center',
     padding: 10,
   },
   errorTextStyle: {
     color: 'red',
     textAlign: 'center',
     fontSize: 14,
   },
 });