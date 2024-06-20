import React from 'react'
import { Image, StyleSheet, View, Text, useWindowDimensions } from 'react-native';

const Developers = () => {

  const WIDTH = useWindowDimensions().width;
  const HEIGHT = useWindowDimensions().height;
  return(
    <View style={styles.developersContainer} >
        <View style={[styles.firstRow, {columnGap:WIDTH* .3}]} >
          <View>
          <Image source={require('../../assets/images/istock5.jpg')}
          style={styles.images}/>
          <Text style={styles.description} >
              Takunda E Jori
            </Text>
          </View>
          <View>
            <Image source={require('../../assets/images/istock4.jpg')}
            style={styles.images}/>
            <Text style={styles.description} >
              Mutsa M Mutepfa
            </Text>
          </View>
        </View>
      <View>
        <Image source={require('../../assets/images/sheriffDeDev.jpg')}
        style={styles.images}/>
        <Text style={styles.description} >
          Sherriff Gatsi
        </Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  developersContainer:{
    flexDirection:'column',
    alignItems:'center',
  },
  images:{
    width:110,
    height:110,
    borderRadius: 55,
  },
  firstRow:{
    flexDirection:'row',
    marginTop: 40,
    marginBottom: 200,
  },
  description: {
    color:'black'
  }
})

export default Developers;