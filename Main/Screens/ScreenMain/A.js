import * as React from 'react';
// Import React and Component
import  BusMath from '../../Screens/ScreenMain/MapMath'
import {
  View,
  Text,
  StyleSheet,
  Button,
  
} from 'react-native';
import BusMap from './BusMap';


export default function A() {
  const Bus1 = (X1,Y1,X2,Y2) => {
    var bus = Math.pow(X2-X1,2) + Math.pow(Y2-Y1,2)
    var busResult = Math.sqrt(bus)*100
    busResult= busResult/30*60
    //   busResult=busResult/0.06
    //  busResult=busResult*60
    //   busResult= Math.round(busResult*100)/100
    busResult= Math.ceil(busResult*10)/10
    return busResult;
  };

  const Bus2 = (X1,Y1,X2,Y2) => {
    //X1 ,Y1 시작 좌표 
    var bus = Math.pow(X2-X1,2) + Math.pow(Y2-Y1,2)
    var busResult = Math.sqrt(bus)*100
    busResult= busResult/30*60
    //   busResult=busResult/0.06
    //  busResult=busResult*60
    //   busResult= Math.round(busResult*100)/100
    busResult= Math.ceil(busResult*10)/10
    return busResult;
  };


   // var bus = Math.pow(37.276682-37.275715,2) + Math.pow(127.134465-127.133373,2)
   // var busResult = Math.sqrt(bus)
   //var bus = Bus1(37.276682,127.134465,37.275715,127.133373);
   //var bus = Bus1(37.270481,127.126427,37.273563,127.129148);


   var BusX
   var BusY
   // 각 지점 좌표값===================================================================
   var IeX = 37.276682  //이공관 X좌표
   var IeY = 127.134465 //이공관 Y좌표

   var BX =  37.275715 //본관 X좌표
   var BY =  127.133373 //본관 Y좌표

   var BX_1 = 37.275204 //본관 ->인문 꺽이는 길 1 x좌표 
   var BY_1 = 127.132472 //본관 ->인문 꺽이는 길 1 y좌표
   var BX_2 = 37.275651 //본관 ->인문 꺽이는 길 2 x좌표 
   var BY_2 = 127.131907 //본관 ->인문 꺽이는 길 2 y좌표 

   var InX = 37.275074 //인문사회관 X좌표
   var InY = 127.130962 //인문사회관 Y좌표

   var InGiX_1 = 37.274361 // 인문- > 입구까지 길 중 꺽이는 길 X좌표
   var InGiY_1 = 127.129213 // 인문- > 입구까지 길 중 꺽이는 길 X좌표
   var frontGateX = 37.273563 // 강남대 정문 X좌표
   var frontGateY = 127.129148 // 강남대 정문 Y좌표
   var InGiX_2 = 37.270741 // 정문 지나고 삼거리 X좌표
   var InGiY_2 = 127.126310 // 정문 지나고 삼거리 Y좌표
   var InGiX_3 = 37.275616 // 기흥역 가는곳 사거리1 X좌표
   var InGiY_3 = 127.120009 // 기흥역 가는곳 사거리1 Y좌표
   var InGiX_4 = 37.274111 // 기흥역 가는곳 꺽이는곳  X좌표
   var InGiY_4 = 127.118607 // 기흥역 가는곳 꺽이는곳 Y좌표
   var InGiX_5 = 37.273794 // 기흥역 가는곳 사거리2 X좌표
   var InGiY_5 = 127.116077 // 기흥역 가는곳 사거리2 Y좌표

   var GiX = 37.274572 //기흥역 4번 출구 X좌표
   var GiY = 127.116073 //기흥역 4번 출구 X좌표

   var GiSaX_1 =  37.275994 // 샬룸관 가는 길 사거리 X좌표
   var GiSaY_1 =  127.116104 // 샬룸관 가는 길 사거리 Y좌표
   var GiSaX_2 =  37.275738 // 샬룸관 가는 길 꺽이는 곳 X좌표
   var GiSaY_2 =  127.119236 // 샬룸관 가는 길 꺽이는 곳  Y좌표
   var GiSaX_2 =  37.275738 // 샬룸관 가는 길 꺽이는 곳 X좌표
   var GiSaY_2 =  127.119236 // 샬룸관 가는 길 꺽이는 곳  Y좌표
   var GiSaX_3 =  37.270481 // 샬룸관 가는 길 삼거리 X좌표
   var GiSaY_3 =  127.126427 // 샬룸관 가는 길 삼거리  Y좌표
   var GiSaX_4 =  37.273905 // 샬룸관 가는 길 꺽이는 곳(학교) X좌표
   var GiSaY_4 =  127.130606 // 샬룸관 가는 길 꺽이는 곳(학교)  Y좌표

   var SaX = 37.274591 //샬룸관 X좌표
   var SaY = 127.1302398 //샬룸관 Y좌표

   var SaBX = 37.274757 //샬룸관 -> 본관 길 꺽이는 곳 X좌표
   var SaBY = 127.130196 //샬룸관 -> 본관 길 꺽이는 곳 Y좌표
//========================================================================================

//각 지점별 도착 확인 변수====================
var IeRoun=0
var BRoun=0
var InRound=0
var GiRound=0
var SaRound=0
//==========================================
//각 지점별 도착 확인 영역
//이공관 도착 확인 영역
var IeRound1X =37.276711
var IeRound1Y =127.134412
var IeRound2X= 37.276645
var IeRound2Y= 127.134513
//==============================
//본관 도착 확인 영역
var BRound1X=37.275775
var BRound1Y=127.133434
var BRound2X=37.275697
var BRound2Y=127.133339
///////////////////////////////////
//인문사회관 도착확인 영역
var InRound1X=37.275132
var InRound1Y=127.131026
var InRound2X=37.275012
var InRound2Y=127.130917
//==============================
//기흥역 도착 확인 영역
var GiRound1X=37.274633
var GiRound1Y=127.116078
var GiRound2X=37.274457
var GiRound2Y=127.116049
//================================
//샬룸관 도착확인 영역
var SaRound1X=37.274694
var SaRound1Y=127.130234
var SaRound2X=37.274491
var SaRound2Y=127.130339
//===============================

if(IeRound2X<BusX<IeRound1X && IeRound1Y<BusY< IeRound2Y){
  IeRoun =1;
}

//=========================================



















//

   var IeB = Bus1(IeX, IeY, BX, BY) // 이공관 -> 본관

   var BIn = Bus1(BX, BY, BX_1, BY_1)+Bus1(BX_1, BY_1,BX_2, BY_2)+
   Bus1(BX_2, BY_2,InX, InY)//본관 -> 인문

   var InGi =Bus1(InX, InY,InGiX_1, InGiY_1)+Bus1(InGiX_1, InGiY_1,frontGateX, frontGateY)+
   Bus1(frontGateX, frontGateY,InGiX_2, InGiY_2)+Bus1(InGiX_2, InGiY_2,InGiX_3, InGiY_3)+
   Bus1(InGiX_3, InGiY_3,InGiX_4, InGiY_4)+Bus1(InGiX_4, InGiY_4,InGiX_5, InGiY_5)+
   Bus1(InGiX_5, InGiY_5,GiX,GiY)//인문 ->기흥

   var GiSa= Bus1(GiX,GiY,GiSaX_1,GiSaY_1)+Bus1(GiSaX_1,GiSaY_1,GiSaX_2, GiSaY_2)+
   Bus1(GiSaX_2, GiSaY_2,GiSaX_3, GiSaY_3)+Bus1(GiSaX_3, GiSaY_3,frontGateX, frontGateY)+
   Bus1(frontGateX, frontGateY,GiSaX_4, GiSaY_4)+Bus1(GiSaX_4, GiSaY_4,SaX, SaY)// 기흥->샬룸

   var SaB =Bus1(SaX, SaY,SaBX, SaBY)+Bus1(SaBX, SaBY,BX_2, BY_2)+
   Bus1(BX_2, BY_2,BX_1, BY_1)+Bus1(BX_1, BY_1,BX, BY)//샬룸->본관

   var BIe =Bus1(BX, BY,IeX, IeY)//본관->이공

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
                    if (0) return "My name is Merry";
                    else if (1) return "My name is Mary";
                    else return "본관 도착까지 약: "+IeB+" 분";
                })()}
                본관 도착까지 약: {IeB}분</Text></View>
        <View style={styles.textstyle}><Text>인문 도착까지 약: {BIn}분</Text></View>
        <View style={styles.textstyle}><Text>기흥 도착까지 약: {InGi}분</Text></View>
        <View style={styles.textstyle}><Text>샬름 도착까지 약: {GiSa}분</Text></View>
        <View style={styles.textstyle}><Text>본관 도착까지 약: {SaB}분</Text></View>
        <View style={styles.textstyle}><Text>이공 도착까지 약: {BIe}분</Text></View>


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