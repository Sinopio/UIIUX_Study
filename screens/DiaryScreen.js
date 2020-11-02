import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Diary from '../assets/Diary.png';

const DiaryScreen = ({navigation}) =>{
  return(
    <View style={styles.container} >
        <Image source={Diary} style = {styles.Plant1} />

        <Button title="To Calender" onPress={() => navigation.navigate("Calendar")}/>
        <Button title="To Covid" onPress={() => navigation.navigate("Covid19")}/>
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

export default DiaryScreen;
