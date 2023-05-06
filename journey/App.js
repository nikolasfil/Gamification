import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.navigation}> */}
        <Text > This is text</Text>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  navigation: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;