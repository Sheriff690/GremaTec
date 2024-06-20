import React from 'react'
import { View } from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

export default function SliderBoxer() {
  const images = [
    require('../assets/images/crop_diseases.webp'), // put images here
    require('../assets/images/corn4096.png'),
    require('../assets/images/field.jpeg'),
  ]
  return (
    <View>
      <SliderBox images= {images}
          dotColor = 'blue'
          inactiveDotColor='yellow'
          dotStye= {{height: 20, width: 20, borderRadius: '50%'}}
          imageLoadingColor = 'white'
          autoplay = {true}
          autoplayInterval = {6000}
          circleLoop = {true}
          // how to add transition to the slider
        />
    </View>
  )
}
