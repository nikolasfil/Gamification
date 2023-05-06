import React, {useState} from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';


const App = () => {

  const [pages,setPage] = useState([
    {name: 'Home', page: HomePage},
    {name: 'About', page: AboutPage},
    {name: 'Profile', page: ProfilePage},
  ]);


  const clickMenu = () => {
    console.log('clickMenu');
  }

  return (

    <View style={styles.navigation}>
      <Text>Home</Text>

      <PageSelector
        value='test' 
        >
      </PageSelector>
    </View>

    // <PageSelector>
    //   <View>
    //     <Text>This is an example</Text>
    //     </View>
    //   </PageSelector>
  );
};


const PageSelector = ({value}) => (

  <View >

    <View >
      <Text>{value}</Text>
    </View>
  </View>

);

const ProfilePage = () => (
  <View >
      <Text>Profile</Text>
    </View>
);


const AboutPage = () => (
  <View >
      <Text>Profile</Text>
    </View>
);

const HomePage = () => (
  <View >
      <Text>Profile</Text>
    </View>
);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 40,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },

  navigation: {
    // flex: 1,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;