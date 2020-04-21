import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from "react-native";
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

  const titles = ['Red', 'Green', 'Blue'];

  const setColor = (color, changeValue) => {
    switch (color) {
      case titles[0]:
        red + changeValue > 255 || red + changeValue < 0 ? null : setRed(red + changeValue);
        break;
      case titles[1]:
        green + changeValue > 255 || green + changeValue < 0 ? null : setGreen(green + changeValue);
        break;
      case titles[2]:
        blue + changeValue > 255 || blue + changeValue < 0 ? null : setBlue(blue + changeValue);
        break;
      default:
        console.error('something going wrong');
        break;
    }
  };

  return (
    <View>
      <Text>Color Screen</Text>
      <Button title="Add color" onPress={() => {
        setColors([...colors, getRandomColor(),]);
      }}/>
      <FlatList keyExtractor={color => color}
                data={colors}
                renderItem={({item}) => {
                  return (
                    <View
                      style={{...style.ColorBox, backgroundColor: item}}
                    />
                  )
                }}/>
      {
        titles.map((item, index) => {
          return (
            <ColorRange title={item}
                        key={index}
                        onIncrease={(color) => setColor(color, COLOR_INCREMENT)}
                        onDecrease={(color) => setColor(color, -1 * COLOR_INCREMENT)}/>
          )
        })
      }

      <View style={{...style.ColorBox, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
    </View>
  )
};

export default ColorScreen;
