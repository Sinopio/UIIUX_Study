import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Avatar, Button, Card, Title, Paragraph, Divider} from 'react-native-paper';
import {ScrollView, View} from 'react-native'
import Diary from '../assets/nuguri.jpg';
import Diary2 from '../assets/nuguri2.png';
import Diary3 from '../assets/nuguri3.png';

const DiaryScreen = ({navigation}) =>{
  return(
  <View>
  <ScrollView>

    <Card>
    <Card.Content>
      <Title>오늘의 일기</Title>
      <Paragraph>점심 나가서 먹을 것 같아 점심 나가서 먹을 것 같아</Paragraph>
    </Card.Content>
    <Card.Cover source={Diary} />
    <Card.Actions>
      <Button onPress={() => navigation.navigate("Sub1DiaryScreen")} >작성하기</Button>
      <Button>삭제</Button>
    </Card.Actions>
    
    <Divider />
    
    <Card.Content>
      <Title>내일의 일기</Title>
      <Paragraph>저녁 나가서 먹을 것 같아 저녁 나가서 먹을 것 같아</Paragraph>
    </Card.Content>
    <Card.Cover source={Diary2} />
    <Card.Actions>
      <Button onPress={() => navigation.navigate("Sub1DiaryScreen")} >작성하기</Button>
      <Button>삭제</Button>
    </Card.Actions>

    <Divider />

    <Card.Content>
      <Title>모레의 일기</Title>
      <Paragraph>과제하다 죽은 학생은 원념이 되어 그를 평생 괴롭혔다.</Paragraph>
    </Card.Content>
    <Card.Cover source={Diary3} />
    <Card.Actions>
      <Button onPress={() => navigation.navigate("Sub1DiaryScreen")} >작성하기</Button>
      <Button>삭제</Button>
    </Card.Actions>
    </Card>

  </ScrollView>
  </View>
  );
};



export default DiaryScreen;
