import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, NativeModules } from 'react-native';
import { Modal, Portal, Provider, Divider, Dialog, Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MainScreen from './MainScreen';

export default class CollectionScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      plantNum: 1,
      ch: true,
    }
  }
  static PNum = 1;

  static setPlantNum(data) {
    this.PNum = data;
  }

  static getPlantNum() {
    return this.PNum;
  }

  static putPlatNum() {
    return this.plantNum;
  }

  static setColor(_plantnum)  {
    if(this.PNum == _plantnum)
    {
      return "green";
    }
    else return "#B2C9E9";
  }



  render() {
    const { visible, plantNum, ch } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <MainScreen ref={child =>{
          this.child = child;
        }} />
        <ScrollView
          style={{ width: '100%', }}
        >
          <View style={{ justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', }}>
            
            <View style={styles.collenction}>
              <View style={[styles.outside, {borderColor: CollectionScreen.setColor(1), borderWidth:3 }]}>
                <TouchableOpacity onPress=
                  {() => { this.setState({ visible: !visible }), this.setState({ plantNum: 1 }) }}
                >
                  <Image style={styles.image1} source={require('../assets/Plant1.png')}
                  />
                </TouchableOpacity>
              </View>

              <View style={[styles.outside, {borderColor: CollectionScreen.setColor(2), borderWidth:3 }]}>
                <TouchableOpacity onPress=
                  {() => { this.setState({ visible: !visible }), this.setState({ plantNum: 2 }) }}
                >
                  <Image style={styles.image1} source={require('../assets/Plant2.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.collenction}>
            <View style={[styles.outside, {borderColor: CollectionScreen.setColor(3), borderWidth:3 }]}>
                <TouchableOpacity onPress=
                  {() => { this.setState({ visible: !visible }), this.setState({ plantNum: 3 }) }}
                >
                  <Image style={styles.image1} source={require('../assets/Plant3.png')}
                  />
                </TouchableOpacity>
              </View>


              <View style={[styles.outside, {borderColor: CollectionScreen.setColor(4), borderWidth:3 }]}>
                <TouchableOpacity onPress=
                  {() => { this.setState({ visible: !visible }), this.setState({ plantNum: 4 }) }}
                >
                  <Image style={styles.image1} source={require('../assets/Plant4.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.collenction}>
            <View style={[styles.outside, {borderColor: CollectionScreen.setColor(5), borderWidth:3 }]}>
                <TouchableOpacity onPress=
                  {() => { this.setState({ visible: !visible }), this.setState({ plantNum: 5 }) }}
                >
                  <Image style={styles.image1} source={require('../assets/Plant5.png')}
                  />
                </TouchableOpacity>
              </View>


              <View style={[styles.outside, {borderColor: CollectionScreen.setColor(6), borderWidth:3 }]}>
                <TouchableOpacity onPress=
                  {() => { this.setState({ visible: !visible }), this.setState({ plantNum: 6 }) }}
                >
                  <Image style={styles.image1} source={require('../assets/Plant6.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.collenction}>
            <View style={[styles.outside, {borderColor: CollectionScreen.setColor(7), borderWidth:3 }]}>
                <TouchableOpacity onPress=
                  {() => { this.setState({ visible: !visible }), this.setState({ plantNum: 7 }) }}
                >
                  <Image style={styles.image1} source={require('../assets/Plant7.png')}
                  />
                </TouchableOpacity>
              </View>


              <View style={[styles.outside, {borderColor: CollectionScreen.setColor(8), borderWidth:3 }]}>
                <TouchableOpacity onPress=
                  {() => { this.setState({ visible: !visible }), this.setState({ plantNum: 8 }) }}
                >
                  <Image style={styles.image1} source={require('../assets/Plant8.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>



        </ScrollView>

        <Provider>
          <Portal>
            <Dialog visible={visible} onDismiss={() => this.setState({ visible: !visible })} style={styles.dialog1}>
              <Dialog.Actions style={{ justifyContent: 'space-between', }}>
                <View>
                  <Text>이 식물을 적용할까요?</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                  <Button onPress={() => {
                    CollectionScreen.setPlantNum(plantNum),
                    //this.props.navigation.navigate("Main"),
                    this.setState({ visible: !visible }),
                    this.child.refreshPlant();
                  }}>
                    네
                    </Button>

                  <Button onPress={() => this.setState({ visible: !visible })}>
                    아니오</Button>
                </View>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </Provider>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDFDF3',
  },
  image1: {
    width: 100,
    resizeMode: 'contain',
  },
  box1: {
  },
  dialog1: {
    justifyContent: 'space-between',
  },
  outside: {
    backgroundColor: '#B2C9E9',
    width: '40%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  collenction: {
    backgroundColor: '#FDFDF3',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
});