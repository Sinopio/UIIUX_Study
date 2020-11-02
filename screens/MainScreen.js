import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Plant from '../assets/Plant.png';
import PlantBook from '../assets/PlantBook.png';

const MainScreen = () =>{
  return(
    <View style={styles.container} >
    <View View style={styles.topmenu}>
      <Image source={PlantBook} style = {styles.minimenu} />
    </View>

    <View View style={styles.PlantSpot}>
      <Image source={Plant} style = {styles.Plant1} />
    </View>
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
  topmenu:{
    width:'100%',
    height:'10%',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems:'flex-start',
  },
  PlantSpot:{
    width:'100%',
    height:'70%',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems:'center'
  },
  Plant1:{
    width: '100%',
    height: '80%',
    resizeMode : 'contain'
  },
  minimenu:{
    width: '70%',
    height: '70%',
    resizeMode:'contain',
  }
});

export default MainScreen;
