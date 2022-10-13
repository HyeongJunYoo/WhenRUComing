import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Platform, PermissionsAndroid } from 'react-native';
//Geolocation == Using GPS
import Geolocation from 'react-native-geolocation-service';
import firestore from '@react-native-firebase/firestore';

const BusLocation = ({route}) => {
    //busNumber 값은 LoginBus로부터 받아옴
    //route.params.busNumber 를 사용하여 받아온 값을 사용할 수 있음
    const [busNumber, setBusNumber] = useState(route.params.busNumber);

    //위도, 경도
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLogitude] = useState(null);
    const bus = firestore().collection('bus');
    
    //useEffect를 사용하여 맨 처음 렌더링될 때 한 번만 실행(Mount)
    useEffect(() => {
      //Geolocation.watchPosition을 사용해 실시간 좌표 얻기
      const watchId = Geolocation.watchPosition(
        position => {
          //JSON 문자열로 변환하여 위도와 경도값 받아오기
            setLatitude(JSON.stringify(position.coords.latitude));
            setLogitude(JSON.stringify(position.coords.longitude));
            console.log("실행중");
            //좌표값이 존재할 경우 DB 업데이트
            if(latitude && longitude){
                bus.doc(busNumber).update({latitude: latitude});
                bus.doc(busNumber).update({longitude: longitude});
            }
        },
        //에러날 경우 코드, 메시지 로그 출력
        error => { console.log(error.code, error.message); },
        {
          enableHighAccuracy: true, 
          distanceFilter: 0,
          interval: 5000,
          fastestInterval: 2000,
         }
    );
    
    //종료될 때 Geolocation.clear하기 (Unmount)
    return () => {
      if (watchId) {
        Geolocation.clearWatch(watchId);
      }
    };
  }, []);

    const geoLocation = () => {
      //Geolocation.getCurrentPosition 사용 현재 위치 구하기
        Geolocation.getCurrentPosition(
            position => {
                setLatitude(JSON.stringify(position.coords.latitude));
                setLogitude(JSON.stringify(position.coords.longitude));
                if(latitude && longitude){
                    bus.doc(busNumber).update({latitude: latitude});
                    bus.doc(busNumber).update({longitude: longitude});
                }
            },
            error => { console.log(error.code, error.message); },
            {enableHighAccuracy:true, timeout: 15000, maximumAge: 10000 }
        )
    }

    //비동기식으로 위치 동의 구하기
    //동의가 구해져있을 경우 geoLocation 실행
    async function requestPermissions() {
        if (Platform.OS === 'ios') {
          const auth = await Geolocation.requestAuthorization("whenInUse");
          if(auth === "granted") {
            geoLocation();
          }
        }
      
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            geoLocation();
          }
        }
      }

    return (
        <View>
            <Text> latitude: {latitude} </Text>
            <Text> longitude: {longitude} </Text>
            <Text> busNumber: {busNumber} </Text>
            <TouchableOpacity onPress={() => requestPermissions()}>
                <Text> Get GeoLocation </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BusLocation;