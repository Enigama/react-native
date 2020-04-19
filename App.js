import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./components/screens/HomeScreen/HomeScreen";
import AboutScreen from "./components/screens/AboutScreen/AboutScreen";
import ListScreen from "./components/screens/ListScreen/ListScreen";
import ImageScreen from "./components/screens/ImageScreen/ImageScreen";
import CounterScreen from "./components/screens/CounterScreen/CounterScreen";

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="List" component={ListScreen}/>
        <Stack.Screen name="Image" component={ImageScreen}/>
        <Stack.Screen name="Counter" component={CounterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
