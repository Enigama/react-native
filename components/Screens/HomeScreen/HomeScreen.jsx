import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const style = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  }
});

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={style.textStyle}>Home screen components only)</Text>

      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  )
};

export default HomeScreen;
