import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';

const StartScreen = ({navigation}) =>{
  return(
    <View>
      <Text>asdf</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width:'100%', 
    height:'100%', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  test1:{
    fontWeight: 'bold',
    fontSize: 30,
    color: 'green',
  },  
});

export default StartScreen;
