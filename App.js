import React from 'react';
import { StyleSheet, Text, View, Image, Platform, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './navigation/StackNavigator';
import BottomTabNavigator from './navigation/TabNavigator'

export default function App(){
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}