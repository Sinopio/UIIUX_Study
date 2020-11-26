import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet, Text, View, Image,
  Button, ImageBackground
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Calender from '../assets/Calendar.png';
import BackGround from '../assets/MainBackGround.png'
import BottomBar from '../assets/BottomBar.png'

const CalendarScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/*<Calendar
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
        </Calendar>*/}
      <View style={{ width: '100%', flex: 10 }}
        source={BackGround}>
        <Text> react-native-calendars 오류</Text>
      </View>

      <ImageBackground
        style={{ width: '100%', flex: 1.5 }}
        source={BottomBar}
      >
        <View style={{ flex: 1 }} />
        <View style={styles.bottombarstyle}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Main")}
            style={styles.bottombarImage}
          >
            <Image
              source={require("../assets/Home.png")}
              style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Calendar")}
            style={styles.bottombarImage}
          >
            <Image
              source={require("../assets/Calendar_S.png")}
              style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("MainCovid19")}
            style={styles.bottombarImage}
          >
            <Image
              source={require("../assets/Wuhan19.png")}
              style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("MainDiary")}
            style={styles.bottombarImage}
          >
            <Image
              source={require("../assets/Diary.png")}
              style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottombarstyle: {
    flex: 3,
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  bottombarImage: {
    width: 50,
    height: 50,
  },
});

export default CalendarScreen;
/*<Button title="SubCalendar" onPress={() => navigation.navigate("Sub1CalendarScreen")}/>*/