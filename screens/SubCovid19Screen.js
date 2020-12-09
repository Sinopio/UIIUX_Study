import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {WebView} from 'react-native-webview';

const Sub1Covid19Screen = ({navigation}) =>{
  return(

      <WebView style={{ width: '100%', height: '100%' }}
      mixedContentMode='always' 
      source={{ uri: `https://www.mohw.go.kr/react/popup_200128.html` }}
      useWebKit={true} 
      scrollEnabled={false} 
      domStorageEnabled={true} 
      javaScriptEnabled={true}>
      </WebView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Plant1:{
    width: '100%',
    height: '80%',
    resizeMode : 'contain'
  },
});

export default Sub1Covid19Screen;


/* 지도 기능 구현 코드, 선별진료소 검색 및 길찾기를 기능을 넣기 위해 구현적 한계로 폐기
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
*/