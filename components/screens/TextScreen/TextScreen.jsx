import React, { useState } from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";

const TextScreen = () => {
  const [text, setText] = useState('');
  return (
    <View>
      <Text>Text screen</Text>
      <TextInput
        style={style.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={(val) => setText(val)}
      />
    </View>
  )
};

const style = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  }
});

export default TextScreen;
