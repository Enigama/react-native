import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";

const style = StyleSheet.create({

})

const ListScreen = () => {
  const friends = [
    {
      name: 'Friend #1',
      age: 25
    },
    {
      name: 'Friend #2',
      age: 31
    },
    {
      name: 'Friend #3',
      age: 13
    },
    {
      name: 'Friend #4',
      age: 22
    },
    {
      name: 'Friend #5',
      age: 24
    },
  ];

  return(
    <View>
      <Text>List Screen!</Text>
      <FlatList
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({item}) => {
          return (
            <Text>
              {item.name} - Age {item.age}
             </Text>
          )
        }}/>
    </View>
  )
};

export default ListScreen;
