import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {TextInput} from 'react-native-paper';

import Diary from '../assets/diary_pic.png';

const Sub1DiaryScreen = ({navigation}) =>{

  const [text, setText] = React.useState('');

  return(

    <View style={styles.container} >

      <View style={styles.container} > 
      <Image source={Diary} style = {styles.Plant1} />
      
      </View>

      <View style={styles.container} > 
        <TextInput
        label="diary"
        value={text}
        onChangeText={text => setText(text)}
        />
      </View>

    </View>
    

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    backgroundColor: "#FCFDEE",
  },

  Plant1:{
    width: '100%',
    height: '100%',
    resizeMode : 'contain',

  },
});

export default Sub1DiaryScreen;
