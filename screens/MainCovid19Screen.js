import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { Paragraph, DataTable } from 'react-native-paper';


const Covid19Screen = ({navigation}) =>{
  return(

    <View style={styles.container0} >

      <View style={styles.container} > 

            <DataTable>
            <DataTable.Header>
              <DataTable.Title>확진자 정보</DataTable.Title>
              <DataTable.Title numeric>확진자 수</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>현재 확진환자</DataTable.Cell>
              <DataTable.Cell numeric>159</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>총 확진자</DataTable.Cell>
              <DataTable.Cell numeric>1100</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>지역 확진자</DataTable.Cell>
              <DataTable.Cell numeric>36</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Pagination
              page={1}
              numberOfPages={2}
              onPageChange={page => {
                console.log(page);
              }}
              label="1-2 of 6"
            />
            </DataTable>

       </View>
      

      <View style={styles.container} > 


        <Button title="실시간 뉴스" onPress={() => navigation.navigate("Sub1Covid19Screen")}/>

        <Paragraph>                        </Paragraph>

        <Button title="선별 진료소" onPress={() => navigation.navigate("Sub1Covid19Screen_2")}/>

    </View>
       
    </View>
  );
};

const styles = StyleSheet.create({
  
  container0: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  Plant1:{
    width: '10%',
    height: '10%',
    resizeMode: 'contain'
  },
});

export default Covid19Screen;
