import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import React, { Component } from "react";

export default function QRtest() {
    const addCollection = firestore().collection('bus');
    return (
        addCollection.doc("1234").get().then((doc)=>{
            try{
              if(doc.data().student_NUM<45){
                const number=doc.data().student_NUM;
                addCollection.doc("1234").update({student_NUM:number+1});
              }
            }catch(e){
            }
          })
      
      );
  }
