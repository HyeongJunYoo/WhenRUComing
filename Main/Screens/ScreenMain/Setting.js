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