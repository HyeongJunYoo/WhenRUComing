import * as React from 'react';
// Import React and Component

import {
  View,
  Text,
  StyleSheet,
  Image,
  
  
} from 'react-native';

export default function BusMap() {
    return (
     
            <View style={{flex: 1}}>
            <Image style={styles.image} source={{uri : "https://web.kangnam.ac.kr/comm/cmnFile/image.do?encSvrFileNm=8c87323cdd991256a587fb60c411012760fdd15685ff98fbd637fb271001aee469de5dae069697229cbb95ad5f219c6f75bc4de5a37ead1129d62e296666489a"}} ></Image>
            </View>
 
      );

      
  }
  const styles = StyleSheet.create({
    image: {
        width: '100%',
        height:'83%'
    },
  });