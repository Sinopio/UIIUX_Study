import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../screens/StartScreen';
import MainScreen from '../screens/MainScreen';

import MainCalendarScreen from '../screens/MainCalendarScreen';
import Sub1CalendarScreen from '../screens/SubCalendarScreen_1';

import MainDiaryScreen from '../screens/MainDiaryScreen';
import Sub1DiaryScreen from '../screens/SubDiaryScreen_1';

import MainCovid19Screen from '../screens/MainCovid19Screen';
import Sub1Covid19Screen from '../screens/SubCovid19Screen';
import Sub1Covid19Screen2 from '../screens/SubCovid19Screen_2';

const Stack = createStackNavigator(); 

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#7BA518",
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

const CalendarStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="MainCalendarScreen" component={MainCalendarScreen}/>
      <Stack.Screen name="Sub1CalendarScreen" component={Sub1CalendarScreen}/>
    </Stack.Navigator>
  );
}

const DiaryStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="MainDiaryScreen" component={MainDiaryScreen}/>
      <Stack.Screen name="Sub1DiaryScreen" component={Sub1DiaryScreen}/>
    </Stack.Navigator>
  );
}

const Covid19StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="MainCovid19Screen" component={MainCovid19Screen}/>
      <Stack.Screen name="Sub1Covid19Screen" component={Sub1Covid19Screen}/>
      <Stack.Screen name="Sub1Covid19Screen2" component={Sub1Covid19Screen2}/>
    </Stack.Navigator>
  );
}

export {MainStackNavigator, CalendarStackNavigator, DiaryStackNavigator, Covid19StackNavigator};
