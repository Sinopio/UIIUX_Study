import React from 'react';
import { StyleSheet, Text, View, Image, Platform, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../screens/StartScreen';
import MainScreen from '../screens/MainScreen';
import CalendarScreen from '../screens/CalendarScreen';
import DiaryScreen from '../screens/DiaryScreen';
import Covid19Screen from '../screens/Covid19Screen';

const Stack = createStackNavigator(); 

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Start" component={StartScreen}/>
      <Stack.Screen name="Main" component={MainScreen}/>
    </Stack.Navigator>
  );
}

const SubStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Calendar" component={CalendarScreen}/>
      <Stack.Screen name="Covid19" component={Covid19Screen}/>
      <Stack.Screen name="Diary" component={DiaryScreen}/>
    </Stack.Navigator>
  );
}

export {MainStackNavigator, SubStackNavigator};
