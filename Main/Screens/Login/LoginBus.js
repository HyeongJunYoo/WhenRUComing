import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  ImageBackground,
  PermissionsAndroid
} from 'react-native';
import firestore from '@react-native-firebase/firestore'; 

const LoginBus = ({navigation}) => {
  const [userId, setuserId] = useState('');
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();
  const icons = {
    bakc1: require('../../Image/backg.png'), //초록색 모서리
    bakc2: require('../../Image/bak2.png') // 하늘색 모서리
  };

  const bus = firestore().collection('bus');

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userId) {
      Alert.alert(
        '버스 번호 누락 확인',
        '버스번호를 입력해주세요',
        [{text: '확인', onPress: () => {}, style: 'cancel'}],
        {
          cancelable: true,
          onDismiss: () => {},
        },
      );
      return;
    } else {
      bus
        .doc(userId)
        .get()
        .then(documentSnapshot => {
          try {
            if(documentSnapshot.exists)
            {
              requestPermissions();
            }
          } catch (e) {
            Alert.alert(
              '버스 번호 오류 확인',
              '버스번호를 다시 입력해주세요',
              [{text: '확인', onPress: () => {}, style: 'cancel'}],
              {
                cancelable: true,
                onDismiss: () => {},
              },
            );
          }
        });
    }
  };

  //비동기식으로 위치 동의 구하기
  async function requestPermissions() {
    if (Platform.OS === 'ios') {
      try{
        const auth = await Geolocation.requestAuthorization('whenInUse');
        if (auth === 'granted') {
          navigation.navigate('BusMain', {busNumber: userId});
        }else{

        }
    }catch(error) {
      console.warn(error);
    }
    }

    if (Platform.OS === 'android') {
      try{
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //navigation을 사용하여 BusMain.js 페이지를 로드, param 값으로 busNumber: userId를 넘김
          navigation.navigate('BusMain', {busNumber: userId});
          console.log("permission 승인완료~");
        }else{

        }
      }catch(error){
        console.warn(error);
      }
    }
  }

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
                onChangeText={userId => setuserId(userId)}
                placeholder="버스 번호" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="number-pad"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>{errortext}</Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>로그인</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default LoginBus;

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
    height: '100%'
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
