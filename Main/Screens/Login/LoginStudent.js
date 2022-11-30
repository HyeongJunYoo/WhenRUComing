// Import React and Component
import React, {useState, useEffect, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Keyboard,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Loading from './Loading';
import {login, subscribeAuth} from '../../Screens/Login/Auth';

function LoginStudent({navigation}) {
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    userId: '',
    userPassword: '',
    confirmPassword: '',
  });
  const passwordInputRef = createRef();

  useEffect(() => {
    subscribeAuth(user => {
      // user 판명을 듣고
      if (user) {
        // 있으면
        navigation.reset({routes: [{name: 'HomeMain'}]});
        console.log('로그인 유지됨!'); // 로그인 됨
      } else {
        navigation.navigate('LoginStudent');
        console.log('로그아웃 상태!!'); // 로그인 안됨
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  }, []);

  const signInSubmit = async () => {
    // 로그인 함수
    const {userId, userPassword} = form;
    const info = {userId, userPassword};
    console.log(form);
    console.log(info);
    try {
      const {user} = await login(info);
      console.log(user);
    } catch (e) {
      Alert.alert('로그인에 실패하였습니다.');
      setLoading(false);
      console.log(e);
    }
  };

  const handleSubmitPress = () => {
    if (!form.userId) {
      Alert.alert(
        '이메일 누락 확인',
        '이메일을 입력해주세요',
        [{text: '확인', onPress: () => {}, style: 'cancel'}],
        {
          cancelable: true,
          onDismiss: () => {},
        },
      );
    } else if (!form.userPassword) {
      Alert.alert(
        '비밀번호 누락 확인',
        '비밀번호를 입력해주세요',
        [{text: '확인', onPress: () => {}, style: 'cancel'}],
        {
          cancelable: true,
          onDismiss: () => {},
        },
      );
    } else {
      signInSubmit();
      setLoading(true);
    }
  };
  return loading ? (
    <Loading />
  ) : (
    <View style={styles.mainBody}>
      <View style={styles.Group752}>
        <Image
          style={styles.RemovebgPreview1}
          source={require('../../Image/bus_title.png')}
        />
        <View>
          <TextInput
            style={styles.Txt439}
            onChangeText={userId => setForm({...form, userId: userId})}
            placeholder="이메일"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
          />
        </View>
        <View>
          <TextInput
            style={styles.Txt439}
            onChangeText={userPassword =>
              setForm({...form, userPassword: userPassword})
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
        <View>
          <TouchableOpacity
            style={styles.S_login_button}
            activeOpacity={0.5}
            onPress={() => handleSubmitPress}>
            <Text style={styles.Txt728}>로그인</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.J_Membership_button}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.Membership}>
              강남대학생이신가요? 회원가입하기
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Line1} />
        <View>
          <TouchableOpacity
            style={styles.B_login_button}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('LoginBus')}>
            <Text style={styles.Txt898}>버스 기사 로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default LoginStudent;

const styles = StyleSheet.create({
  Group752: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    backgroundColor: 'rgba(245,245,245,1)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(215,215,215,1)',
    width: 221,
    height: 40,
    fontSize: 15,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
    color: 'rgba(172,172,172,1)',
    //textAlign: "center",
    //justifyContent: "center",
  },
  S_login_button: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 8,
    paddingBottom: 5,
    paddingLeft: 82,
    paddingRight: 80,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255,187,128,1)',
  },
  Txt728: {
    fontSize: 20,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    justifyContent: 'center',
  },
  J_Membership_button: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 154,
    marginTop: 20,
  },
  Membership: {
    fontSize: 12,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
    color: 'rgba(255,187,128,1)',
    textAlign: 'center',
    justifyContent: 'center',
  },
  Line1: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'rgba(215,215,215,1)',
    width: 220,
    height: 2,
    marginBottom: 24,
  },
  B_login_button: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  Txt898: {
    fontSize: 18,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
    color: 'rgba(255,187,128,1)',
    textAlign: 'center',
    justifyContent: 'center',
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignContent: 'center',
  },
});
