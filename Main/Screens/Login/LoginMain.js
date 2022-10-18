// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
// Import React and Component

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
  Button,
  IconCloseImg,
  ImageBackground,
} from 'react-native';

const icons = {
  bakc1: require('../../Image/backg.png'), //초록색 모서리
  bakc2: require('../../Image/bak2.png'), // 하늘색 모서리
};

const LoginMain = ({navigation}) => {
  const HomeMain1 = () => {
    if (true) {
      {
        navigation.navigate('LoginBus');
      }
      return;
    }
  
  };
  const LoginBus = () => {
    if(true){
      {navigation.navigate("LoginBus")}
      return;  
    }
  
  };
  const LoginStudent1 = () => {
    if (true) {
      {
        navigation.navigate('LoginStudent');
      }
      return;
    }
  };
  return (
    
    <View style={styles.mainBody} 
    >
    <ImageBackground source={icons.bakc1} style={styles.bgImage}>
    <TouchableOpacity
              style={styles.buttonStyle2}
              activeOpacity={0.5}   
              onPress= {(LoginBus)}
              > 
              
           
              <Text style={styles.buttonTextStyle2}>버스 기사 로그인</Text>            
            </TouchableOpacity>
      <ScrollView      
      
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
          
        <View>
        
          <KeyboardAvoidingView>
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
              onPress= {(LoginStudent1)}
             
              >
                 
              <Text style={styles.buttonTextStyle}>학생 로그인</Text>            
            </TouchableOpacity>          
          </KeyboardAvoidingView>
        </View>
        <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../Image/intro_logo_new.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            
      </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default LoginMain;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  bgImage: {
    width: '100%',
    height: '100%',
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
  buttonStyle2: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 32,
    width: 100,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: '75%',
    marginRight: 35,
    marginTop: 10,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#000000',
    paddingVertical: 10,
    fontSize: 16,
  },
  buttonTextStyle2: {
    color: '#000000',
    paddingVertical: 10,
    fontSize: 10,
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
