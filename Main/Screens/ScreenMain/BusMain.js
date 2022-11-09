import * as React from 'react';
import firestore from '@react-native-firebase/firestore';
//import { doc, onSnapshot } from "firebase/firestore";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  BackHandler,
} from 'react-native';

import Geolocation from 'react-native-geolocation-service';

const { useState, useEffect } = React
const BusMain = ({route}) => {
  const [busNumber, setBusNumber] = useState(route.params.busNumber);
  const [N , setNumber] = useState(0);
  const bus = firestore().collection('bus');

  useEffect(()=>{
    bus.doc(busNumber).onSnapshot(documentSnapshot  => {
          setNumber(documentSnapshot.data().student_NUM)});

    //Geolocation.watchPosition을 사용해 실시간 좌표 얻기
    const watchId = Geolocation.watchPosition(
      position => {
        //JSON 문자열로 변환하여 위도와 경도값 받아오기
        const CurLatitude = JSON.stringify(position.coords.latitude);
        const CurLongitude = JSON.stringify(position.coords.longitude);
        //좌표값이 존재할 경우 DB 업데이트
        if (CurLatitude && CurLongitude) {
          console.log("서버로 좌표 전송 완료!");
          bus.doc(busNumber).update({latitude: CurLatitude});
          bus.doc(busNumber).update({longitude: CurLongitude});
        }
      },
      //에러날 경우 코드, 메시지 로그 출력
      error => {
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 0,
        interval: 5000,
        fastestInterval: 2000,
      },
    );

    //종료될 때 Geolocation.clear하기 (Unmount)
    return () => {
      if (watchId) {
        Geolocation.clearWatch(watchId);
      }
    };

  },[])

  return(
    <View style={styles.mainBody}>
      <Text style={styles.registerTextStyle}>
      {(() => { 
                return N + " / 45";
              })()}
      </Text>
      <TouchableOpacity
              style={styles.buttonStyle2}
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
              <Text style={styles.buttonTextStyle2}>앱 종료</Text>            
            </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignContent: 'center',
  },
  rumain: {
    flex: 1,
    flexDirection: 'row',
    marginTop: "10%"                
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
  buttonStyle2: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 32,
    width: 100,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: "39%",
   
  
   
  },
  buttonStyle3: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 32,
    width: 100,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: "1%",
    marginRight: 10,
   
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
    fontSize: 50,
    alignSelf: 'center',
    padding: 50,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  bgImage: {
    width: '100%', 
    height: '100%'
  },
});

export default BusMain;