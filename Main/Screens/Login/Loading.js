import React, {useEffect, useRef, useState} from 'react';
import {Button, StyleSheet, View, Image, Animated} from 'react-native';

function Loading() {
  const animation = useRef(new Animated.Value(0)).current;
  Animated.loop(
    Animated.timing(animation, {
      toValue: 360,
      duration: 1000,
      useNativeDriver: true,
    }),
  ).start();
  const spin = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '1deg'],
  });
  return (
    <View style={styles.mainBody}>
      <Animated.View
        style={[styles.bus_bottom, {transform: [{translateX: animation}]}]}>
        <Image
          source={require('../../Image/bus_bottom.png')}
          style={styles.bus_bottom}></Image>
      </Animated.View>
      <Animated.View style={[styles.bus_top, {transform: [{rotateY: spin}]}]}>
        <Image
          source={require('../../Image/bus_top.png')}
          style={styles.bus_top}></Image>
      </Animated.View>
    </View>
  );
}

export default Loading;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignContent: 'center',
  },
  bus_top: {
    width: '103%',
    height: '50%',
    position: 'absolute',
  },

  bus_bottom: {
    marginTop: 50,
    width: '100%',
    height: '85%',
  },
});