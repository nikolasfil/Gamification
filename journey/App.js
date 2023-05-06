import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState('shau');

  const [person, setPerson] = useState({ name: 'mario', age: 40 });

  const [age, setAge] = useState('30');


  const clickHandler = () => {
    setName('li');
    setPerson({ name: 'luigi', age: 45 });

  }

  const [people, setPeople] = useState([
    { name: 'shaun', key: '1' },
    { name: 'yoshi', key: '2' },
    { name: 'mario', key: '3' },
    { name: 'luigi', key: '4' },
    { name: 'peach', key: '5' },
    { name: 'toad', key: '6' },
    { name: 'bowser', key: '7' },
  ]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>THis is {name} and {age}</Text>
        <Text>His name is {person.name} and his age is {person.age}</Text>

        <Text>Enter name: </Text>
        <TextInput multiline style={styles.input} placeholder='eg John Doe' onChangeText={(val) => setName(val)} />

        <Text>Enter age: </Text>
       
        <TextInput keyboardType='numeric' style={styles.input} placeholder='eg 99' onChangeText={(val) => setAge(val)} />

        <View style={styles.container}>
          {people.map((item) => {
            return (
              <View >
                <Text style={styles.item}>{item.name}</Text>
              </View>
            )
          })}  
        </View>

          <FlatList 
          numColumns={2}
          keyExtractor={(item) => item.key}
          data={people}
          renderItem={({item}) => (
            <Text style={styles.item}>{item.name}</Text>
          )}
          />

        <StatusBar style="auto" />
        <View style={styles.buttonContainer}>
          {/* <Button title="update state" onPress={() => setName('shaun')}/> */}
          <Button title="update state" onPress={clickHandler} />





        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24
    
  }

});
