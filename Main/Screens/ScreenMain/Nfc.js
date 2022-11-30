import React from 'react'
import {
  View, Text, TouchableOpacity
} from 'react-native'
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';
import firestore from '@react-native-firebase/firestore';

const addCollection = firestore().collection('bus');
const NFC =()=>{
  componentDidMount=()=>{
    NfcManager.start();
    NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
      console.warn('tag', tag);
      console.log(tag);
      console.log(tag.id)
      if(tag.id=="043D97EAC07480"){
        addCollection.doc("1234").get().then((doc)=>{
          if(doc.data().student_NUM<45){
            const number=doc.data().student_NUM;
            addCollection.doc("1234").update({student_NUM:number+1});
          }
        })
      }
      NfcManager.unregisterTagEvent().catch(() => 0);
    });
  }

  componentWillUnmount=()=>{
    NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    NfcManager.unregisterTagEvent().catch(() => 0);
  }

  _cancel = () => {
    NfcManager.unregisterTagEvent().catch(() => 0);
  }

  _test = async () => {
    try {
      await NfcManager.registerTagEvent();
    } catch (ex) {
      console.warn('ex', ex);
      NfcManager.unregisterTagEvent().catch(() => 0);
    }
  }

  return(
    <View style={{padding: 20}}>
        <Text>NFC Demo</Text>
        <TouchableOpacity 
          style={{padding: 10, width: 200, margin: 20, borderWidth: 1, borderColor: 'black'}}
          onPress={this._test}
        >
          <Text>Test</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{padding: 10, width: 200, margin: 20, borderWidth: 1, borderColor: 'black'}}
          onPress={this._cancel}
        >
          <Text>Cancel Test</Text>
        </TouchableOpacity>
      </View>
  )
}

export default NFC