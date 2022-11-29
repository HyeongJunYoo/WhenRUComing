import React, {useState, useRef, useEffect} from 'react';
// Import React and Component
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const DATA = [
  {
    id: '0',
    title: '1번째 정류장',
    nextStop01: false,
    nextStop02: false,
    nextStop03: false,
    nextStop04: false,
  },
  {
    id: '1',
    title: '2번째 정류장',
    nextStop01: true,
    nextStop02: false,
    nextStop03: false,
    nextStop04: false,
  },
  {
    id: '2',
    title: '3번째 정류장',
    nextStop01: false,
    nextStop02: false,
    nextStop03: false,
    nextStop04: false,
  },
  {
    id: '3',
    title: '4번째 정류장',
    nextStop01: false,
    nextStop02: false,
    nextStop03: false,
    nextStop04: false,
  },
  {
    id: '4',
    title: '5번째 정류장',
    nextStop01: false,
    nextStop02: false,
    nextStop03: false,
    nextStop04: false,
  },
  {
    id: '5',
    title: '6번째 정류장',
    nextStop01: false,
    nextStop02: false,
    nextStop03: false,
    nextStop04: false,
  },
  {
    id: '6',
    title: '7번째 정류장',
    nextStop01: false,
    nextStop02: false,
    nextStop03: false,
    nextStop04: false,
  },
  {
    id: '7',
    title: '8번째 정류장',
    nextStop01: false,
    nextStop02: false,
    nextStop03: false,
    nextStop04: false,
  },
  {
    id: '8',
    title: '9번째 정류장',
    nextStop01: false,
    nextStop02: false,
    nextStop03: false,
    nextStop04: false,
  },
  {
    id: '9',
    title: '10번째 정류장',
    nextStop01: false,
    nextStop02: false,
    nextStop03: false,
    nextStop04: false,
  },
  {
    id: '10',
    title: '11번째 정류장',
    nextStop01: false,
    nextStop02: false,
    nextStop03: false,
    nextStop04: false,
  },
];

export default function A() {
  const [data, setData] = useState(DATA);
  const [nextDest, setNextDest] = useState('2');
  const [distLeft, setDistLeft] = useState(0);
  const animation = useRef(new Animated.Value(0)).current;
  const bus = firestore().collection('bus');

  useEffect(() => {
    bus.doc(1234).onSnapshot(documentSnapshot => {
      setNextDest(documentSnapshot.data().longtitude);
      setDistLeft(documentSnapshot.data().latitude);
    });
  }, []);
  const Item = ({item}) => (
    <View style={styles.item}>
      <View style={styles.icons}>
        <View style={styles.line} />
        <Image
          source={require('../../Image/arrow_icon.png')}
          style={styles.arrow}
          resizeMode="contain"
        />
        {item.nextStop01 && (
          <Animated.Image
            source={require('../../Image/bus_icon.png')}
            style={[styles.bus, {translateY: percent}]}
            resizeMode="contain"
          />
        )}

        {item.nextStop02 && (
          <Animated.Image
            source={require('../../Image/bus_icon.png')}
            style={[styles.bus, {translateY: percent}]}
            resizeMode="contain"
          />
        )}

        {item.nextStop03 && (
          <Animated.Image
            source={require('../../Image/bus_icon.png')}
            style={[styles.bus, {translateY: percent}]}
            resizeMode="contain"
          />
        )}
        {item.nextStop04 && (
          <Animated.Image
            source={require('../../Image/bus_icon.png')}
            style={[styles.bus, {translateY: percent}]}
            resizeMode="contain"
          />
        )}
      </View>
      <View style={styles.itemViewLine}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );

  useEffect(() => {
    Animated.timing(animation, {
      toValue: distLeft,
      duration: 0,
      useNativeDriver: true,
    }).start();
  }, [distLeft]);

  const percent = animation.interpolate({
    inputRange: [0, 100],
    outputRange: [-70, 0],
  });

  const arrive = id => {
    setData(
      data.map(data =>
        data.id === id
          ? {...data, nextStop01: true}
          : {...data, nextStop01: false},
      ),
    );
  };

  const renderItem = ({item}) => <Item item={item} />;
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'column', position: 'absolute'}}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            if (distLeft >= 100) {
              setDistLeft(0);
              setNextDest(((Number(nextDest) + 1) % data.length).toString());
              arrive(nextDest);
            } else {
              setDistLeft(distLeft + 10);
            }
          }}>
          <Text style={{fontSize: 20}}> ++10%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            setNextDest(((Number(nextDest) + 1) % data.length).toString());
            arrive(nextDest);
          }}>
          <Text style={{fontSize: 20}}>정류장 변경</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemView}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemView: {
    marginLeft: '25%',
  },
  itemViewLine: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  item: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#ffffff',
    marginVertical: 0,
    marginLeft: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    color: '#000000',
    marginLeft: 20,
  },
  line: {
    height: '100%',
    borderRightWidth: 10,
    borderRightColor: '#FEBE8C',
  },
  arrow: {
    width: 15,
    position: 'absolute',
  },
  bus: {
    height: 30,
    position: 'absolute',
  },
  icons: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
