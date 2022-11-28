import React, {useRef} from 'react';
import {Easing, StyleSheet, View, Image, Animated} from 'react-native';

function Loading() {
  const animation = useRef(new Animated.Value(0)).current;
  Animated.loop(
    Animated.timing(animation, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
      easing: Easing.bezier(0, 1, 1, 0),
    }),
  ).start();
  const spin = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const speed = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 600],
  });
  return (
    <View style={styles.mainBody}>
      <Animated.View
        style={[styles.bus_bottom, {transform: [{translateX: speed}]}]}>
        <Image
          source={require('../../Image/bus_bottom.png')}
          style={styles.bus_bottom}
        />
      </Animated.View>
      <Animated.View style={[styles.bus_top, {transform: [{rotateY: spin}]}]}>
        <Image
          source={require('../../Image/bus_top.png')}
          style={styles.bus_top}
        />
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
    right: '35%',
    marginTop: 60,
    width: '100%',
    height: '85%',
  },
});
