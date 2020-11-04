import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, ImageBackground, Text } from 'react-native';
import BackGround from '../assets/BackGround_j2.png'

const MainScreen = () =>{
  return(
    <View>
      <ImageBackground
        style = {{width:'100%', height:'100%'}}
        source = {BackGround}
        resizeMode = "cover"        
        > 
        <Text> 오늘할일 </Text>
      </ImageBackground>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  PlantSpot:{
    width:'100%',
    height:'70%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
  },
  Plant1:{
    width: '100%',
    height: '90%',
    resizeMode : 'contain'
  },
  minimenu:{
    width: '10%',
    height: '10%',
    resizeMode:'contain',
  }
});

export default MainScreen;
