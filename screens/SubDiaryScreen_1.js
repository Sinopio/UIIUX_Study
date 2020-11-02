import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const Sub1DiaryScreen = ({navigation}) =>{
  return(
    <View style={styles.container} >
      <Text> 다이어리 서브1 </Text>
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

export default Sub1DiaryScreen;
