import React, {Component} from 'react';
import {StyleSheet, Dimensions, View, Alert} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import firestore from '@react-native-firebase/firestore';

const addCollection = firestore().collection('bus');

const QRCodeScannerScreen = ({navigation}) => {
  onSuccess = async e => {
    try {
      addCollection
        .doc(e.data)
        .get()
        .then(doc => {
          if (doc.data().student_NUM < 45) {
            const number = doc.data().student_NUM;
            addCollection.doc(e.data).update({student_NUM: number + 1});
          }
        });
      Alert.alert('차량탑승', '', [
        {text: '확인', onPress: () => console.log('확인')},
      ]);
      {
        navigation.navigate('HomeMain');
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={this.onSuccess}
        showMarker={true}
        checkAndroid6Permissions={true}
        ref={elem => {
          this.scanner = elem;
        }}
        cameraStyle={{height: Dimensions.get('window').height}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default QRCodeScannerScreen;
