import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {WebView} from 'react-native-webview';

const Sub1Covid19Screen2 = ({navigation}) =>{
  return(

      <WebView style={{ width: '100%', height: '100%' }}
      mixedContentMode='always' 
      source={{ uri: `https://www.youtube.com/results?search_query=%23%EC%BD%94%EB%A1%9C%EB%82%9819&sp=EgIIAg%253D%253D` }}
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

export default Sub1Covid19Screen2;
