import * as React from 'react';
// Import React and Component
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

const DATA = [
  {
    id: '01',
    title: '1번째 정류장',
  },
  {
    id: '02',
    title: '2번째 정류장',
  },
  {
    id: '03',
    title: '3번째 정류장',
  },
  {
    id: '04',
    title: '4번째 정류장',
  },
  {
    id: '05',
    title: '5번째 정류장',
  },
  {
    id: '06',
    title: '6번째 정류장',
  },
  {
    id: '07',
    title: '7번째 정류장',
  },
  {
    id: '08',
    title: '8번째 정류장',
  },
  {
    id: '09',
    title: '9번째 정류장',
  },
  {
    id: '10',
    title: '10번째 정류장',
  },
  {
    id: '11',
    title: '11번째 정류장',
  },
];

const Item = ({item}) => (
  <View style={styles.item}>
    <View style={styles.line} />
    <Image
      source={require('../../Image/arrow_icon.png')}
      style={styles.arrow}
      resizeMode="contain"
    />
    <View style={styles.itemViewLine}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  </View>
);
export default function A() {
  const renderItem = ({item}) => <Item item={item} />;
  return (
    <View style={styles.container}>
      <View style={styles.itemView}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <Image
          source={require('../../Image/bus_icon.png')}
          style={styles.bus}
          resizeMode="contain"
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
    left: -2.4,
  },
  bus: {
    width: 30,
    position: 'absolute',
    top: 0,
  },
});
