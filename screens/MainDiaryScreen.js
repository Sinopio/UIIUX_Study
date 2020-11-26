import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Avatar, Button, Card, Title, Paragraph, 
  Divider, IconButton, FAB, Portal, Provider } from 'react-native-paper';
import { ScrollView, View, StyleSheet, ImageBackground, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Diary from '../assets/pic.png';
import BottomBar from '../assets/BottomBar.png'

const DiaryScreen = ({ navigation }) => {

  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;

  return (
    <View style={styles.maincontainer}>
      <View style={{ width: '100%', flex: 10 }}>
        <View>
          <ScrollView>

            <Card style={styles.card}>
              <Card.Cover source={Diary} />
              <Card.Actions style>

              </Card.Actions>
            </Card>

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


          </ScrollView>
          <Provider>
            <Portal>
              <FAB.Group
                open={open}
                icon={open ? 'calendar-today' : 'plus'}

                actions={[
                  {
                    icon: 'pen',
                    label: '일기 쓰기',
                    onPress: () => navigation.navigate("Sub1DiaryScreen"),
                  },

                  {
                    icon: 'trash-can',
                    label: '삭제하기',
                    onPress: () => console.log('Pressed notifications'),
                  },
                ]}

                onStateChange={onStateChange}
                onPress={() => {
                  if (open) {
                    // do something if the speed dial is open
                  }
                }}
              />
            </Portal>
          </Provider>
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
              source={require("../assets/Diary_S.png")}
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
    backgroundColor: 'lightgreen',
  },

  content: {
    padding: 1,
  },

  card: {
    flexDirection: 'row',

    margin: 20,
  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
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

export default DiaryScreen;
