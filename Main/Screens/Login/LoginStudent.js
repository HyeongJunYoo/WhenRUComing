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
import { login, signUp, subscribeAuth } from "../../Screens/Login/Auth";

const icons = {
  bakc1: require('../../Image/backg.png'), //초록색 모서리
  bakc2: require('../../Image/bak2.png') // 하늘색 모서리
};

function LoginStudent({navigation}) {
  const [form, setForm] = useState({
    userId: "",
    userPassword: "",
    confirmPassword: "",
  });
  const [errortext, setErrortext] = useState('');
  const passwordInputRef = createRef();

  useEffect(() => {
    subscribeAuth((user) => { // user 판명을 듣고
      if(user) { // 있으면
        navigation.reset({routes: [{name: "HomeMain"}]})
        console.log("로그인 유지됨!"); // 로그인 됨
      } else {
        navigation.navigate("LoginStudent");
        console.log("로그아웃 상태!!"); // 로그인 안됨
      }

    });
  }, [])

  const signUpSubmit = async () => { // 회원가입 함수
    const {userId, userPassword} = form;
    const info = {userId, userPassword};
    console.log(form);
    console.log(info);
    try {
      const {user} = await signUp((info));
      console.log(user);
    } catch (e) {
      Alert.alert("회원가입에 실패하였습니다.");
      console.log(e);
    }
  }

  const signInSubmit = async () => { // 로그인 함수
    const {userId, userPassword} = form;
    const info = {userId, userPassword};
    console.log(form);
    console.log(info);
    try {
      const {user} = await login(info);
      console.log(user);
    } catch (e) {
      Alert.alert("로그인에 실패하였습니다.");
      console.log(e);
    }
  }
 
  const handleSubmitPress = () => {
    setErrortext('');
    if (!form.userId) {
        Alert.alert(
            '학번 누락 확인',
            '학번을 입력해주세요',
            [
              {text: '확인', onPress: () => {}, style: 'cancel'},             
            ],
            {
              cancelable: true,
              onDismiss: () => {},
            },       
       );
    }
    else if (!form.userPassword) {
        Alert.alert(
            '비밀번호 누락 확인',
            '비밀번호를 입력해주세요',
            [
              {text: '확인', onPress: () => {}, style: 'cancel'},             
            ],
            {
              cancelable: true,
              onDismiss: () => {},
            },       
       );
    }
    else {
      signInSubmit();
      }
  };
  return (
    <View style={styles.mainBody}>
      <ImageBackground source={icons.bakc1} style={styles.bgImage}>
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
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(userId) =>
                  setForm({...form, userId : userId})
                }
                placeholder="학번"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(userPassword) =>
                  setForm({...form, userPassword : userPassword})
                }
                placeholder="비밀번호" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="hide"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={(handleSubmitPress)}>
              <Text style={styles.buttonTextStyle}>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={(signUpSubmit)}>
              <Text style={styles.buttonTextStyle}>회원가입</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("LoginBus")}>
              <Text style={styles.buttonTextStyle}>버스기사</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
       
      </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default LoginStudent;
 
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