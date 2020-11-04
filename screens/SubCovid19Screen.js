import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, ScrollView, Linking } from 'react-native';
import {Card, Title, Paragraph, Divider, Button} from 'react-native-paper';
import Diary from '../assets/nuguri4.jpg';
import Diary2 from '../assets/nuguri5.jpg';
import Diary3 from '../assets/nuguri6.jpg';

const Sub1Covid19Screen = ({navigation}) =>{
  return(
    <View>
    <ScrollView>
      <Card>
      <Card.Content>
        <Title>너구리 3연속 롤드컵 우승</Title>
        <Paragraph>점심은 나가서 짜파구리를 먹을 예정</Paragraph>
      </Card.Content>
      <Card.Cover source={Diary} />
      <Card.Actions>
      <Button onPress={() =>  Linking.openURL('http://www.inven.co.kr/webzine/news/?news=246581&site=lol')} >기사보기</Button>
      </Card.Actions>

      <Divider />
     
      <Card.Content>
        <Title>너구리 3연속 과제 제출!</Title>
        <Paragraph>이것은 과제가 아니다 너구리이다</Paragraph>
      </Card.Content>
      <Card.Cover source={Diary2} />
      <Card.Actions>
      <Button onPress={() =>  Linking.openURL('http://www.inven.co.kr/webzine/news/?news=246581&site=lol')} >기사보기</Button>
      </Card.Actions>
  
      <Divider />
  
      <Card.Content>
        <Title>너구리!! 코로나 안걸려 화제,  비결은   과제를 안한 것</Title>
        <Paragraph>너굴너굴너굴너굴너굴너굴</Paragraph>
      </Card.Content>
      <Card.Cover source={Diary3} />
      <Card.Actions>
      <Button onPress={() =>  Linking.openURL('http://www.inven.co.kr/webzine/news/?news=246581&site=lol')} >기사보기</Button>
      </Card.Actions>
      </Card>


    </ScrollView>
    </View>
    );
  };

export default Sub1Covid19Screen;
