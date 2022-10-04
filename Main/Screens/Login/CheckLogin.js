import React, {Component, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  Button
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

function CheckLogin() {
  {
      if (true) {
        return(
          Alert.alert(
              '학번 누락 확인',
              '학번을 입력해주세요',
              [
                {text: '확인', onPress: () => {}, style: 'cancel'},             
              ],
              {
                cancelable: true,
                onDismiss: () => {},
              },       
         )
        );
      }
      if (false) {
        return(
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
         ));
      }
      if(userId && userPassword){
        // navigation.navigate("CheckLogin", {name: "test"})
      }
    };

  // //FireStore 기능 
  // const usersCollection  = firestore().collection('student'); 

  // //데이터 쓰기 Create
  // const createStudent = async () => {
  //   try {
  //     await usersCollection.doc(userId).set({
  //       studentId: userId,
  //       password: userPassword,
  //     });
  //     setUserId('');
  //     setUserPassword('');
  //     console.log('Create Complete!');
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // //데이터 읽기 Read
  // const readStudent = async () => {
  //   try {
  //     const data = await usersCollection.doc(userId).get();
  //     if(data.exists){
  //       setUsers(data);
  //       console.log(users.data["studentId"]);
  //     }else{
  //       console.log("false");
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  //return console.log(route.params.name);

}
export default CheckLogin;