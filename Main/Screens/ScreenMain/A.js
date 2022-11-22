import * as React from 'react';
// Import React and Component
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
    <View style={styles.line}/>
    <MaterialCommunityIcons
              style={styles.arrow}
              name="arrow-down-drop-circle"
              size={20}
              color={'#cd853f'}
            />
    <View style={styles.itemViewLine}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);
export default function A() {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  return (
    <View style={styles.container}>
      <View style={{flex : 1}}>
      </View>
      <View style={styles.itemView}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}/>
            <MaterialCommunityIcons 
              style={styles.bus}
              name="bus"
              size={30}
              color={'red'}
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
    flex:2
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
    alignItems:'center',
  },
  title: {
    fontSize: 15,
    color: '#000000',
    marginLeft: 20,
  },
  line:{
    height: '100%',
    borderRightWidth: 10,
    borderRightColor:'#FEBE8C',
  },
  arrow:{
    position: 'absolute',
    left: -5,
  },
  bus:{
    position: 'absolute',
  }
});
