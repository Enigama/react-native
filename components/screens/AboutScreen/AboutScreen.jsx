import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  Container: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  Title: {
    fontSize: 45,
  },
  Text: {
    fontSize: 20,
  }
});

const AboutScreen = () => {
  const name = 'Eugene';

  return(
    <View style={style.Container}>
      <Text style={style.Title}>Getting started with react native!</Text>
      <Text style={style.Text}>My name is {name}</Text>
    </View>
  )
};

export default AboutScreen;
