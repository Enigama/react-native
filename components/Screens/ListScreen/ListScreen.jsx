import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";

const style = StyleSheet.create({

})

const ListScreen = () => {
  const friends = [
    {
      name: 'Friend #1'
    },
    {
      name: 'Friend #2'
    },
    {
      name: 'Friend #3'
    },
    {
      name: 'Friend #4'
    },
    {
      name: 'Friend #5'
    },
  ];

  return(
    <View>
      <Text>List Screen!</Text>
      <FlatList
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({item, index}) => {
          return <Text>{item.name}</Text>
        }}/>
    </View>
  )
};

export default ListScreen;
