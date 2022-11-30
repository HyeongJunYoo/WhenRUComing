import React, {Component} from 'react';
import {View, Text, Linking, TouchableOpacity, StyleSheet, Button} from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

 
export default class Setting extends Component {
    
    constructor(){
        super();
        this.state={
            region:{
                latitude:37.2759,
                longitude:127.1325,
                // 얼마의 위도경도 차이까지 지도에 표시되는가 (zoom 설정)
                latitudeDelta:0.009,
                longitudeDelta:0.004,
            },
            markers:[{
                latlng:{latitude:37.274313, longitude:127.130405},
                title:"샬롬관",
                description:"강남대학교"
            },
            {
                latlng:{latitude:37.276682, longitude:127.134465},
                title:"이공관",
                description:"강남대학교"
            },
            {
                latlng:{latitude:37.275715, longitude:127.133373},
                title:"본관",
                description:"강남대학교"
            },
            {
                latlng:{latitude:37.275074, longitude:127.130962},
                title:"인문사회관",
                description:"강남대학교"
            },
            {
                latlng:{latitude:37.274572, longitude:127.116073},
                title:"기흥역",
                description:"4번출구"
            },
            {
                latlng:{latitude:37.271, longitude:127.1258},
                title:"스타벅스 앞",
                description:"오전"
            },
            {
                latlng:{latitude:37.271483, longitude:127.127144},
                title:"GS25 앞",
                description:"오후"
            }],
        }
 
    }
 
    render(){
        return(
            <View style={{flex:1}}>
            <View>
            <TouchableOpacity
                style={styles.Bus_Map_button}
                activeOpacity={0.5} 
                onPress={() => this.props.navigation.navigate("BusMap")}>
                <Text style={styles.Txt728}>버스 시간표</Text>
            </TouchableOpacity>
            </View>
            
           
                
                <MapView 
                    style={{flex:1,}}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={
                        // {
                        //     latitude:37.562087,
                        //     longitude:127.035192,
                        //     // 얼마의 위도경도 차이까지 지도에 표시되는가 (zoom 설정)
                        //     latitudeDelta:0.009,
                        //     longitudeDelta:0.004,
                        //<Text style={{padding:8,}}>Map Test</Text>
                        // }
                        this.state.region
                    }>
                        {/* 마커 추가 */}
                        
                        {/* 마커여러개 동시에 찍기 */}
                        {
                            this.state.markers.map((marker,index)=>{
 
                               return <Marker
                                    coordinate={marker.latlng}
                                    title={marker.title}
                                    description={marker.description}
                                    key={index}
                                    //image={require('../../Image/Map_icon.png')} //마커 이미지 예시 코드
                                    //image={require('../../Image/Bus_1.png')} //1번 마커 이미지
                                    //image={require('../../Image/Bus_2.png')} //2번 마커 이미지
                                    image={require('../../Image/Bus_3.png')} //3번 마커 이미지 //일단 확정?!
                                    //image={require('../../Image/Bus_4.png')} //4번 마커 이미지
                                    //image={require('../../Image/Bus_5.png')} //5번 마커 이미지
                                    >
                                </Marker>
                            })
                        }
 
                </MapView>
            </View>
        );
    }
 

    clickCallout=()=>{
        //alert('');
        // 특정 URL의 웹문서를 디바리스의 웹브라우저를 통해 열기
        Linking.openURL('https://www.kangnam.ac.kr');
    }
}

const styles = StyleSheet.create({
    Bus_Map_button:{
        //borderWidth:3,
                borderColor:'rgba(255,187,128,1)',
                alignItems:'center',
                justifyContent:'center',
                //width:100,
                height:50,
                backgroundColor:'#FFBB80',
                borderRadius:100,
    },
    Txt728: {
        fontSize: 20,
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        color: "rgba(255, 255, 255, 1)",
        textAlign: "center",
        justifyContent: "center",
      }
})

//기존 로그아웃 코드
// // Import React and Component
// import React, {useState, useEffect, createRef} from 'react';
// import {
//   StyleSheet,
//   TextInput,
//   View,
//   Text,
//   ScrollView,
//   Image,
//   Keyboard,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Alert,
// } from 'react-native';
// import {logout} from '../../Screens/Login/Auth';

// function Setting({navigation}) {
//   const signOutSubmit = async () => {
//     // 로그아웃 함수
//     try {
//       await logout();
//       navigation.reset({routes: [{name: 'LoginStudent'}]});
//       console.log('로그아웃 하였습니다.');
//     } catch (e) {
//       Alert.alert('로그아웃에 실패하였습니다.');
//       console.log(e);
//     }
//   };

//   return (
//     <View style={styles.mainBody}>
//       <ScrollView
//         keyboardShouldPersistTaps="handled"
//         contentContainerStyle={{
//           flex: 1,
//           justifyContent: 'center',
//           alignContent: 'center',
//         }}>
//         <View>
//           <KeyboardAvoidingView enabled>
//             <View style={{alignItems: 'center'}}>
//               <Image
//                 source={require('../../Image/aboutreact.png')}
//                 style={{
//                   width: '50%',
//                   height: 100,
//                   resizeMode: 'contain',
//                   margin: 30,
//                 }}
//               />
//             </View>
//             <TouchableOpacity
//               style={styles.buttonStyle}
//               activeOpacity={0.5}
//               onPress={signOutSubmit}>
//               <Text style={styles.buttonTextStyle}>로그아웃</Text>
//             </TouchableOpacity>
//           </KeyboardAvoidingView>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }
// export default Setting;

// const styles = StyleSheet.create({
//   mainBody: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#FFFFFF',
//     alignContent: 'center',
//   },
//   bgImage: {
//     width: '100%',
//     height: '100%',
//   },
//   SectionStyle: {
//     flexDirection: 'row',
//     height: 40,
//     marginTop: 20,
//     marginLeft: 35,
//     marginRight: 35,
//     margin: 10,
//   },
//   buttonStyle: {
//     backgroundColor: '#7DE24E',
//     borderWidth: 0,
//     color: '#FFFFFF',
//     borderColor: '#7DE24E',
//     height: 40,
//     alignItems: 'center',
//     borderRadius: 30,
//     marginLeft: 35,
//     marginRight: 35,
//     marginTop: 20,
//     marginBottom: 25,
//   },
//   buttonTextStyle: {
//     color: '#000000',
//     paddingVertical: 10,
//     fontSize: 16,
//   },
//   inputStyle: {
//     flex: 1,
//     color: '#000000',
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderWidth: 1,
//     borderRadius: 30,
//     borderColor: '#dadae8',
//   },
//   registerTextStyle: {
//     color: '#000000',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 14,
//     alignSelf: 'center',
//     padding: 10,
//   },
//   errorTextStyle: {
//     color: 'red',
//     textAlign: 'center',
//     fontSize: 14,
//   },
// });