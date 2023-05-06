import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [name, setName] = useState('shau');

  const [person, setPerson]  = useState({name: 'mario', age: 40});



  const clickHandler = () => {
    setName('li');
    setPerson({name: 'luigi', age: 45});

  }
  
  return (
    <View style={styles.container}>
      <Text>THis is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>


      <StatusBar style="auto"/>
      <View style={styles.buttonContainer}>
        {/* <Button title="update state" onPress={() => setName('shaun')}/> */}
        <Button title="update state" onPress={clickHandler}/>

      
      
      </View>
    </View>
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

});
