import React, {useReducer, useState} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from "react-native";
import ColorRange from "../../shared/ColorRange";

const style = StyleSheet.create({
  ColorBox: {
    width: 100,
    height: 100,
  }
});

const COLOR_INCREMENT = 15;
const titles = ['Red', 'Green', 'Blue'];

const getRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`
};

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case titles[0]:
      return {
        ...state,
        red: state.red + action.amount
      };
    case titles[1]:
      return {
        ...state,
        green: state.green + action.amount
      };
    case titles[2]:
      return {
        ...state,
        blue: state.blue + action.amount
      };
    default:
      return state;
  }
};

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  const {red, green, blue} = state;

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
                        onIncrease={(color) => dispatch({colorToChange: color, amount: COLOR_INCREMENT})}
                        onDecrease={(color) => dispatch({colorToChange: color, amount: -1 * COLOR_INCREMENT})}/>
          )
        })
      }

      <View style={{...style.ColorBox, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
    </View>
  )
};

export default ColorScreen;
