import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Avatar, Button, Card, Title, Paragraph, Divider, IconButton,FAB, Portal, Provider} from 'react-native-paper';
import {ScrollView, View, StyleSheet} from 'react-native'
import Diary from '../assets/pic.png';

const DiaryScreen = ({navigation}) =>{

  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;

  return(

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
});

export default DiaryScreen;
