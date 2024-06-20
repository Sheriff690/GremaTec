import React, { useEffect,useState } from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
  useWindowDimensions,
  Alert,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';




const App = ()=>{
  const navigation = useNavigation();
  const HEIGHT = useWindowDimensions().height;
  const WIDTH = useWindowDimensions().width;
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    if (Platform.OS === 'android'){
      SplashScreen.hide();
    }
      
  },[])

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? '#607812' : 'white',
    backgroundColor: isDarkMode? Colors.darker : Colors.lighter
  };
  const images= [
    require('../../assets/images/corn.jpeg'),
    require('../../assets/images/field.jpeg'),
    require('../../assets/images/istock1.jpg'),
    require('../../assets/images/istock2.jpg'),
    require('../../assets/images/crop_diseases.webp'),
  ];

  const [selectImage, setSelectImage] = useState('');
  const ImagePicker = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    }
    launchImageLibrary(options, res=>{
      try {
        const response = res?.assets[0]?.uri;
        navigation.navigate('Predictions', {prop: response});
        console.log(response);
      } catch (error) {
        
      }
    })
  }

  const Capture = () => {
    const options = {
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: true,
    }
    launchCamera(options, res =>{
      try {
        const response = res?.assets[0]?.uri;
        navigation.navigate('Predictions', {prop: response});
        console.log(response);
      } catch (error) {
        
      }
    })
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text style={[styles.welcome,{color: isDarkMode? 'white': 'black'}]}>
        Welcome To GremaTec,
        an AI aided corn therapist
       </Text>
       <View style={{
        backgroundColor:'red',
        height:1,
        width: WIDTH * .96,
        alignSelf:'center',
        marginTop:20,
       }} ></View>
       
       <SafeAreaView style = {[{marginTop:34},styles.sliderBox]}>
        <SliderBox images= {images}
          dotColor = 'blue'
          inactiveDotColor='yellow'
          dotStye= {{height: 20, width: 20, borderRadius: '50%'}}
          imageLoadingColor = 'white'
          autoplay = {true}
          autoplayInterval = {6000}
          circleLoop = {true}
          style = {{
            borderRadius:12,
            width: '95%',
            height: HEIGHT * .4,
          }}
          // how to add transition to the slider
        />
       </SafeAreaView>

       <View style={{
        backgroundColor:'red',
        height:1,
        width: WIDTH * .96,
        alignSelf:'center',
       }} ></View>
      
          
        <View style={styles.btnsContainer} >
          <Text style={{
            color: isDarkMode? 'white': 'black', 
            alignSelf:'center',
            fontSize: 30,
            fontWeight:'bold',
            marginBottom:30
          }} >
            Diagonise your plants
          </Text>
          <View style={styles.btns}>
          
            <TouchableOpacity
            accessibilityRole="button"
            onPress={() => {ImagePicker()}}
            >
              <Text style = {[styles.cameraBtn,
                {backgroundColor:'green',
                color:'white',
                }]}>
              From Gallery
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
            accessibilityRole="button"
            onPress={() => {Capture()}}
            >
              <Text style = {styles.cameraBtn}>Camera</Text>
            </TouchableOpacity>
          </View>
        </View>
      
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  welcome: {color:'green', fontSize:24,fontWeight:'bold',  
  textAlign:'center',marginTop:10},

  cameraBtn: {backgroundColor:'white' ,color:'green', paddingVertical:10, paddingHorizontal:10,
    fontSize:24, fontWeight:'bold',
    borderRadius:26
  },

  btns : {display:'flex', flexDirection:'row', gap:20, 
  justifyContent:'space-around', marginVertical:20,
 
},
btnsContainer: {
  backgroundColor:'#cccc', paddingVertical:10,
  borderBottomRightRadius: 40,
  borderBottomLeftRadius:40,
  paddingBottom:20,
  marginHorizontal:8,
  marginBottom:34,
  marginTop:16,
  borderTopLeftRadius:12,
  borderTopRightRadius:12,
},
sliderBox: {
  alignContent:'center',
  marginHorizontal:14,
  marginBottom:30
}
});
export default App;

