import React, {useState} from 'react';
import {Text, View, Button, StyleSheet, FlatList} from "react-native";
import ColorRange from "../../shared/ColorRange";

const style = StyleSheet.create({
  ColorBox: {
    width: 100,
    height: 100,
  }
});

const COLOR_INCREMENT = 15;

const getRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`
};

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  // console.log(red, green, blue, 'colors');

  const titles = ['Red', 'Green', 'Blue'];

  const changeColor = (colorName, sign) => {
    switch (colorName) {
      case titles[0]:
        if (!sign) {
          setRed(red + COLOR_INCREMENT);
          return;
        }
        setRed(red - COLOR_INCREMENT);
        break;
      case titles[1]:
        if (!sign) {
          setGreen(green + COLOR_INCREMENT);
          return;
        }
        setGreen(green - COLOR_INCREMENT);
        break;
      case titles[2]:
        if (!sign){
          setBlue(blue + COLOR_INCREMENT);
          return;
        }
        setBlue(blue - COLOR_INCREMENT);
        break;
    }
  };

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
      {
        titles.map((item, index) => {
          return <ColorRange title={item} key={index} onChange={changeColor}/>
        })
      }

      <View style={{...style.ColorBox, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
    </View>
  )
};

export default ColorScreen;
