// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
 
// Import React and Component
import React, {useState, createRef} from 'react';
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
  Button
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

function GoToButton({screenName}) {
  const navigation = useNavigation();

  return <Button title={`${screenName}`} onPress={() => navigation.navigate(screenName)} />
}


function LoginStudent({navigation}) {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
 
  const passwordInputRef = createRef();
 
  const addCollection = firestore().collection('student'); //student라는 컬렉션으로 data 추가
  const addText = async () => {
    try {
      await addCollection.add({
        studentId: userId,
        password: userPassword,
      });
      setUserId('');
      setUserPassword('');
      console.log('Create Complete!');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userId) {
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
      return;
    }
    if (!userPassword) {
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
      return;
    }
    if(userId && userPassword){
      addCollection.doc(userId).get().then((doc)=>{
        try{
          if(doc.data().password==userPassword){
            {navigation.navigate("HomeMain")};
            return;
          }
          else{
            Alert.alert(
              '비밀번호 오류 확인',
              '비밀번호를 다시 입력해주세요',
              [
                {text: '확인', onPress: () => {}, style: 'cancel'},             
              ],
              {
                cancelable: true,
                onDismiss: () => {},
              },  
            )
            return;
          }
        }catch(e){
          Alert.alert(
            '학번 오류 확인',
            '학번을 다시 입력해주세요',
            [
              {text: '확인', onPress: () => {}, style: 'cancel'},             
            ],
            {
              cancelable: true,
              onDismiss: () => {},
            },     
          );
          return;
        }
      }) 
    }
  };
 
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
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(userId) =>
                  setUserId(userId)
                }
                placeholder="학번" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="number-pad"
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
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
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
            <Button title="Id/Password 추가" onPress={addText} />
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
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