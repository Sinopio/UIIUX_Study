import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { Paragraph, DataTable, Card, Title, Divider } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Diary from '../assets/pic.png';
import BottomBar from '../assets/BottomBar.png'

const Covid19Screen = ({ navigation }) => {
  return (
    <View style={styles.maincontainer}>

      <View style={{ width: '100%', flex: 10 }}>
        <View style={styles.container0} >

          <View style={styles.container} >

            <DataTable>
              <DataTable.Header>
                <DataTable.Title>확진자 정보</DataTable.Title>
                <DataTable.Title numeric>확진자 수</DataTable.Title>
              </DataTable.Header>

              <DataTable.Row>
                <DataTable.Cell>현재 확진환자</DataTable.Cell>
                <DataTable.Cell numeric>159</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>총 확진자</DataTable.Cell>
                <DataTable.Cell numeric>1100</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>지역 확진자</DataTable.Cell>
                <DataTable.Cell numeric>36</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Pagination
                page={1}
                numberOfPages={2}
                onPageChange={page => {
                  console.log(page);
                }}
                label="1-2 of 6"
              />
            </DataTable>

          </View>


          <View style={styles.container} >

            <Card style={styles.card}>
              <Card.Cover source={Diary} />
              <Card.Actions>
              </Card.Actions>
            </Card>

            <Card style={styles.card}>
              <Card.Cover source={Diary} />
              <Card.Actions>
              </Card.Actions>
            </Card>

          </View>

          <View style={styles.container} >

            <Button title="실시간 뉴스" onPress={() => navigation.navigate("Sub1Covid19Screen")} />
            <Paragraph>                        </Paragraph>
            <Button title="선별 진료소" />

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

  container0: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
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

export default Covid19Screen;
