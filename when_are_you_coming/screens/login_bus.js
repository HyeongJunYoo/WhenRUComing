import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Image,
  } from "react-native";

  import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';
  import 'firebase/compat/firestore';
  import { getDatabase, ref, onValue, set, get } from 'firebase/database';
  
  
  const firebaseConfig = {
    apiKey: "AIzaSyAi5cvBHgrprEH2EdlqNdnk-bKrJYonn-M",
    authDomain: "whenareyoucoming-c8e2f.firebaseapp.com",
    projectId: "whenareyoucoming-c8e2f",
    storageBucket: "whenareyoucoming-c8e2f.appspot.com",
    messagingSenderId: "467010967677",
    appId: "1:467010967677:web:32dc7078946dd1d466b914",
    measurementId: "G-YMREQZBGQM"
  };
  
  let app;
  
  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
  } else {
    app = firebase.app();
  }
  
  const db = app.firestore();
  const auth = firebase.auth();
  
  export { db, auth };
  
  
  const dbRef = ref(getDatabase());
  
  function checkid(userId){
    console.log(userId);
    try{
      db.collection(`User/bus/${userId}`).get().then((value)=>{
        if(value){
          console.log("true")
        }
      })
    }
    catch{
      console.log("false")
    }
  }





export default class login_bus extends Component {
    state = {
        id: "",
      };
     
      busnum = text => {
        this.setState({ id: text });
      };
     
      login = (id) => {
        alert("버스번호 :" + id);
      };
  render() {
    return (
      <View>
        <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="버스 번호"         
            autoCapitalize="none"
            onChangeText={this.busnum}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => checkid(this.state.id)}
          >
            <Text style={styles.submitButtonText}>확인</Text>
          </TouchableOpacity>
          <Image style={styles.img1} source={require("../img/bus1.png")}></Image>
      </View>
    );
    
  }
  
}
const styles = StyleSheet.create({
    container: {
      paddingTop: 20
    },
    input: {
      margin: 15,
      height: 40,
      borderColor: "#7a4",
      borderWidth: 1
    },
    submitButton: {
      backgroundColor: "#7a4",
      padding: 10,
      margin: 15,
      height: 40
    },
    submitButtonText: {
    color: "white",
    alignSelf: 'center'
    },
    BouncyCheckboxstyle:{
      margin: 15,
    },
    img1:{
     padding: 10,    
      width: "100%",
      height: "50%",
    }
  });