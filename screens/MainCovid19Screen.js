import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { Paragraph, DataTable, Card, Title, Divider } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BottomBar from '../assets/BottomBar.png'
import {WebView} from 'react-native-webview';

import covidBack1 from '../assets/covid_back1.png'
import covidBack2 from '../assets/covid_back2.png'
import news_bt from '../assets/news.png'
import gps_bt from '../assets/gps.png'

const Covid19Screen = ({ navigation }) => {
  return (
    <View style={styles.maincontainer}>

      <View style={{ width: '100%', flex: 10 }}>

        <View style={styles.container0} >

          <View style={styles.container} >
            
            <ImageBackground
            style={{ width: '100%', flex: 1.5 }}
            source={covidBack1}
            >
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>확진자 정보</DataTable.Title>
                <DataTable.Title numeric>명 수(전일대비)</DataTable.Title>
              </DataTable.Header>

              <DataTable.Row>
                <DataTable.Cell>격리중</DataTable.Cell>
                <DataTable.Cell numeric>8699(+155)</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>격리해제</DataTable.Cell>
                <DataTable.Cell numeric>30177(+527)</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>확진자</DataTable.Cell>
                <DataTable.Cell numeric>39,432(+686)</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>사망자</DataTable.Cell>
                <DataTable.Cell numeric>556(+4)</DataTable.Cell>
              </DataTable.Row>

            </DataTable>

            </ImageBackground>
          </View>
            
        <View style={styles.container2} >
            
            <ImageBackground
              style={{ width: '100%', flex: 1 }}
              source={covidBack2}
              >

              <View style={styles.container3}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("코로나진료소")}
                  style={styles.bttImage}
                >
                  <Image
                    source={gps_bt}
                    style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate("코로나현황")}
                  style={styles.bttImage}
                >
                  <Image
                    source={news_bt}
                    style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
                  />
                
                </TouchableOpacity>
                
              </View>

            </ImageBackground>
        
        </View>
      </View>
    </View>

      {/*BottomBar*/}
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
              source={require("../assets/Calendar.png")}
              style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("MainCovid19")}
            style={styles.bottombarImage}
          >
            <Image
              source={require("../assets/Wuhan19_S.png")}
              style={{ height: '100%', width: '100%', resizeMode: 'contain'  }}
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

  container0: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FCFDEE",
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    margin: 20,
  },

  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 20,
  },

  container3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 20,
  },

  Plant1: {
    width: '10%',
    height: '10%',
    resizeMode: 'contain'
  },

  card: {
    flex: 1,
    width: "50%",
    height: "50%",
    margin: 10,
  },

  maincontainer: {
    flex: 1,
    backgroundColor: "#FCFDEE",

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

  bttImage: {
    width: 60,
    height: 60,
  },
});

export default Covid19Screen;
