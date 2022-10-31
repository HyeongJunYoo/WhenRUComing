import React from 'react';
import {ActivityIndicator, View, StyleSheet, Image} from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';

// tokenId, userId 저장
AsyncStorage.setItem(
  'userData',
  JSON.stringify({
    token: token,
    userId: userId,
  }),
);

// tokenId, userId 불러오기
const userData = await AsyncStorage.getItem('userData');
