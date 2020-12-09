import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, 
  TouchableWithoutFeedback  } from 'react-native';
  import { Modal, Portal, Provider, Divider, Dialog, Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CalendarPicker from 'react-native-calendar-picker';
//import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import BackGround from '../assets/MainBackGround.png'
import BottomBar from '../assets/BottomBar.png'
import Plus from '../assets/plus.png'

const DateFunction = (props) => {
  let istouch = false;
  let date_year = JSON.parse(JSON.stringify(App._date)).substring(0, 4);
  let date_month = JSON.parse(JSON.stringify(App._date)).substring(5, 7);
  let date_day = JSON.parse(JSON.stringify(App._date)).substring(8, 10);
  if(date_day <= 9)
  {
    date_day = JSON.parse(JSON.stringify(date_day)).substring(1, 2);
  }

  let date = JSON.parse(date_day);

  let CalendarDate = {
    year: date_year,
    month: date_month,
    today: date_day,
  };

  let taskList = {
    task: "과제하기",
    didJob: false
  };
  let copyTask = JSON.parse(JSON.stringify(taskList));

  
  
  let dayList = [CalendarDate, taskList];

  let List = [];
  List[0] = "0";

  for (let i = 1; i < 32; i++) {
    let pushList = JSON.parse(JSON.stringify(dayList));
    pushList[0].today = i;
    List.push(pushList);
  }

  List[10][1].task = "잠자기";
  List[10].push(copyTask);
  List[10][2].task = "영상찍기";

  const pushTask = (num) => {
    let copyTask = JSON.parse(JSON.stringify(taskList));
    /*
    let _list = [JSON.parse(JSON.stringify(List[date])), taskList];
    console.log("_list" + _list);
    List[date] =  JSON.parse(JSON.stringify(_list));
    console.log("date list" + List[date]);
    
    
    
      let _list = JSON.parse(JSON.stringify(List[date]));
      console.log("date list" + List[date]);
      List[num] = JSON.parse(JSON.stringify(_list));
    */
    
    if(istouch)
    {
      console.log("\n push!")
      List[num].push(copyTask);      
    } 
    console.log(List[num]);
  }  

  const returnTask = (num) => {
    if(List[date][num] != null)
    {
      return List[date][num].task;
    }

    else if(List[date][num] == null)
    {
      return " ";
    }    
  }

  useEffect(() => {
    /*console.log("\n");
    console.log("년 ", CalendarDate.year);
    console.log("월 ", CalendarDate.month);
    console.log("일 ", CalendarDate.today);*/
    console.log(List[date]);
  });
  
  return (
    <View style={{ alignItems: 'center', width: '100%' }}>
      <View style={styles.todobox}>

        
          <View style={{ alignItems: 'center', width: '100%' }}>
            <Text Style={styles.text1}>
              {CalendarDate.year} - {CalendarDate.month} - {CalendarDate.today}
            </Text>
          </View>

          <ScrollView style={{ width: '100%', flex: 5}}>
          <View style={{ alignItems: 'center', width: '100%' }} >
            <View style={styles.taskbox}>
              <Text>  {returnTask(1)}</Text>

            </View>

            <View style={styles.taskbox}>
              <Text>  {returnTask(2)}</Text>              
            </View>

            <View style={styles.taskbox}>
              
            </View>

            <View style={styles.taskbox}>

            </View>
          </View>
        </ScrollView>

        <View style={{ width: '100%', flex: 0.1, alignContent: 'flex-end', justifyContent: 'flex-end'}}>
              <TouchableOpacity onPress={() => {istouch = true, console.log("test " + istouch), pushTask(date)}}
                style={{alignItems:'flex-end', margin:10}}
              >
                  <Image source={Plus} />
              </TouchableOpacity>
        </View>
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
      visible: true,
    };
    this.dateChange = this.dateChange.bind(this);
  }

  dateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
    App._date = date;
  }
  static _date = "2020-12-09T12:00:00.000Z";

  render() {
    const { selectedStartDate } = this.state;
    const { visible} = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>

        <View style={styles.boxstyle}
          source={BackGround} >
          
            <CalendarPicker
              onDateChange={this.dateChange}
              previousTitle="<"
              nextTitle=">"
              selectedDayColor="#889DD8"
              
              textStyle={{
                color: '#889DD8',
                fontWeight: 'bold'
              }}
              initialDate={this.startDate}
            />

          <TouchableOpacity
            onPress={() => this.setState({ visible: !visible })}
          >
            <DateFunction />
          </TouchableOpacity>


            

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

        {/* 팝업메뉴 */}

        <Modal
          visible={!this.state.visible}
          onDismiss={() => this.setState({ visible: !visible })}
          contentContainerStyle={{height: 500, alignContent: 'center'}}
        >
            <DateFunction />
        </Modal>

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
    marginTop: 50,
  },
  todobox: {
    width: '80%',
    height: 500,
    backgroundColor: 'white',
    borderColor: '#889DD8',
    borderWidth: 3,
    borderRadius:20
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