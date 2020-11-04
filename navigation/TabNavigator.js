import React from 'react';
import { StyleSheet, Text, View, Image, Platform, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, CalendarStackNavigator, DiaryStackNavigator, Covid19StackNavigator } from '../navigation/StackNavigator';

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#ABF200",
  },
};

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptionStyle}>
      <Tab.Screen name="Main" component={MainStackNavigator}
        options={{ tabBarIcon:({color, size}) => (
        <MaterialCommunityIcons name = "home" color={color} size={size}/> )}} 
      />
      <Tab.Screen name="Calendar" component={CalendarStackNavigator}
        options={{ tabBarIcon:({color, size}) => (
        <MaterialCommunityIcons name = "calendar-month" color={color} size={size}/> )}} 
      />
      <Tab.Screen name="Diary" component={DiaryStackNavigator}
        options={{ tabBarIcon:({color, size}) => (
        <MaterialCommunityIcons name = "book" color={color} size={size}/> )}}  
      />
      <Tab.Screen name="Covid19" component={Covid19StackNavigator}
        options={{ tabBarIcon:({color, size}) => (
        <MaterialCommunityIcons name = "shield-check" color={color} size={size}/> )}}  
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
