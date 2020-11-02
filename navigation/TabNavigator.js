import React from 'react';
import { StyleSheet, Text, View, Image, Platform, Button } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, SubStackNavigator } from '../navigation/StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={MainStackNavigator} />
      <Tab.Screen name="Calendar" component={SubStackNavigator} />
      <Tab.Screen name="Diary" component={SubStackNavigator} />
      <Tab.Screen name="Covid19" component={SubStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
