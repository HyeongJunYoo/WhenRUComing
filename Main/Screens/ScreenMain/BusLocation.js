import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import firestore from '@react-native-firebase/firestore';

const BusLocation = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLogitude] = useState(null);
    const bus = firestore().collection('bus');

    useEffect(() => {
      const watchId = Geolocation.watchPosition(
        position => {
            setLatitude(JSON.stringify(position.coords.latitude));
            setLogitude(JSON.stringify(position.coords.longitude));
            console.log("실행중");
            // if(latitude && longitude){
            //     bus.doc("1234").update({latitude: latitude});
            //     bus.doc("1234").update({longitude: longitude});
            // }
        },
        error => { console.log(error.code, error.message); },
        {
          enableHighAccuracy: true, 
          distanceFilter: 0,
          interval: 5000,
          fastestInterval: 2000,
         }
    );

    return () => {
      if (watchId) {
        Geolocation.clearWatch(watchId);
      }
    };
  }, []);

    const geoLocation = () => {
        Geolocation.getCurrentPosition(
            position => {
                setLatitude(JSON.stringify(position.coords.latitude));
                setLogitude(JSON.stringify(position.coords.longitude));
                if(latitude && longitude){
                    bus.doc("1234").update({latitude: latitude});
                    bus.doc("1234").update({longitude: longitude});
                }
            },
            error => { console.log(error.code, error.message); },
            {enableHighAccuracy:true, timeout: 15000, maximumAge: 10000 }
        )
    }

    async function requestPermissions() {
        if (Platform.OS === 'ios') {
          const auth = await Geolocation.requestAuthorization("whenInUse");
          if(auth === "granted") {
            geoLocation();
          }
        }
      
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            geoLocation();
          }
        }
      }

    return (
        <View>
            <Text> latitude: {latitude} </Text>
            <Text> longitude: {longitude} </Text>
            <TouchableOpacity onPress={() => requestPermissions()}>
                <Text> Get GeoLocation </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BusLocation;