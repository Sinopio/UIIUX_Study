import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Covid19 from '../assets/Covid19.png';

const Covid19Screen = ({navigation}) =>{
  return(
    <View style={styles.container} >
        <Image source={Covid19} style = {styles.Plant1} />

        <Button title="SubCovid19" onPress={() => navigation.navigate("Sub1Covid19Screen")}/>
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
  Plant1:{
    width: '100%',
    height: '80%',
    resizeMode : 'contain'
  },
});

export default Covid19Screen;