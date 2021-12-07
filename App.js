import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default function App() {
  const image = require ('./background.jpeg');
  return (
    <View style={styles.container}>
      
      <View 
      style={styles.header}
      ><Text style={styles.textWhite}>Header</Text></View>
      <View
      style={styles.body}>
      <Text style={{paddingLeft: 35}}>Hello</Text>
      <Image
      style={styles.image}
      source={image}
      /> 
      </View>
       
      
      <StatusBar style="auto" />
      
      <View 
      style={styles.footer}
      ><Text style={styles.content}>Footer</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    width: 400,
    paddingLeft: 175,
    backgroundColor: 'black',
    justifyContent: 'center'
  },
  footer: {
    flex: 1,
    width: 400,
    textAlign: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingLeft: 175
    
  },
  body: {
    flex: 4,
    width: 400,
    paddingLeft: 150,
    backgroundColor: 'aliceblue',
    
  },
  image: {
    justifyContent: 'center',
    width: 107,
    height: 165,
    padding: 10
  },
  textWhite: {
    color: 'white'
  }
});
