import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';


const App = () => {

  const [pages, setPages] = useState([
    { pageName: 'Home', page: HomePage },
    { pageName: 'About', page: AboutPage },
    { pageName: 'Profile', page: ProfilePage },
  ]);

  const [page, setPage] = useState({pageName:'Home',page:HomePage});


  const clickMenu = () => {
    console.log('clickMenu');
  }

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>

        {
          pages.map((item) => {
            return (
              <Button title={item.pageName} onPress={(item) => {
                setPage({pageName:item.pageName,page:item.page})
              }}/>
            )

          })}
      </View>

        
      <View style={styles.container}>
        <Text>THis is {pages.pageName}</Text>
          {/* <Paging></Paging> */}
          {/* <ProfilePage></ProfilePage> */}
      </View>

    </View>

    // <PageSelector>
    //   <View>
    //     <Text>This is an example</Text>
    //     </View>
    //   </PageSelector>
  );
};

const Paging = () => {
  return page.page;
}

const PageSelector = ({ value }) => (

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