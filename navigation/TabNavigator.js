import React from 'react';
import { StyleSheet, Text, View, Image, Platform, Button } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, CalendarStackNavigator, DiaryStackNavigator, Covid19StackNavigator } from '../navigation/StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={MainStackNavigator} />
      <Tab.Screen name="Calendar" component={CalendarStackNavigator} />
      <Tab.Screen name="Diary" component={DiaryStackNavigator} />
      <Tab.Screen name="Covid19" component={Covid19StackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
