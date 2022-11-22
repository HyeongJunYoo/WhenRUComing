import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  PermissionsAndroid
} from 'react-native';
import firestore from '@react-native-firebase/firestore'; 

const LoginBus = ({navigation}) => {
  const [userId, setuserId] = useState('');

  const passwordInputRef = createRef();
  const bus = firestore().collection('bus');

  const handleSubmitPress = () => {
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
        source={require('../../Image/bus_title.png')}
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
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignContent: 'center',
  },
});
