import React, {useState} from 'react';
import {Text, View, Button, StyleSheet, FlatList} from "react-native";

const style = StyleSheet.create({
  ColorBox: {
    width: 100,
    height: 100,
  }
});

const getRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`
};

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return(
    <View>
      <Text>Color Screen</Text>
      <Button title="Add color" onPress={() => {
        setColors([...colors, getRandomColor(),]);
      }}/>
      <FlatList keyExtractor={color => color}
      data={colors}
      renderItem={({item}) => {
        return(
          <View
            style={{...style.ColorBox, backgroundColor: item}}
          />
        )
      }}/>
    </View>
  )
};

export default ColorScreen;
