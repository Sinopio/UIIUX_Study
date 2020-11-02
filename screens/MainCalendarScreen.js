import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Calender from '../assets/Calendar.png';

const CalendarScreen = ({navigation}) =>{
  return(
    <View style={styles.container} >
        <Image source={Calender} style = {styles.Plant1} />

        <Button title="SubCalendar" onPress={() => navigation.navigate("Sub1CalendarScreen")}/>
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

export default CalendarScreen;
