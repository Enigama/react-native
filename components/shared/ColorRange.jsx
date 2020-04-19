import React, {useState} from 'react';
import {Text, Button, View, StyleSheet} from "react-native";

const style = StyleSheet.create({});

const ColorRange = ({title, onChange}) => {
  return(
    <View>
      <Text>{title}</Text>
      <Button title={`More ${title}`} onPress={() => onChange(title, 0)}/>
      <Button title={`Less ${title}`} onPress={() => onChange(title, 1)}/>
    </View>
  )
};

export default ColorRange

