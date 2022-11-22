// Import React and Component
import React, {useState, createRef} from 'react';
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

import { signUp } from "./Auth";

function SignUp() {
const [form, setForm] = useState({
    userId: "",
    userPassword: "",
    confirmPassword: "",
});

const passwordInputRef = createRef();

const signUpSubmit = async () => { // 회원가입 함수
    console.log(form);
    try {
    const {user} = await signUp((form));
    console.log(user);
    } catch (e) {
    Alert.alert("회원가입에 실패하였습니다.");
    console.log(e);
    }
}

const handleSubmitPress = () => {
    Keyboard.dismiss();
    if (!form.userId) {
        Alert.alert(
            '이메일 누락 확인',
            '이메일을 입력해주세요',
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
    else if (form.userPassword !== form.confirmPassword) {
    Alert.alert(
        '비밀번호 불일치 확인',
        '비밀번호가 일치하지 않습니다',
        [
            {text: '확인', onPress: () => {}, style: 'cancel'},             
        ],
        {
            cancelable: true, //취소버튼 활성화
            onDismiss: () => {},
        },       
    );
    }   
    else {
        signUpSubmit();
    }
};

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
                onChangeText={(userId) =>
                setForm({...form, userId : userId})
                }
                placeholder="이메일"
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
        <View >
        <TextInput
                style={styles.Txt439}
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

        <View >
        <TextInput
                style={styles.Txt439}
                onChangeText={(confirmPassword) =>
                setForm({...form, confirmPassword : confirmPassword})
                }
                placeholder="비밀번호확인" //12345
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
        <View >
        <TouchableOpacity
            style={styles.S_login_button}
            activeOpacity={0.5}
            onPress={(handleSubmitPress)}>
            <Text style={styles.Txt728}>로그인</Text>
            </TouchableOpacity>
        
        </View>

        <View style={styles.Line1} />
    </View>
    </View>
);
};
export default SignUp;

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
Line1: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(215,215,215,1)",
    width: 220,
    height: 2,
    marginBottom: 24,
},
mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignContent: 'center',
},
});