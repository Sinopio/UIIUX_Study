import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Image, ImageBackground, Text, TextInput, 
  ScrollView } from 'react-native';
import BackGround from '../assets/MainBackGround.png';
import TodoInsert from '../todaylist/TodoInsert';
import TodoList from '../todaylist/TodoList';

const TodaylistScreeen = () =>{
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };

  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = id => e => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };
  return(
    <View>
      <ImageBackground
        style = {{width:'100%', height:'100%'}}
        source = {BackGround}
        resizeMode = "cover"        
      > 
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>

      </ImageBackground>
  </View>
  );
};

const styles = StyleSheet.create({
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
});

export default TodaylistScreeen;
