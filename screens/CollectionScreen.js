import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import { Modal, Portal, Provider, Divider} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';


const CollectionScreen = () =>{
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return(
    <View>
      <ScrollView>
        <TouchableOpacity onPress={showModal} >
          <Image 
          style={styles.image1}
          source={{uri:'https://image.librewiki.net/thumb/2/2c/%EC%97%98%ED%92%8D.png/240px-%EC%97%98%ED%92%8D.png'}}
          />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity>
          <Image 
           style={styles.image1}
           source={{uri:'https://image.librewiki.net/thumb/8/80/%EB%82%98%EB%AC%B4%EC%A7%80%EA%B8%B0.png/240px-%EB%82%98%EB%AC%B4%EC%A7%80%EA%B8%B0.png'}}
         />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity>
          <Image 
            style={styles.image1}
            source={{uri:'https://image.librewiki.net/thumb/4/43/%EB%93%9C%EB%A0%88%EB%94%94%EC%96%B4.png/240px-%EB%93%9C%EB%A0%88%EB%94%94%EC%96%B4.png'}}
          />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity>
          <Image 
            style={styles.image1}
            source={{uri:'https://image.librewiki.net/thumb/2/2f/%EB%A1%9C%ED%8C%8C%ED%8C%8C.png/240px-%EB%A1%9C%ED%8C%8C%ED%8C%8C.png'}}
         />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity>
         <Image 
           style={styles.image1}
           source={{uri:'https://image.librewiki.net/thumb/f/f8/%EC%B9%98%EC%BD%94%EB%A6%AC%ED%83%80.png/240px-%EC%B9%98%EC%BD%94%EB%A6%AC%ED%83%80.png'}}
          />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity>
         <Image 
            style={styles.image1}
            source={{uri:'https://image.librewiki.net/thumb/3/3d/%EC%A3%BC%EB%A6%AC%EB%B9%84%EC%96%80.png/240px-%EC%A3%BC%EB%A6%AC%EB%B9%84%EC%96%80.png'}}
          />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity>
          <Image 
           style={styles.image1}
           source={{uri:'https://image.librewiki.net/thumb/7/7e/%EC%9A%B0%EC%B8%A0%EB%8F%99.png/240px-%EC%9A%B0%EC%B8%A0%EB%8F%99.png'}}
          />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity>
          <Image 
           style={styles.image1}
           source={{uri:'https://image.librewiki.net/thumb/3/3e/%EC%95%BC%EB%82%98%ED%94%84.png/240px-%EC%95%BC%EB%82%98%ED%94%84.png'}}
          />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity>
          <Image 
            style={styles.image1}
           source={{uri:'https://image.librewiki.net/thumb/e/ea/%EC%97%B0%EA%BD%83%EB%AA%AC.png/240px-%EC%97%B0%EA%BD%83%EB%AA%AC.png'}}
          />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity>
          <Image 
           style={styles.image1}
           source={{uri:'https://image.librewiki.net/thumb/b/be/%EB%B0%B1%EC%86%9C%EB%AA%A8%EC%B9%B4.png/240px-%EB%B0%B1%EC%86%9C%EB%AA%A8%EC%B9%B4.png'}}
          />
        </TouchableOpacity>
      </ScrollView>

    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <TouchableOpacity onPress={hideModal}>
            <Text>547 엘풍</Text>
            <Text>돌풍 포켓몬</Text>
            <Text>회오리바람과 함께 나타나 집안의 가구를 움직이거나 솜을 남기는 장난을 한다.</Text>
          </TouchableOpacity>
        </Modal>
      </Portal>
    </Provider>

  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image1:{
   height:200,
   width:200,
   resizeMode:'contain',
   alignItems: 'flex-start',
   justifyContent: 'center',
  },
  box1:{
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default CollectionScreen;
