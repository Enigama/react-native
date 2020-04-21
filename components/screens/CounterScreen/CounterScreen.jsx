import React, { useReducer } from 'react';
import {Text, StyleSheet, View, Button} from "react-native";

const style = StyleSheet.create({});

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_count':
      return state.count + action.payload < 0
      ? state
      : { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});

  return(
    <View>
      <Text>Current Count: {state.count}</Text>
      <Button title="Increase" onPress={() => dispatch({ type: 'change_count', payload: 1 })}/>
      <Button title="Decrease" onPress={() => dispatch({ type: 'change_count', payload: -1 })}/>
    </View>
  )
};

export default CounterScreen;
