import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import flower from '../assets/StartSceneFlower.png';
import BackGround from '../assets/BackGround_j.png';

const StartScreen = ({navigation}) =>{
  return(
    <View>
      <ImageBackground
        style = {{width:'100%', height:'100%'}}
        source = {BackGround}
        resizeMode = "cover"  
      >
        <View style={styles.container} >
          <Image source={flower} style = {styles.box} />
          
          <Button title="Press To Start" 
           onPress={() => navigation.navigate("Main")}
          />
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
  box: {
    width: 200,
    height: 200,
  },
});

export default StartScreen;
