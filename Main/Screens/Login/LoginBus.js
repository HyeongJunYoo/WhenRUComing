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
    <View style={styles.Group752}>
      <Image
        style={styles.RemovebgPreview1}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0umedluyjrfh-92%3A2069?alt=media&token=3ececd93-e61b-4f68-884b-865aac0dc231",
        }}
      />
      <View>
      <TextInput
                style={styles.Txt439}
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
     
      <View >
      <TouchableOpacity
            style={styles.S_login_button}
            activeOpacity={0.5}
            onPress={(handleSubmitPress)}>
            <Text style={styles.Txt728}>로그인</Text>
          </TouchableOpacity>
        
      </View>
   
    
    </View>
  </View>
  );
};
export default LoginBus;

const styles = StyleSheet.create({
  _1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 99,
    paddingBottom: 29,
    paddingLeft: 68,
    paddingRight: 69,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 360,
    height: 640,
  },
  Group752: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  RemovebgPreview1: {
    width: 164,
    height: 108,
    marginBottom: 37,
  },
  Group329: {
    zindex: 10,
    paddingTop: 11,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 182,
    marginBottom: 11,
    backgroundColor: "rgba(245,245,245,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(215,215,215,1)",
    width: 221,
    height: 40,
  },

  Group311: {
    paddingTop: 10,
    paddingBottom: 9,
    paddingLeft: 8,
    paddingRight: 154,
    marginBottom: 24,
    backgroundColor: "rgba(245,245,245,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(215,215,215,1)",
    width: 221,
    height: 40,
  },
  Txt439: {
    paddingTop: 10,
    paddingBottom: 9,
    paddingLeft: 8,
    //paddingRight: 154,
    marginBottom: 24,
    backgroundColor: "rgba(245,245,245,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(215,215,215,1)",
    width: 221,
    height: 40,
    fontSize: 15,
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    color: "rgba(172,172,172,1)",
    //textAlign: "center",
    //justifyContent: "center",
  },

  S_login_button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 8,
    paddingBottom: 5,
    paddingLeft: 82,
    paddingRight: 80,
    marginBottom: 164,
    borderRadius: 5,
    backgroundColor: "rgba(255,187,128,1)",
  },
  Txt728: {
    fontSize: 20,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Line1: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(215,215,215,1)",
    width: 220,
    height: 2,
    marginBottom: 24,
  },
  B_login_button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  Txt898: {
    fontSize: 18,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(255,187,128,1)",
    textAlign: "center",
    justifyContent: "center",
  },
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
