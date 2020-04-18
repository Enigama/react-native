import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ImageDetail from "../../shared/ImageDetail";

const ImageScreen = () => {
  const detail = [
    {
        title: 'Beach',
        img: require('../../../assets/beach.jpg'),
    },
    {
        title: 'Forest',
        img: require('../../../assets/forest.jpg'),
    },
    {
        title: 'Mountain',
        img: require('../../../assets/mountain.jpeg'),
    },

  ]

  return(
    <View>
      <Text>Image Screen</Text>
      {
        detail.map((item, index) => {
          const {title, img} = item;

          return <ImageDetail title={title} img={img} key={index}/>
        })
      }
    </View>
  )
};

export default ImageScreen;
