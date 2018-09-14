/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import Header from './header'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Image style = {{height:200,width:200}}
        source = {require('./CFS_4655.jpg')}/>
        <Text style={styles.welcome}>Welcome to MyBio</Text>
        <Text style={styles.instructions}></Text>
        <Text style={styles.instructions}>Hi,My name is Anggayudha O.P</Text>
        <Text style={styles.instructions}>I am 15th years old</Text>
        <Text style={styles.instructions}>I am study at SMK Telkom Purwokerto</Text>
        <Text style={styles.instructions}>I am on class XI RPL 2</Text>
        <Text style={styles.instructions}>08 this is my absen number</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#D3D3D3',
  },
  instructions: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});
