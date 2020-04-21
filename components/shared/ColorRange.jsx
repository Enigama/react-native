import React from 'react';
import {Text, Button, View, StyleSheet} from "react-native";

const style = StyleSheet.create({});

const ColorRange = ({title, onIncrease, onDecrease}) => {
  return(
    <View>
      <Text>{title}</Text>
      <Button title={`More ${title}`} onPress={() => onIncrease(title)}/>
      <Button title={`Less ${title}`} onPress={() => onDecrease(title)}/>
    </View>
  )
};

export default ColorRange

