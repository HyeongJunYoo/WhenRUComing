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
  Image
  
} from 'react-native';

import Geolocation from 'react-native-geolocation-service';

//import AsyncStorage from "@react-native-async-storage/async-storage";
import AsyncStorage from '@react-native-async-storage/async-storage';


const { useState, useEffect } = React
const BusMain = ({route}) => {
  const [busNumber, setBusNumber] = useState(route.params.busNumber);
  const [N , setNumber] = useState(0);
  const bus = firestore().collection('bus');
  const isEmpty = function (value) {
    if (value === '' || value === null || value === undefined || (value !== null && typeof value === 'object' && !Object.keys(value).length)) {
      return true;
    } else {
      return false;
    }
  };
  
  // AsyncStorage get 함수 모듈
  const getItemFromAsync = (storageName) => {
    if (isEmpty(storageName)) {
      console.log('작동안됨')
      return true
      //throw Error('Storage Name is empty');
    }
    
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(storageName, (err, result) => {
        if (err) {
          reject(err);
        }
        
        if (result === null) {
          resolve(null);
        }
        console.log('Done.1')
        resolve(JSON.parse(result));
      });
    });
  };
  
  // AsyncStorage set 함수 모듈
  const setItemToAsync = (storageName, item) => {
    if (isEmpty(storageName)) {
      throw Error('Storage Name is empty');
    }
  
    return new Promise((resolve, reject) => {
      AsyncStorage.setItem(storageName, JSON.stringify(item), (error) => {
        if (error) {
          reject(error);
        }
        console.log('Done.')
        resolve('입력 성공');
      });
    });
  };

  useEffect(()=>{
    bus.doc(busNumber).onSnapshot(documentSnapshot  => {
          setNumber(documentSnapshot.data().student_NUM)});
          const array = ['0', '1', '2','3','4','5','6'];
          const busst = [le, B ,BIn, InGi, GiSa];

          
    //Geolocation.watchPosition을 사용해 실시간 좌표 얻기
    const watchId = Geolocation.watchPosition(
      position => {
        //JSON 문자열로 변환하여 위도와 경도값 받아오기

       
        if( getItemFromAsync("busstop")){
          setItemToAsync("busstop",{"le":0,"B":0,"IN":0,"GI":1,"SA":0,"B1":0,"Le1":0})
        }
        //만약 정보가 없을 경우 생성
        
        
          var busstop =0
          var busstoplength
          var busd
          var sum=0
          AsyncStorage.getItem("busstop", (err, result) => {
            const UserInfo = JSON.parse(result);
            
            if(UserInfo.le==1){
              busstop=1;
              busstoplength=0
            }else if(UserInfo.B==1){
              busstop=1;
              busstoplength=1
            }else if(UserInfo.IN==1){
              busstop=1;
              busstoplength=2
            }else if(UserInfo.GI==1){
              busstop=1;
              busstoplength=3
            }else if(UserInfo.SA==1){
              busstop=1;
              busstoplength=4
            }else if(UserInfo.B1==1){
              busstop=1;
              busstoplength=5
            }else if(UserInfo.Le1==1){
              busstop=1;
              busstoplength=6
            }
          for(var i=1; i<busst[busstoplength].length-1;i++ ){
            sum +=Bus1(busst[busstoplength][i].X,busst[busstoplength][i].Y,busst[busstoplength][i+1].X,busst[busstoplength][i+1].Y)
            console.log(sum);
          }
          sum +=Bus1(JSON.stringify(((position.coords.latitude))),JSON.stringify(((position.coords.longitude))),busst[busstoplength][0].X,busst[busstoplength][0].Y)
          console.log(sum); 
          console.log(JSON.stringify(((position.coords.latitude)))); 
          console.log(JSON.stringify(((position.coords.longitude))));
          console.log(busst[3].length);

          const CurLatitude = sum;
          const CurLongitude = busstoplength;
          if (CurLatitude && CurLongitude) {
            console.log("서버로 좌표 전송 완료!");
            bus.doc(busNumber).update({latitude: CurLatitude});
            bus.doc(busNumber).update({longitude: CurLongitude});
          }
          });

       //const CurLatitude = JSON.stringify(((position.coords.latitude)));
       // const CurLongitude = JSON.stringify(((position.coords.longitude)));

      
       
        //좌표값이 존재할 경우 DB 업데이트
       
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
//버스 위치 계산 및 보내기

//지점 거리 게산식
const Bus1 = (X1,Y1,X2,Y2) => {
  let bus = Math.pow(X2-X1,2) + Math.pow(Y2-Y1,2)
  let busResult = Math.sqrt(bus)*100
 // busResult= busResult/20*60
  //   busResult=busResult/0.06
  //  busResult=busResult*60
  //   busResult= Math.round(busResult*100)/100
  busResult= Math.ceil(busResult*100)/100
  console.log('계산!')
  return busResult;
};
//각 지점 좌표
const le =[
  {
    id: 1,
    //name: IeX , // 이공간 좌표
    X: 37.276682   ,
    Y: 127.134465 
  },
]

const B =[
  {
    id: 1,
    //name: IeX , // 본관 좌표
    X: 37.275715    ,
    Y: 127.133373  
  },
]
const BIn =[
  {
    id: 1,
    //name: IeX , // 본관 ->인문 꺽이는 길 1
    X: 37.275204     ,
    Y: 127.132472  
  },
  {
    id: 2,
    //name: IeX , // 본관 ->인문 꺽이는 길 2
    X: 37.275651     ,
    Y: 127.131907  
  },
  {
    id: 3,
    //name: IeX , // 인문 좌표
    X: 37.275074     ,
    Y: 127.130962  
  },
]
const InGi =[
  {
    id: 1,
    //name: frontGate, // 인문- > 입구까지 길 중 꺽이는 길
    X: 37.274361  ,
    Y: 127.129213 
  },
  {
    id: 2,
    //name: frontGate, // 강남대 정문
    X: 37.273563 ,
    Y: 127.129148 
  },
  {
    id: 3,
  //  name: InGi,  //정문 지나고 삼거리
    X: 37.270741 ,
    Y: 127.126310 
  },
  {
    id: 4,
 //   name: InGi1,  //기흥역 가는곳 사거리1
    X:  37.275616 ,
    Y:  127.120009 
  },
  {
    id: 5,
 //   name: InGi2,  //기흥역 가는곳 꺽이는곳
    X:  37.274111 ,
    Y:  127.118607 
  },
  {
    id: 6,
  //  name: InGi5,  //기흥역 가는곳 사거리
    X: 37.273794  ,
    Y: 127.116077 
  },
  {
    id: 7,
  //  name: InGi,  //기흥역(4번출구)
    X:  37.274572 ,
    Y:  127.116073 
  },
]

const GiSa =[
{
  id: 1,
//   name: GiSa,  // 샬룸관 가는 길 사거리
  X: 37.275994  ,
  Y: 127.116104  
},
{
  id: 2,
//    name: GiSa1,  //샬룸관 가는 길 꺽이는 곳
  X: 37.275738  ,
  Y: 127.119236 
},
{
  id: 3,
//    name: GiSa2,  //샬룸관 가는 길 삼거리
  X: 37.270481  ,
  Y: 127.126427 
},
{
  id: 4,
//   name: frontGate1,  //강남대 정문
  X: 37.273563  ,
  Y: 127.129148 
},
{
  id: 5,
//   name: GiSa3,  //샬룸관 가는 길 꺽이는 곳(학교)
  X: 37.273905  ,
  Y: 127.130606 
},
{
  id: 6,
//   name: Sa,  //샬룸관 
  X: 37.274591  ,
  Y: 127.130239 
}
]
// const array = ['0', '1', '2','3','4','5','6'];
// const busst = [le, B ,BIn, InGi, GiSa];
// const isEmpty = function (value) {
//   if (value === '' || value === null || value === undefined || (value !== null && typeof value === 'object' && !Object.keys(value).length)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// // AsyncStorage get 함수 모듈
// const getItemFromAsync = (storageName) => {
//   if (isEmpty(storageName)) {
//     console.log('작동안됨')
//     return true
//     //throw Error('Storage Name is empty');
//   }
  
//   return new Promise((resolve, reject) => {
//     AsyncStorage.getItem(storageName, (err, result) => {
//       if (err) {
//         reject(err);
//       }
      
//       if (result === null) {
//         resolve(null);
//       }
//       console.log('Done.1')
//       resolve(JSON.parse(result));
//     });
//   });
// };

// // AsyncStorage set 함수 모듈
// const setItemToAsync = (storageName, item) => {
//   if (isEmpty(storageName)) {
//     throw Error('Storage Name is empty');
//   }

//   return new Promise((resolve, reject) => {
//     AsyncStorage.setItem(storageName, JSON.stringify(item), (error) => {
//       if (error) {
//         reject(error);
//       }
//       console.log('Done.')
//       resolve('입력 성공');
//     });
//   });
// };
// if( getItemFromAsync("busstop")){
//   setItemToAsync("busstop",{"le":0,"B":0,"IN":0,"GI":1,"SA":0,"B1":0,"Le1":0})
// }
// //만약 정보가 없을 경우 생성


//   var busstop =0
//   var busstoplength
//   var busd
//   var sum=0
//   AsyncStorage.getItem("busstop", (err, result) => {
//     const UserInfo = JSON.parse(result);
//     console.log(UserInfo); 
//     if(UserInfo.le==1){
//       busstop=1;
//       busstoplength=0
//     }else if(UserInfo.B==1){
//       busstop=1;
//       busstoplength=1
//     }else if(UserInfo.IN==1){
//       busstop=1;
//       busstoplength=2
//     }else if(UserInfo.GI==1){
//       busstop=1;
//       busstoplength=3
//     }else if(UserInfo.SA==1){
//       busstop=1;
//       busstoplength=4
//     }else if(UserInfo.B1==1){
//       busstop=1;
//       busstoplength=5
//     }else if(UserInfo.Le1==1){
//       busstop=1;
//       busstoplength=6
//     }
//   for(var i=1; i<busst[busstoplength].length-1;i++ ){
//     sum +=Bus1(busst[busstoplength][i].X,busst[busstoplength][i].Y,busst[busstoplength][i+1].X,busst[busstoplength][i+1].Y)
//     console.log(sum);
//   }
//   sum +=Bus1(37.123456,127.123456,busst[busstoplength][0].X,busst[busstoplength][0].Y)
//      return sum
//   });

  
//var temp1 =getItemFromAsync('buscheck')
//console.log(temp1.check)
//중간 지점 및 도착 채크 값(도착 짖점 영역 안에 있을 경우 1 없으면 0 ) 
//7: 이공관 {in:0} 
//8: 본관 {in:0} 
//9:인문사회관 {in:0,step1:0,step2:0}
//10: 기흥역 {in:0 step1:0,step2:0.step3:0, step4:0,step5:0,step6:0}
//11: 샬룸관 {in:0 step1:0,step2:0.step3:0, step4:0,step5:0}

//만약 정보가 없을 경우 생성
// for(var i=7;i<12;i++){
//   if(getItemFromAsync(i)){
//     if(i==9){
//       setItemToAsync(i,{in:0,step1:0,step2:0})
//     }else if(i==10){
//       setItemToAsync(i,{in:0, step1:0,step2:0, step3: 0, step4:0,step5:0,step6:0})
//     }else if(i==11){
//       setItemToAsync(i,{in:0 ,step1:0,step2:0, step3:0, step4:0,step5:0})
//     }else{
//       setItemToAsync(i,{in:0})
//     }
//    }
//   }
// //각 지점 별 영역 도착 확인


if( getItemFromAsync("busstop")){
  setItemToAsync("busstop",{"le":0,"B":0,"IN":0,"GI":1,"SA":0,"B1":0,"Le1":0})
}

// //=======================

// //인문관 -> 본관

// if(getItemFromAsync(0)==1 && getItemFromAsync(1)==0){
//          
// }else if(getItemFromAsync(1)==1 && getItemFromAsync(2)==0){

// }else if(getItemFromAsync(2)==1 && getItemFromAsync(3)==0){

// }else if(getItemFromAsync(3)==1 && getItemFromAsync(4)==0){

// }else if(getItemFromAsync(4)==1 && getItemFromAsync(5)==0){

// }else if(getItemFromAsync(5)==1 && getItemFromAsync(6)==0){

// }



//=======================================================================================================
  return(
    <View style={styles.mainBody}>
    <Image
      style={styles.Tabbar2False}
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/f01r4bb6oxi-41%3A437?alt=media&token=041420d5-2a26-404f-b10e-56c9d686721c",
      }}
    />
    <Text style={styles.Txt361}>/  45</Text>
    <Text style={styles.Txt582}>{(() => { 
                return 45-N;
              })()}</Text>
           
    <Text style={styles.Txt671}>빈 좌석</Text>
    <Text style={styles.Txt3710}>{}전체 좌석</Text>
     {/* <Image
      style={styles.Image3}
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/f01r4bb6oxi-42%3A586?alt=media&token=0125eb05-fbe7-4668-a59a-dba18b22f023",
      }}
    /> */}
    <View style={styles.Group440}>
      <Text style={styles.Txt379}>{}탑승 인원</Text>
      {//<Text style={styles.Txt203}>승하차 기록</Text>
      
     //<View style={styles.Rectangle22} />
      //<Text style={styles.Txt837}>
       // 2022-11-08 08:40 학생 1이 탑승하였습니다. 2022-11-08 08:41 학생 3이
       // 탑승하였습니다. 2022-11-08 08:56 학생 2가 하차하였습니다.
        
     // </Text>
      }
       <TouchableOpacity
              style={styles._login_button}
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
              <Text style={styles.Txt898}>{}</Text>            
            </TouchableOpacity>
    </View> 
  </View>
  )
}

const styles = StyleSheet.create({
  Txt898: {
    fontSize: 18,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(255,187,128,1)",
    textAlign: "center",
    justifyContent: "center",
  },
  _login_button: {
    top:"45%",
    left: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  AndroidSmall20: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 360,
    height: 640,
  },
  Tabbar2False: {
    position: "absolute",
    top: 63,
    left: 0,
    width: "100%",
    height: 299,
  },
  Txt361: {
    position: "absolute",
    top: 164,
    left: "45%",
    fontSize: 80,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 174,
    height: 97,
  },
  Txt582: {
    position: "absolute",
    top: 163,
    left: "10%",
    fontSize: 80,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 142,
    height: 118,
  },
  Txt671: {
    position: "absolute",
    top: 115,
    left: "20%",
    fontSize: 20,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 61,
    height: 24,
  },
  Txt3710: {
    position: "absolute",
    top: 115,
    left: "65%",
    fontSize: 20,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 80,
    height: 24,
  },
  Image3: {
    position: "absolute",
    top: 401,
    left: 363,
    width: 21,
    height: 239,
  },
  Group440: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: 14,
    none: "0px",
    width: 360,
    height: 501,
  },
  Txt379: {
    left: "9%",
    fontSize: 18,
    fontFamily: "Actor, sans-serif",
    fontWeight: "400",
    lineHeight: 50,
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 91,
    height: 35,
    marginBottom: 327,
  },
  Txt203: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 7,
  },
  Rectangle22: {
    backgroundColor: "rgba(217,217,217,1)",
    width: 360,
    height: 1,
    marginBottom: 22,
  },
  Txt837: {
    fontSize: 16,
    fontFamily: "Actor, sans-serif",
    fontWeight: "400",
    lineHeight: 30,
    color: "rgba(0,0,0,1)",
  },
  //=====================
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
  registerTextStyle2: {
    color: '#ff0000',
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