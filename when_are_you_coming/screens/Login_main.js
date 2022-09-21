import React, { Component } from 'react';
import { Text,View, StyleSheet, TouchableOpacity ,Button,Image } from 'react-native';

import { images } from '../images';

const styles = StyleSheet.create({
    Button1: {   
        margin: "5%",
        padding: "5%", 
       backgroundColor: "#8CF4B4"
       
    },
    text1:{
        fontSize: 20,
        textAlign: "center"
    },
    IconButton1:{
        margin: "5%",
        padding: "5%",
    }    
  });

export default class Login_main extends Component {
  render() {
    return (
      <View> 
       <TouchableOpacity style={styles.IconButton1} onPress={() => this.go_Login_bus()}>
      <Image source={require('../img/busbutton5.png')} resizeMode ="cover"/>
    </TouchableOpacity>
    
        <TouchableOpacity  style ={styles.Button1} onPress={() => this.go_login_Student()} ><Text style ={styles.text1}>로그인 학생용</Text></TouchableOpacity>
      </View>
    );
  }

  go_Login_bus(){
    // Login_bus으로 화면 이동
    this.props.navigation.navigate('login_bus');
  }
  go_login_Student(){
    // login_Student으로 화면 이동
    this.props.navigation.navigate('login_Student');
  }
}

