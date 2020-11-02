import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const Sub1CalendarScreen = ({navigation}) =>{
  return(
    <View style={styles.container} >
      <Text> 달력 서브1 </Text>
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

export default Sub1CalendarScreen;
