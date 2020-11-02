import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import Plant from '../assets/Plant.png';
import PlantBook from '../assets/PlantBook.png';
import BackGround from '../assets/BackGround_j.png'

const MainScreen = () =>{
  return(
    <View>
      <ImageBackground
        style = {{width:'100%', height:'100%'}}
        source = {BackGround}
        resizeMode = "cover"        
        >        
      <Image source={PlantBook} style = {styles.minimenu} />
      
      <View View style={styles.PlantSpot}>
        <Image source={Plant} style = {styles.Plant1} />
      </View>

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
