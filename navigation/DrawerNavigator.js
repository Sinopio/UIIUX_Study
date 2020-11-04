import React from 'react';
import { StyleSheet, Text, View, Image, Platform, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainStackNavigator} from '../navigation/StackNavigator';
import BottomTabNavigator from '../navigation/TabNavigator'
import { ContactStackNavigator } from "./StackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Start" component={BottomTabNavigator} />
      <Drawer.Screen name="Main" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
