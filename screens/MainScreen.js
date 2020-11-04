import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, View, Image, ImageBackground, ScrollView  } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';
import BackGround from '../assets/BackGround_j2.png'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class MainScreen extends Component{
  constructor(){
    super();

    //const [visible, setVisible] = React.useState(false);
    
    this.state ={
      img: require('../assets/Plant_Nomalpng.png'),
    };
  }

  render(){
    return(
      <View>
        <ImageBackground
          style = {{width:'100%', height:'100%'}}
          source = {BackGround}       
          > 
          <View view style={styles.topmenu}>
            <Button 
              style = {styles.collection}
              mode="contained"
              onPress={() => this.props.navigation.navigate("Collection")}
            />          
            <Button 
              icon="book" style = {styles.collection}
              mode="contained"
              onPress={() => this.props.navigation.navigate("TodayList")}
            />
          </View>
  
          <View style={styles.middlemenu1}>
            <TouchableOpacity 
              onPress={this.giveWater}
              style = {styles.SpotButton}
            >
              <Image 
                source={require("../assets/water.png")}
                style={{height:'100%',width:'100%',resizeMode:'contain'}} 
              />
            </TouchableOpacity>
          </View> 
  
          <View style={styles.middlemenu2}>
            <TouchableOpacity 
              onPress={this.giveNutrition}
              style = {styles.SpotButton}
            >
              <Image 
                source={require("../assets/shovel.png")}
                style={{height:'100%',width:'100%',resizeMode:'contain'}}
              />
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={this.giveLight}
              style = {styles.SpotButton}
            >
              <Image 
                source={require("../assets/sun.png")}
                style={{height:'100%',width:'100%',resizeMode:'contain'}}
              />
            </TouchableOpacity>
          </View> 
  
          <View View style={styles.PlantSpot}>
            <Image source={this.state.img} style = {styles.Plant} />
          </View>
        </ImageBackground>        
    </View>
    );
  }

  giveNutrition = () => {
    this.setState({img:require('../assets/Plant_Nutrition.png')});
  }
  
  giveWater = () => {
    this.setState({img:require('../assets/Plant_Water.png')});
  }
  
  giveLight = () => {
    this.setState({img:require('../assets/Plant_Light.png')});
  }
}

const styles = StyleSheet.create({
  PlantSpot:{
    flex: 9,
    width:'100%',
    height: '100%',
    justifyContent: 'center',
    alignItems:'center'
  },
  Plant:{
    width: '130%',
    height: '100%',
  },
  collection:{
    width: '10%',
    height: '30%',
  },
  topmenu:{
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    justifyContent: 'space-around',
  },
  middlemenu1:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  middlemenu2:{
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
    justifyContent: 'space-around',
  },
  SpotButton:{
    width: 50,
    height: 50,
  },
});
