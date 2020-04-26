import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState('');
  return (
    <View style={{position: 'relative'}}>
      <Text>Enter password:</Text>
      <TextInput
        style={style.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(val) => setPassword(val)}
      />

      {
        password.length < 4 ? <Text style={style.errorText}>The password length is my be big than 4 chars!!!!</Text> : null
      }
      <View style={style.absoluteBlock}><Text>Absolute</Text></View>
    </View>
  )
};

const style = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
  errorText: {
    color: 'red',
  },
  absoluteBlock: {
    backgroundColor: 'yellow',
  }
});

export default TextScreen;
