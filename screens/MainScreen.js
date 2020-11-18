import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  StyleSheet, View, Image, ImageBackground,
  ScrollView, Text, SafeAreaView
} from 'react-native';
import { Modal, Portal, Provider, Divider, Dialog, Button } from 'react-native-paper';
import BackGround from '../assets/MainBackGround.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import BottomBar from '../assets/BottomBar.png'

export default class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: require('../assets/Plant6.png'),
      visible: false,
    };
  }

  render() {
    const { visible } = this.state;
    return (
      <SafeAreaView style={styles.container}>

        {/* Main 화면 구성 부분*/}
        <ImageBackground
          style={{ width: '100%', flex: 10 }}
          source={BackGround}
        >
          <View view style={styles.topmenu}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Collection")}
            >
              <Image
                source={require("../assets/Collection.png")}
              />
            </TouchableOpacity>

            {/* <Button 
              icon="book" style = {styles.collection}
              mode="contained"
              onPress={() => this.props.navigation.navigate("TodayList")}
           />*/}

          </View>

          <View style={styles.middlemenu1}>
            <TouchableOpacity
              onPress={this.giveWater} style={styles.SpotButton}
            >
              <Image
                source={require("../assets/water.png")}
                style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.middlemenu2}>
            <TouchableOpacity
              onPress={this.giveNutrition} style={styles.SpotButton}
            >
              <Image
                source={require("../assets/shovel.png")}
                style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this.giveLight} style={styles.SpotButton}
            >
              <Image
                source={require("../assets/sun.png")}
                style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
              />
            </TouchableOpacity>
          </View>

          <View View style={styles.PlantSpot}>
            <Image source={this.state.img} style={styles.Plant} />
          </View>
        </ImageBackground>

        {/* BottomBar 구성 부분*/}
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
                source={require("../assets/Calendar.png")}
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

        {/* Start 화면 구성 부분*/}
        <Modal
          visible={this.state.visible} onDismiss={() => this.setState({ visible: !visible })}
          contentContainerStyle={{ width: '80%', height: '100%', backgroundColor: 'white', padding: 20 }}
        >

        </Modal>

      </SafeAreaView>
    );
  }

  giveNutrition = () => {
    this.setState({ img: require('../assets/Plant_Nutrition.png') });
  }

  giveWater = () => {
    this.setState({ img: require('../assets/Plant_Water.png') });
  }

  giveLight = () => {
    this.setState({ img: require('../assets/Plant_Light.png') });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  collection: {
    width: '10%',
    height: '30%',
  },
  topmenu: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  middlemenu1: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middlemenu2: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  SpotButton: {
    width: 50,
    height: 50,
  },
  PlantSpot: {
    flex: 7,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Plant: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
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
