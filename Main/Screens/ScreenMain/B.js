import * as React from 'react';
// Import React and Component

import {
  View,
  Text,
  StyleSheet,
  
} from 'react-native';

export default function B() {
  return (
    <View style={styles.rumain}>
      <View style={styles.ru}>
        <View style={{flex:0.5}}></View>
          <View style={styles.rumname}><Text>이공관</Text></View>
          <View style={styles.rumname}><Text>본관</Text></View>
          <View style={styles.rumname}><Text>인문사회관</Text></View>
          <View style={styles.rumname}><Text>스타벅스 앞</Text></View>
          <View style={styles.rumname}><Text>샬롬관</Text></View>
          <View style={styles.rumname}><Text>본관</Text></View>
          <View style={styles.rumname}><Text>이공관</Text></View>

        </View>
      <View style={styles.bus}></View>
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
      flex: 2,
      alignItems: 'center',
      backgroundColor: '#7DE24E',
       
    },
    bus: {
      flex: 8,
      backgroundColor: '#000005'          
    }
    
  });