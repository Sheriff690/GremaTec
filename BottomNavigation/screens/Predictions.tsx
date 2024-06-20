import {useRoute} from '@react-navigation/native';
import Tflite from 'tensorflow-react-native';
import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
// import {MainThemeColorDark} from '../../Universal constants';

function Predictions() {
  const WIDTH = useWindowDimensions().width;
  const HEIGHT = useWindowDimensions().height;
  const [isloading, setisLoading] = useState(false);
  const route = useRoute(); //best way to go about props
  const {prop} = route.params;

  const loading = (prop: any) => {
    setisLoading(true);
    makePredictions(prop);
  };

  const makePredictions = imagePath => {
    let tflite = new Tflite();
    tflite.loadModel(
      {
        // model: 'Second_model.tflite', // required
        model: 'modelvgg19.tflite',
        labels: 'labels.txt', // required
        numThreads: 1, // defaults to 1
      },
      (err, res) => {
        if (err) console.log(err);
        else console.log(res);
      },
    );

    tflite.runModelOnImage(
      {
        path: imagePath, // required
        imageMean: 128.0, // defaults to 127.5
        imageStd: 128.0, // defaults to 127.5
        numResults: 4, // defaults to 5
        threshold: 0.05, // defaults to 0.1
      },
      (err, res) => {
        if (err) {
          Alert.alert(
            'Classification Result',
            `Error: ${res}`, // cofidence:${response.data.confidence}
          );
          setisLoading(false);
          console.log('error', err);
        } else {
          Alert.alert(
            'Classification Result',
            `Predicted Classes: ${res[0].label}`, // cofidence:${response.data.confidence}
          );
          setisLoading(false);

          console.log('Done', res);
        }
      },
    );
  };

  return (
    <View>
      <View style={{alignSelf: 'center', marginTop: '5%'}}>
        <Image
          source={{uri: prop}}
          style={{
            width: WIDTH * 0.95,
            height: HEIGHT * 0.48,
            borderRadius: 10,
            objectFit: 'fill',
          }}
        />
      </View>
      <View
        style={{
          padding: 10,
          marginTop: '10%',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            padding: 10,
            borderRadius: 20,
            width: 150,
          }}
          onPress={() => makePredictions(prop)}
          // onPress={() => loading(prop)}
          onPressIn={() => setisLoading(true)}
          >
          <Text
            style={{
              fontSize: 22,
              textAlign: 'center',
              fontFamily: 'HindSiliguri-Bold',
              color: 'white',
            }}>
            Predict
          </Text>
        </TouchableOpacity>
        <View style={{marginTop: 25}}>
          {isloading ? (
            <ActivityIndicator size="large" color= 'black' />
          ) : (
            <Text
              style={{
                margin: 20,
                color: 'black',
                // userSelect: 'text'
              }}></Text>
          )}
        </View>
      </View>
    </View>
  );
}

export default Predictions;
// import React from 'react'

// export default function Predictions() {
//   return (
//     <div>Predictions</div>
//   )
// }

