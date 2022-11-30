import React, {useRef} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Spinner() {
  const animation = useRef(new Animated.Value(0)).current;
  Animated.loop(
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }),
  ).start();
  const spin = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['-360deg', '360deg'],
  });
  return (
    <View style={styles.mainBody}>
      <Animated.View style={[styles.icons, {transform: [{rotateZ: spin}]}]}>
      <MaterialCommunityIcons
              style={styles.icons}
              name="loading"
              size={50}
              color={'red'}
            />
      </Animated.View>
    </View>
  );
}

export default Spinner;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignContent: 'center',
  },
  icons: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
