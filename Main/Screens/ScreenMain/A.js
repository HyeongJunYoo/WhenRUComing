import * as React from 'react';
// Import React and Component
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

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
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
export default function A() {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.line}/>
      <View style={styles.circle}/>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row' 
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 25,
    marginVertical: 2,
    marginHorizontal: 0,
  },
  title: {
    fontSize: 15,
    color: '#000000',
    textAlign: 'left'
  },
  line:{
    width: '25%',
    height: '100%',
    borderRightWidth: 10,
    borderRightColor:'#FEBE8C'
  }
});
