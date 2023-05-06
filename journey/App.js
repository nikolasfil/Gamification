import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';



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



export default App = () => {

  const [pages, setPages] = useState([
    { pagesName: 'Home', pagesFunction: HomePage },
    { pagesName: 'About', pagesFunction: AboutPage },
    { pagesName: 'Profile', pagesFunction: ProfilePage },
  ]);

  const [page, setPage] = useState({ pageName: 'Home', pageFunction: HomePage });


  const clickMenu = () => {
    console.log('clickMenu');
  }

  const Page = page.pageFunction;


  const clickButton = (item) => {
    // console.log(event)
    if (item) {
      setPage({ pageName: item.pagesName, pageFunction: item.pagesFunction })
    }
    else {
      console.log('Undefined item')
    }
  }


  

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>

        {
          pages.map((item) => {
            return (
              <Button title={item.pagesName} key={item.pagesName} onPress={() => {

                clickButton(item)
              }} />
            )

          })}
      </View>



      <View style={styles.container}>
        <Text>This is {page.pageName}</Text>
        {/* <Page></Page> */}
      </View>

    </View>

    // <PageSelector>
    //   <View>
    //     <Text>This is an example</Text>
    //     </View>
    //   </PageSelector>
  );
};



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

