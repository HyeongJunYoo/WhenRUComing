import * as React from 'react';
// Import React and Component
import  BusMath from '../../Screens/ScreenMain/MapMath'
import {
  View,
  Text,
  StyleSheet,
  Button,
  Icon,
  RefreshControl
} from 'react-native';
import BusMap from './BusMap';
import {useState} from 'react';

//firebase/firestore import
import firestore from '@react-native-firebase/firestore';

export default function A() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLogitude] = useState();
  //서버에서 좌표 데이터를 가져오는 함수
 const GetLocationData = () => {
  const busData = firestore().collection('bus');
  //위도, 경도
  busData.doc("1234").get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        setLatitude(doc.data().latitude);
        setLogitude(doc.data().longitude);
    } else {
        console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });
};

  // 지점 별 거리 계산 식
  const Bus1 = (X1,Y1,X2,Y2) => {
    let bus = Math.pow(X2-X1,2) + Math.pow(Y2-Y1,2)
    let busResult = Math.sqrt(bus)*100
    busResult= busResult/30*60
    //   busResult=busResult/0.06
    //  busResult=busResult*60
    //   busResult= Math.round(busResult*100)/100
    busResult= Math.ceil(busResult*10)/10
    return busResult;
  };

  //아마도 버스 랑 도착지점 까지 남은 거리 계산할때 쓸듯? 아직 수정안함
  const Bus2 = (X1,Y1,X2,Y2) => {
    //X1 ,Y1 시작 좌표 
    let bus = Math.pow(X2-X1,2) + Math.pow(Y2-Y1,2)
    let busResult = Math.sqrt(bus)*100
    busResult= busResult/30*60
    //   busResult=busResult/0.06
    //  busResult=busResult*60
    //   busResult= Math.round(busResult*100)/100
    busResult= Math.ceil(busResult*10)/10
    return busResult;
  };

   //let bus = Math.pow(37.276682-37.275715,2) + Math.pow(127.134465-127.133373,2)
   //let busResult = Math.sqrt(bus)
   //let bus = Bus1(37.276682,127.134465,37.275715,127.133373);
   //let bus = Bus1(37.270481,127.126427,37.273563,127.129148);
   const test =[
    {
      id: 1,
      //name: frontGate, // 강남대 정문
      X: 37.273563 ,
      Y: 127.129148 
    },
    {
      id: 2,
    //  name: InGi,  //정문 지나고 삼거리
      X: 37.270741 ,
      Y: 127.126310 
    },
    {
      id: 3,
   //   name: InGi1,  //기흥역 가는곳 사거리1
      X:  37.275616 ,
      Y:  127.120009 
    },
    {
      id: 4,
   //   name: InGi2,  //기흥역 가는곳 꺽이는곳
      X:  37.274111 ,
      Y:  127.118607 
    },
    {
      id: 5,
    //  name: InGi5,  //기흥역 가는곳 사거리
      X: 37.273794  ,
      Y: 127.116077 
    },
    {
      id: 6,
    //  name: InGi,  //기흥역(4번출구)
      X:  37.274572 ,
      Y:  127.116073 
    },
    {
      id: 7,
   //   name: GiSa,  // 샬룸관 가는 길 사거리
      X: 37.275994  ,
      Y: 127.116104  
    },
    {
      id: 8,
  //    name: GiSa1,  //샬룸관 가는 길 꺽이는 곳
      X: 37.275738  ,
      Y: 127.119236 
    },
    {
      id: 9,
  //    name: GiSa2,  //샬룸관 가는 길 삼거리
      X: 37.270481  ,
      Y: 127.126427 
    },
    {
      id: 10,
   //   name: frontGate1,  //강남대 정문
      X: 37.273563  ,
      Y: 127.129148 
    },
    {
      id: 11,
   //   name: GiSa3,  //샬룸관 가는 길 꺽이는 곳(학교)
      X: 37.273905  ,
      Y: 127.130606 
    },
    {
      id: 12,
   //   name: Sa,  //샬룸관 
      X: 37.274591  ,
      Y: 127.130239 
    }
]
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
   //버스1 좌표
   let BusX
   let BusY
   // 각 지점 좌표값===================================================================
   let IeX = 37.276682  //이공관 X좌표
   let IeY = 127.134465 //이공관 Y좌표

   let BX =  37.275715 //본관 X좌표
   let BY =  127.133373 //본관 Y좌표

   let BX_1 = 37.275204 //본관 ->인문 꺽이는 길 1 x좌표 
   let BY_1 = 127.132472 //본관 ->인문 꺽이는 길 1 y좌표
   let BX_2 = 37.275651 //본관 ->인문 꺽이는 길 2 x좌표 
   let BY_2 = 127.131907 //본관 ->인문 꺽이는 길 2 y좌표 

   let InX = 37.275074 //인문사회관 X좌표
   let InY = 127.130962 //인문사회관 Y좌표

   let InGiX_1 = 37.274361 // 인문- > 입구까지 길 중 꺽이는 길 X좌표
   let InGiY_1 = 127.129213 // 인문- > 입구까지 길 중 꺽이는 길 X좌표
   let frontGateX = 37.273563 // 강남대 정문 X좌표
   let frontGateY = 127.129148 // 강남대 정문 Y좌표
   let InGiX_2 = 37.270741 // 정문 지나고 삼거리 X좌표
   let InGiY_2 = 127.126310 // 정문 지나고 삼거리 Y좌표
   let InGiX_3 = 37.275616 // 기흥역 가는곳 사거리1 X좌표
   let InGiY_3 = 127.120009 // 기흥역 가는곳 사거리1 Y좌표
   let InGiX_4 = 37.274111 // 기흥역 가는곳 꺽이는곳  X좌표
   let InGiY_4 = 127.118607 // 기흥역 가는곳 꺽이는곳 Y좌표
   let InGiX_5 = 37.273794 // 기흥역 가는곳 사거리2 X좌표
   let InGiY_5 = 127.116077 // 기흥역 가는곳 사거리2 Y좌표

   let GiX = 37.274572 //기흥역 4번 출구 X좌표
   let GiY = 127.116073 //기흥역 4번 출구 X좌표

   let GiSaX_1 =  37.275994 // 샬룸관 가는 길 사거리 X좌표
   let GiSaY_1 =  127.116104 // 샬룸관 가는 길 사거리 Y좌표
   let GiSaX_2 =  37.275738 // 샬룸관 가는 길 꺽이는 곳 X좌표
   let GiSaY_2 =  127.119236 // 샬룸관 가는 길 꺽이는 곳  Y좌표
   let GiSaX_3 =  37.270481 // 샬룸관 가는 길 삼거리 X좌표
   let GiSaY_3 =  127.126427 // 샬룸관 가는 길 삼거리  Y좌표
   let GiSaX_4 =  37.273905 // 샬룸관 가는 길 꺽이는 곳(학교) X좌표
   let GiSaY_4 =  127.130606 // 샬룸관 가는 길 꺽이는 곳(학교)  Y좌표

   let SaX = 37.274591 //샬룸관 X좌표
   let SaY = 127.1302398 //샬룸관 Y좌표

   let SaBX = 37.274757 //샬룸관 -> 본관 길 꺽이는 곳 X좌표
   let SaBY = 127.130196 //샬룸관 -> 본관 길 꺽이는 곳 Y좌표
//========================================================================================

//각 지점별 도착 채크 변수====================
let IeRoun=1
let BRoun=1
let InRound=1
let GiRound=0
let SaRound=1
//==========================================
//===============================
//도착지점 영역안에 존재여부 채크 변수
let IeRounChek=0
let BRounChek=0
let InRoundChek=0
let GiRoundChek=0
let SaRoundChek=0 

//=========================
//각 지점별 도착  영역
//이공관 도착  영역
let IeRound1X =37.276711
let IeRound1Y =127.134412
let IeRound2X= 37.276645
let IeRound2Y= 127.134513
//==============================
//본관 도착  영역
let BRound1X=37.275775
let BRound1Y=127.133434
let BRound2X=37.275697
let BRound2Y=127.133339
///////////////////////////////////
//인문사회관 도착 영역
let InRound1X=37.275132
let InRound1Y=127.131026
let InRound2X=37.275012
let InRound2Y=127.130917
//==============================
//기흥역 도착  영역
let GiRound1X=37.274633
let GiRound1Y=127.116078
let GiRound2X=37.274457
let GiRound2Y=127.116049
//================================
//샬룸관 도착 영역
let SaRound1X=37.274694
let SaRound1Y=127.130234
let SaRound2X=37.274491
let SaRound2Y=127.130339
//===============================
let i=1;
let j=0;
let a=0;
let b=0;
let sum=0;
//인문관 도착 채크영역

if(IeRound2X<latitude&&latitude<IeRound1X && IeRound1Y<longitude && longitude< IeRound2Y){
  IeRoun =1;
  IeRounChek=1;
}else{
  IeRounChek=0;
}

//본관 도착 채크 영역
if(BRound2X<latitude&&latitude<BRound1X && BRound2Y<longitude && longitude< BRound1Y){
  BRoun =1;
  BRounChek=1;
}else{
  BRounChek=0;
}

//인문사회관 도착 채크 영역
if(InRound2X<latitude&&latitude<InRound1X && InRound2Y<longitude && longitude< InRound1Y){
  InRound =1;
  InRoundChek=1;
}else{
  InRoundChek=0;
}
//기흥역 도착 채크 영역
if(GiRound2X <latitude&&latitude<GiRound1X  && GiRound2Y <longitude && longitude< GiRound1Y ){
  GiRound =1;
  GiRoundChek=1;
}else{
  GiRoundChek=0;
}
//샬룸관 도착 채크 영역
if(SaRound2X  <latitude&&latitude<SaRound1X   && SaRound1Y  <longitude && longitude< SaRound2Y  ){
  SaRound =1;
  SaRoundChek=1;
  
}else{
  SaRoundChek=0;
}
    return (
      <View style={styles.rumain}>
         <View style={styles.ru}>
        <View style={{flex:0.5}}></View>
          
          <View style={styles.rumname}><Text>본관</Text></View>
          <View style={styles.rumname}><Text>인문사회관</Text></View>         
          <View style={styles.rumname}><Text>기흥역(4번출구)</Text></View>        
          <View style={styles.rumname}><Text>샬롬관</Text></View>
          <View style={styles.rumname}><Text>본관</Text></View>
          <View style={styles.rumname}><Text>이공관</Text></View>

        </View>
        <View style={styles.bus}>
        <View style={{flex:0.5}}></View>
        <View style={styles.textstyle}>
          
          <Text> {(() => {
                    if(BRoun==0){
                      sum = Bus1(latitude,longitude,BX,BY)
                      return "본관 도착까지 약: "+sum+" 분"
                    }else if(BRoun ==1 && BRounChek==1){
                      return "버스도착"
                    }else{
                      return "버스 도착 정보 없음"
                    }                   
                })()}
               </Text></View>
        <View style={styles.textstyle}>
        <Text> {(() => {
                   if(InRound==0){
                    for(j=0;j<2;j++){
                      if(Bus1(latitude,longitude,test[j].X,test[j].Y<0.5)){
                     i++ 
                     j++
                     sum=0
                     }
                  }         
                   for(i;i<2;i++){                       
                     sum +=Bus1(test[i].X,test[i].Y,test[i+1].X,test[i+1].Y)                      
                   }
                  let bustest = Bus1(latitude,longitude,test[j].X,test[j].Y)
                   let sum1 = sum + bustest
                   return  "인문 도착까지 약:"+sum1+"분"        
                  }else if(BRoun ==1 && BRounChek==1){
                    return "버스도착"
                  }else{
                    return "버스 도착 정보 없음"
                  } 
                })()}
                </Text></View>
          
        <View style={styles.textstyle}><Text>{(() => {
          
                   if(GiRound==0){
                  //   for(j=0;j<6;j++){
                  //     if(Bus1(latitude,longitude,InGi[j].X,InGi[j].Y == 0.2))
                  //     {
                  //       //추후 sqlite를 이용하여 값 따로 저장
                  //       i++ 
                  //        a++
                  //        sum=0
                  //       console.log(Bus1(latitude,longitude,InGi[a].X,InGi[a].Y));
                  //    }                     
                  // } 
                        
                   for(i;i<6;i++){                       
                     sum +=Bus1(InGi[i].X,InGi[i].Y,InGi[i+1].X,InGi[i+1].Y)                      
                   }
                   let bustest = Bus1(latitude,longitude,InGi[a].X,InGi[a].Y)
                   let sum1 = sum + bustest
                   return  "기흥역 도착까지 약: "+sum1+" 분"        
                  }else if(GiRound ==1 && GiRoundChek==1){
                    return "버스도착"
                  }else{
                    return "버스 도착 정보 없음"
                  } 
                })()}</Text></View>
        <View style={styles.textstyle}><Text>버스 도착정보 없음</Text></View>
        <View style={styles.textstyle}><Text>버스 도착정보 없음</Text></View>
        <View style={styles.textstyle}>
          
               <Text> latitude: {latitude} </Text>
                <Text> longitude: {longitude} </Text>
          <Button title="데이터 새로고침" onPress={       
           GetLocationData
               }></Button>
          
          <Text>이공 도착까지 약: {}분</Text></View>
        </View> 
      </View>
    );
  
}

  const styles = StyleSheet.create({
    rumname: {
      flex: 1                     
    },
    rumain: {
      flex: 1,
      flexDirection: 'row'                
    },
    ru: {
      flex: 3,
      alignItems: 'center',
      backgroundColor: '#7DE24E',
       
    },
    bus: {
      flex: 7,
              
    },
    textstyle: {
      flex: 1 ,
      alignItems: 'center'                    
    },
    
  });