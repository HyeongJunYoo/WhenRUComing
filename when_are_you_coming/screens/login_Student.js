import React, { Component } from 'react';
import { Text,View, StyleSheet, TouchableOpacity ,Button,Image } from 'react-native';
import "react-native-gesture-handler";
export default class login_Student extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize:30}}>login_Student </Text>
        <TouchableOpacity onPress={() => this.go_bus_route_main()}
          >
            <Text>확인</Text>
          </TouchableOpacity>
      </View>
    );
    
  }
  go_bus_route_main(){
    // login_Student으로 화면 이동
    this.props.navigation.navigate('bus_route_main');
  }
}