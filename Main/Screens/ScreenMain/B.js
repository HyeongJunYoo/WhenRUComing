import React, {useState, useRef, useEffect} from 'react';
// Import React and Component
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Animated
} from 'react-native';

const DATA = [
  {
    id: '0',
    title: '1번째 정류장',
    destination: false,
  },
  {
    id: '1',
    title: '2번째 정류장',
    destination: true,
  },
  {
    id: '2',
    title: '3번째 정류장',
    destination: false,
  },
  {
    id: '3',
    title: '4번째 정류장',
    destination: false,
  },
  {
    id: '4',
    title: '5번째 정류장',
    destination: false,
  },
  {
    id: '5',
    title: '6번째 정류장',
    destination: false,
  },
  {
    id: '6',
    title: '7번째 정류장',
    destination: false,
  },
  {
    id: '7',
    title: '8번째 정류장',
    destination: false,
  },
  {
    id: '8',
    title: '9번째 정류장',
    destination: false,
  },
  {
    id: '9',
    title: '10번째 정류장',
    destination: false,
  },
  {
    id: '10',
    title: '11번째 정류장',
    destination: false,
  },
];


export default function A() {
  const [data, setData] = useState(DATA);
  const [nextDest, setNextDest] = useState('2');
  const [distLeft, setDistLeft] = useState(0);
  const animation = useRef(new Animated.Value(0)).current;

  const Item = ({item}) => (
    <View style={styles.item}>
      <View style={styles.icons}>
        <View style={styles.line} />
        <Image
          source={require('../../Image/arrow_icon.png')}
          style={styles.arrow}
          resizeMode="contain"
        />
        {item.destination && (
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
        outputRange: [-70, 0]
  });

  const arrive = id => {
    setData(
      data.map(data =>
        data.id === id
          ? {...data, destination: true}
          : {...data, destination: false},
      ),
    );
  };

  const renderItem = ({item}) => <Item item={item} />;
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'column', position:'absolute'}}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          if(distLeft >= 100){
            setDistLeft(0);
            setNextDest(((Number(nextDest) + 1) % data.length).toString());
            arrive(nextDest);
          }else{
            setDistLeft((distLeft + 10));
          }
        }}>
        <Text style={{fontSize: 20}}> ++10%</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          arrive(nextDest);
          setNextDest(((Number(nextDest) + 1) % data.length).toString());
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
    borderRightColor: 'lightgreen',
  },
  arrow: {
    width: 15,
    position: 'absolute',
  },
  bus: {
    height: 30,
    position: 'absolute',
    //top: -50 ~ 20
  },
  icons: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
