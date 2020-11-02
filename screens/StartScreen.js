import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import flower from '../assets/StartSceneFlower.png';

const StartScreen = ({navigation}) =>{
  return(
    <View style={styles.container} >
    <Image source={flower} style = {styles.box} />
    <Text>코로나19힐링어플</Text>
    <Button title="Press To Start" 
      onPress={() => navigation.navigate("Main")}
      />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
  },
});

export default StartScreen;
