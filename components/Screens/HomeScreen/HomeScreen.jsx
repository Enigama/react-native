import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const style = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  }
});

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={style.textStyle}>Home screen components only)</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('About')}
      >
        <Text>Go to About Screen</Text>
      </TouchableOpacity>

      <Button
        title="Go to List Screen"
        onPress={() => navigation.navigate('List')}
      />

    </View>
  )
};

export default HomeScreen;
