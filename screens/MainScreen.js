import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect, useState } from 'react';
import {
  StyleSheet, View, Image, ImageBackground,
  ScrollView, Text, SafeAreaView, TouchableWithoutFeedback
} from 'react-native';
import { Modal, Portal, Provider, Divider, Dialog, Button } from 'react-native-paper';
import Animated, {
  Easing, useSharedValue, withSpring, useAnimatedStyle,
  repeat, delay, useAnimatedGestureHandler, withTiming, sequence
} from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';

import CollectionScreen from '../screens/CollectionScreen';
import BackGround from '../assets/MainBackGround.png';
import BottomBar from '../assets/BottomBar.png';
import StartScreen from '../assets/StartSceen.png';
import Plant1 from '../assets/Plant6.png';
import Plant2 from '../assets/Plant1.png';
import Plant3 from '../assets/Plant2.png';
import Plant4 from '../assets/Plant3.png';
import Plant5 from '../assets/Plant4.png';
import Plant6 from '../assets/Plant5.png';
import Plant7 from '../assets/Plant7.png';
import Plant8 from '../assets/Plant8.png';

const StartButtonAni = (props) => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const scale = useSharedValue(1);
  const open = true;

  const blink = () => {
    scale.value = sequence(withTiming(0.98), repeat(withTiming(1.0), -1, true));
  }

  useEffect(() => {
    switch (open) {
      case true:
        blink();
        break;
    }
  }, [open]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: x.value },
        { translateY: y.value },
        { scale: scale.value }
      ]
    }
  });

  return (
    <Animated.View style={[animatedStyle]} >
      <View style={{ flex: 0.96 }} />
      <TouchableWithoutFeedback onPress={blink} style={{ flex: 1 }}>
        <Image source={require("../assets/StartButton.png")} />
      </TouchableWithoutFeedback>
    </Animated.View>
  );
}

const SetImage = (props) => {
  const [plantNum, setNumber] = useState(CollectionScreen.getPlantNum());
  const PlantImg = {img:  Plant1};

  console.log("setImageCalled >> ", CollectionScreen.getPlantNum());

  useEffect(() => {

    setNumber(CollectionScreen.getPlantNum());

  });

  switch (plantNum) {
    case 1:
      PlantImg.img = Plant1;
      break;
    case 2:
      PlantImg.img = Plant2;
      break;
    case 3:
      PlantImg.img = Plant3;
      break;
    case 4:
      PlantImg.img = Plant4;
      break;
    case 5:
      PlantImg.img = Plant5;
      break;
    case 6:
      PlantImg.img = Plant6;
      break;
    case 7:
      PlantImg.img = Plant7;
      break;
    case 8:
      PlantImg.img = Plant8;
      break;
  }

  return( 
      <Image source={PlantImg.img} style={styles.Plant} />
  );
}

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);

    this.state = {
      img: require('../assets/Plant6.png'),
      visible: true,
      _num: 0
    };
  }

  forceUpdateHandler(){
    this.forceUpdate();
  };

  giveNutrition = () => {
    this.setState({ img: require('../assets/Plant_Nutrition.png') });
  };

  giveWater = () => {
    this.setState({ img: require('../assets/Plant_Water.png') });
  };

  giveLight = () => {
    this.setState({ img: require('../assets/Plant_Light.png') });
  };

  render() {
    let animatedStyle = { transform: [{ translateY: this.state.offsetY }] };
    const { visible } = this.state;
    return (
      <SafeAreaView style={styles.container}>        
        {/* Main 화면 구성 부분*/}
        <ImageBackground
          style={{ width: '100%', flex: 10 }}
          source={BackGround}
        >
          <View style={{flex:1}} />
          {/* 상단버튼 */}
          <View view style={styles.topmenu}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Collection")}
            >
              <Image
                source={require("../assets/Collection.png")}
                style={{height: '70%', width: 70, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
            <Button
              icon="book" style={styles.collection}
              mode="contained"
              onPress={() => this.forceUpdateHandler}
            />

          </View>
          {/* 물 */}
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
          {/* 삽, 햇빛 */}
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

          <View style={{ flex: 1 }} />
          {/* 중앙 식물 */}
          <View View style={styles.PlantSpot}>
            <SetImage />
            {/*<Image source={this.state.img} style={styles.Plant} />*/}
          </View>

          <View style={{flex:1}} />
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
                source={require("../assets/Home_S.png")}
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
          visible={this.state.visible}
          contentContainerStyle={{ width: '100%', height: '100%', backgroundColor: 'white', }}
        >
          <ImageBackground
            style={styles.absoluteContainer}
            source={StartScreen}
          >
            <View style={{ animatedStyle }}>
              <TouchableOpacity
                onPress={() => this.setState({ visible: !visible })}
                style={{ justifyContent: 'center', alignItems: 'center' }}
              >
                <StartButtonAni style={[styles.absoluteContainer]} />
              </TouchableOpacity>
            </View>

          </ImageBackground>
        </Modal>

      </SafeAreaView>
    );
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
  absoluteContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});