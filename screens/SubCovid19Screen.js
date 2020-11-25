import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Alert } from "react-native";
import * as Location from 'expo-location';
import MapView from "react-native-maps";

export default class extends React.Component {
  getLocation = async () => {
    try {
      const response = await Location.requestPermissionsAsync();
      console.log(response);
      const location = await Location.getCurrentPositionAsync();
      console.log(location);

    } catch (error) {
      Alert.alert("Can't find you.", "Please Try Again!")
    }
  }
  componentDidMount() {
    this.getLocation();
  }
render() {
    return (
      <MapView
        style={{ flex: 1 }}
    
        initialRegion={{
          latitude: 36.6206536738,
          longitude: 127.286963086,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}

      >
      <MapView.Marker 
      coordinate={{   
        latitude: 36.6206536738,
        longitude: 127.286963086,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421, }} 
        pinColor={'orange'}
        >
      </MapView.Marker>

      <MapView.Marker 
      coordinate={{   
        latitude: 36.6236536738,
        longitude: 127.286963086,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421, }} 
        />

      <MapView.Marker 
      coordinate={{   
        latitude: 36.6170536738,
        longitude: 127.282963086,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421, }} 
        />

        
      <MapView.Marker 
      coordinate={{   
        latitude: 36.6150536738,
        longitude: 127.289963086,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421, }} 
        />

      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: 'white'
  }
});
