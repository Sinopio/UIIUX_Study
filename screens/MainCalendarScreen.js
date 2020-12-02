import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CalendarPicker from 'react-native-calendar-picker';
//import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import BackGround from '../assets/MainBackGround.png'
import BottomBar from '../assets/BottomBar.png'

const DateFunction = (props) => {
  let date1 = JSON.stringify(App._date);
  let date2 = JSON.parse(JSON.stringify(App._date));
  let date_year = JSON.parse(JSON.stringify(App._date)).substring(0, 4);
  let date_month = JSON.parse(JSON.stringify(App._date)).substring(5, 7);
  let date_day = JSON.parse(JSON.stringify(App._date)).substring(8, 10);

  if(date_day <= 9)
  {
    date_day = JSON.parse(JSON.stringify(date_day)).substring(1, 2);
  }

  let CalendarDate = {
    year: date_year,
    month: date_month,
    today: date_day,
  };

  

  let taskList = {
    task: "과제하기",
    didJob: false
  };
  let copyTaskList = JSON.parse(JSON.stringify(taskList));

  let dayList = [CalendarDate, copyTaskList];
  let List = [];
  List[0] = "0";
  let dayNum = dayList[0].today;
  for (let i = 1; i < 32; i++) {
    let pushList = JSON.parse(JSON.stringify(dayList));
    pushList[0].today = i;
    List.push(pushList)
  }

  const returnDayNum = (props) => {
    return List[CalendarDate.today][0].today;
  }

  const pushTask = (props) => {
    List.push(copyTaskList);
  }


  useEffect(() => {
    console.log("\n");
    console.log("년 ", CalendarDate.year);
    console.log("월 ", CalendarDate.month);
    console.log("일 ", CalendarDate.today);
    //pushTask();
    //console.log(List);
  });



  return (
    <View style={{ alignItems: 'center', width: '100%' }}>
      <View style={styles.todobox}>

        <View style={{ alignItems: 'center', width: '100%' }}>
          <Text Style={styles.text1}>
            {CalendarDate.year} - {CalendarDate.month} - {CalendarDate.today}
          </Text>
        </View>

        <ScrollView style={{ width: '100%', marginTop: 10 }}>
          <View style={{ alignItems: 'center', width: '100%' }} >
            <View style={styles.taskbox}>
              <Text> 할일 : {returnDayNum()}</Text>
            </View>

            <View style={styles.taskbox}>

            </View>

            <View style={styles.taskbox}>

            </View>

            <View style={styles.taskbox}>

            </View>
          </View>
        </ScrollView>

      </View>
    </View>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      _date: null,
    };
    this.dateChange = this.dateChange.bind(this);
  }

  dateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
    App._date = date;
  }
  static _date = "2020-12-02T12:00:00.000Z";

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>

        <View style={styles.boxstyle}
          source={BackGround} >

          <CalendarPicker
            onDateChange={this.dateChange}
            previousTitle="<"
            nextTitle=">"
            textStyle={{
              color: '#889DD8',
              fontWeight: 'bold'
            }}
            initialDate={this.startDate}
          />

          <DateFunction />
        </View>

        {/* 바텀 바 */}
        <ImageBackground
          style={{ width: '100%', flex: 1.5 }}
          source={BottomBar}
        >
          <View style={{ flex: 1 }} />
          <View style={styles.bottombarstyle}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Main")}
              style={styles.bottombarImage}
            >
              <Image
                source={require("../assets/Home.png")}
                style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Calendar")}
              style={styles.bottombarImage}
            >
              <Image
                source={require("../assets/Calendar_S.png")}
                style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("MainCovid19")}
              style={styles.bottombarImage}
            >
              <Image
                source={require("../assets/Wuhan19.png")}
                style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("MainDiary")}
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
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDF3',
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
  boxstyle: {
    flex: 10,
    marginHorizontal: 30,
  },
  todobox: {
    width: '80%',
    height: '65%',
    borderColor: '#889DD8',
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text1: {
    fontSize: 24,
    color: 'red',
    fontWeight: "bold"
  },
  taskbox: {
    width: '80%',
    height: 45,
    borderColor: '#889DD8',
    borderWidth: 3,
    borderRadius: 20,
    margin: 10,
    justifyContent: 'center',
  }
});