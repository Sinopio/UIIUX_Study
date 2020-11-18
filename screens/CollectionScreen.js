import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import { Modal, Portal, Provider, Divider, Dialog, Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class CollectionScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      plantNum: 0,
    }
  }

  

  render() {
    const { visible, plantNum } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView
          style={{ width: '100%', }}
        >
          <TouchableOpacity onPress=
          {() => {this.setState({ visible: !visible }), this.setState({plantNum: 1})}}
            style={styles.box1} >
            <Image style={styles.image1} source={require('../assets/Plant6.png')}
            />
            <View style={{ flexDirection: 'column', justifyContent: 'space-around', }}>
              <Text> 작은 새싹 </Text>
              <Text> 마음이 아파요 </Text>
              <Text> 종강은 언제쯤 할까요 </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress=
          {() => {this.setState({ visible: !visible }), this.setState({plantNum: 2})}}
            style={styles.box1} >
            <Image style={styles.image1} source={require('../assets/Plant1.png')}
            />
            <View style={{ flexDirection: 'column', justifyContent: 'space-around', }}>
              <Text> 종강 난 </Text>
              <Text> 종강을 바라는 마음이 </Text>
              <Text> 새싹을 난으로 키웠어요 </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress=
          {() => {this.setState({ visible: !visible }), this.setState({plantNum: 3})}}
            style={styles.box1} >
            <Image style={styles.image1} source={require('../assets/Plant2.png')}
            />
            <View style={{ flexDirection: 'column', justifyContent: 'space-around', }}>
              <Text> 이름이 없어요 </Text>
              <Text> 과제에서 해방돼 </Text>
              <Text> 자유롭게 산책하고 싶어요 </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress=
          {() => {this.setState({ visible: !visible }), this.setState({plantNum: 4})}}
            style={styles.box1} >
            <Image style={styles.image1} source={require('../assets/Plant3.png')}
            />
            <View style={{ flexDirection: 'column', justifyContent: 'space-around', }}>
              <Text> 힐링어플!! </Text>
              <Text> 침대에서 뒹굴거리는게 </Text>
              <Text> 힐링아닐까요 </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress=
          {() => {this.setState({ visible: !visible }), this.setState({plantNum: 5})}}
            style={styles.box1} >
            <Image style={styles.image1} source={require('../assets/Plant4.png')}
            />
            <View style={{ flexDirection: 'column', justifyContent: 'space-around', }}>
              <Text> 허리운동 </Text>
              <Text> 의자에서 일어나서 </Text>
              <Text> 허리를 피고 스트레칭 </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress=
          {() => {this.setState({ visible: !visible }), this.setState({plantNum: 6})}}
            style={styles.box1} >
            <Image style={styles.image1} source={require('../assets/Plant5.png')}
            />
            <View style={{ flexDirection: 'column', justifyContent: 'space-around', }}>
              <Text> 작은 새싹 </Text>
              <Text> 마음이 아파요 </Text>
              <Text> 종강은 언제쯤 할까요 </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress=
          {() => {this.setState({ visible: !visible }), this.setState({plantNum: 7})}}
            style={styles.box1} >
            <Image style={styles.image1} source={require('../assets/Plant7.png')}
            />
            <View style={{ flexDirection: 'column', justifyContent: 'space-around', }}>
              <Text> 작은 새싹 </Text>
              <Text> 마음이 아파요 </Text>
              <Text> 종강은 언제쯤 할까요 </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress=
          {() => {this.setState({ visible: !visible }), this.setState({plantNum: 8})}}
            style={styles.box1} >
            <Image style={styles.image1} source={require('../assets/Plant8.png')}
            />
            <View style={{ flexDirection: 'column', justifyContent: 'space-around', }}>
              <Text> 작은 새싹 </Text>
              <Text> 마음이 아파요 </Text>
              <Text> 종강은 언제쯤 할까요 </Text>
            </View>
          </TouchableOpacity>

        </ScrollView>

        <Provider>
          <Portal>
            <Dialog visible={visible} onDismiss={() => this.setState({ visible: !visible })} style={styles.dialog1}>
              <Dialog.Actions style={{ justifyContent: 'space-between', }}>
                <View>
                  <Text>이 식물을 적용할까요?</Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                  <Button onPress={() => console.log(plantNum)}>
                    네</Button>
                  {/*this.props.navigation.navigate('Main', {plantNum:1})*/}
                  <Button onPress={() => console.log('no')}>
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
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FDFDF3',
    alignItems: 'stretch',
  },
  image1: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  box1: {
    borderColor: '#B2C9E9',
    borderWidth: 1,
    width: '95%',
    alignItems: 'center',
    margin: 10,
    flexDirection: 'row',
    backgroundColor: '#B2C9E9',
  },
  dialog1: {
    justifyContent: 'space-between',
  },
});