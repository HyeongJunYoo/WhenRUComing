// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
import * as React from 'react';
import { useNavigation } from '@react-navigation/native'; 
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
  BackHandler
} from 'react-native';

function GoToButton({screenName}) {
  const navigation = useNavigation();

  return <Button title={`${screenName}`} onPress={() => navigation.navigate(screenName)} />
}

const Homemain = () => { 
  return (
    <View style={styles.mainBody}>  
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
              > 
              <GoToButton  screenName="Busr" />
              <Text style={styles.buttonTextStyle}>버스 노선</Text>            
            </TouchableOpacity>
            
          
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              >
                 <GoToButton screenName="LoginStudent" />
              <Text style={styles.buttonTextStyle}>QR 카메라</Text>            
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              >
                 <GoToButton screenName="BusMap" />
              <Text style={styles.buttonTextStyle}>버스표</Text>            
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={()=>{
                Alert.alert(
                  '앱 종료하기', // 제목
                  '정말로 종료하시겠습니까?', // 설명
                  [ // 버튼 추가
                    { text: '취소', style: 'cancel'}, 
                    { text: '종료', style: 'destructive', // 버튼 스타일 지정
                      onPress: () => {  // 버튼 콜백함수 지정
                        BackHandler.exitApp();
                        
                      },
                    },
                  ],
                  { // 옵션 추가
                    cancelable: true // 취소 버튼 활성화
                  }, 
                );
              }}
              >                
              <Text style={styles.buttonTextStyle}>앱 종료</Text>            
            </TouchableOpacity>                    
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default Homemain;
 
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