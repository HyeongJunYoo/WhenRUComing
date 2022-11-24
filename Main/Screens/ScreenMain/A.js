import React, {useState} from 'react';
// Import React and Component
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
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
    destination: false,
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
        <Image
          source={require('../../Image/bus_icon.png')}
          style={styles.bus}
          resizeMode="contain"
        />
      )}
    </View>
    <View style={styles.itemViewLine}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  </View>
);

export default function A() {
  const [data, setData] = useState(DATA);
  const [index, setIndex] = useState('0');

  const press = id => {
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
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          press(index);
          setIndex(((Number(index) + 1) % data.length).toString());
        }}>
        <Text style={styles.Txt728}>로그인</Text>
      </TouchableOpacity>
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
    width: 30,
    position: 'absolute',
  },
  icons: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
