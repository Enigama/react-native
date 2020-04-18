import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./components/Screens/HomeScreen/HomeScreen";
import AboutScreen from "./components/Screens/AboutScreen/AboutScreen";
import ListScreen from "./components/Screens/ListScreen/ListScreen";

// import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="List" component={ListScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
