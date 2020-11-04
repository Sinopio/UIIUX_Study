import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Calender from '../assets/Calendar.png';

const CalendarScreen = ({navigation}) =>{
  return(
    <View>
        <Calendar
          style={{width:'100%',height:'100%', 
          justifyContent: 'center',}}
          //처음 보이는 달
          current = {Date()}
          
          //날짜를 쨟게 누르면 실행
          //onDayPress={(day) => {console.log('selected day', day)}}
          
          //날짜를 길게 누르면 실행
          //onDayLongPress={(day) => {console.log('selected day', day)}}
          
          //캘린더 제목에 들어갈 month형식
          monthFormat={'yyyy MM'}
          
          //달을 바꿀때 실행
          //onMonthChange={(month) => {console.log('month changed', month)}}
          
          //달을 바꾸는 화살표를 가릴것인지 - default = false
          hideArrows={false}
          
          //다른달의 요일을 표시할 것인지 - default = false
          hideExtraDays={false}
          
          //만약 hideArrows=false, hideExtraDays=false이면, 
          //달력 페이지에 회색으로 표시된 다른 달의 날짜를 선택했을 때
          //달이 바뀌지 않도록 합니다. 기본값은 false입니다. Default = false
          disableMonthChange={false}
          
          // 왼쪽 화살표를 눌렀을 때 실행되는 함수.
          onPressArrowLeft={substractMonth => substractMonth()}
          
          // 오른쪽 화살표를 눌렀을 때 실행되는 함수.
          onPressArrowRight={addMonth => addMonth()}
        >
        </Calendar>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%', 
    height:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CalendarScreen;
/*<Button title="SubCalendar" onPress={() => navigation.navigate("Sub1CalendarScreen")}/>*/