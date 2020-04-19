import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ImageDetail from "../../shared/ImageDetail";

const ImageScreen = () => {
  const detail = [
    {
        title: 'Beach',
        img: require('../../../assets/beach.jpg'),
        score: 9,
    },
    {
        title: 'Forest',
        img: require('../../../assets/forest.jpg'),
        score: 6,
    },
    {
        title: 'Mountain',
        img: require('../../../assets/mountain.jpeg'),
        score: 10,
    },

  ]

  return(
    <View>
      <Text>Image Screen</Text>
      {
        detail.map((item, index) => {
          const {title, img, score} = item;

          return <ImageDetail title={title} img={img} key={index} score={score}/>
        })
      }
    </View>
  )
};

export default ImageScreen;
