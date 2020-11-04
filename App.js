import React from 'react';
import { StyleSheet, Text, View, Image, Platform, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/TabNavigator'

export default function App(){
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}