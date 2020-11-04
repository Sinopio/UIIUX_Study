import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import flower from '../assets/StartSceneFlower.png';
import BackGround from '../assets/StartScreenBackGround.png';

const StartScreen = ({navigation}) =>{
  return(
    <View>
      <ImageBackground
        style = {styles.box}
        source = {BackGround} 
        
      >
        <View style={styles.container}>
          <Text style={styles.test1}>코로나 극복 힐링 플래너</Text> 
        </View>
        <View style={styles.container} />
        <View style={styles.container} > 
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
