import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

const ImageDetail = ({title, img, score}) => {
  const style = StyleSheet.create({
    Wrapper: {
    },
    Image: {
      width: 128,
      height: 128,
      marginRight: 15
    }
  });

  return(
    <View style={style.Wrapper}>
      <Image source={img} style={style.Image}/>
      <Text>{title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  )
};

export default ImageDetail;
