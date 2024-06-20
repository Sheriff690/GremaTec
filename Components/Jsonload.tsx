// import React, {useEffect, useState} from 'react';
// import {
//   ActivityIndicator,
//   Alert,
//   SafeAreaView,
//   Text,
//   TouchableOpacity,
// } from 'react-native';
// import RNFS from 'react-native-fs';
// import * as tf from '@tensorflow/tfjs';
// import {bundleResourceIO, decodeJpeg} from '@tensorflow/tfjs-react-native';
// import * as ImagePicker from 'react-native-image-picker';
// import {useCallback} from 'react';

// function Jsonload() {
//   const [isloading, setisLoading] = useState('');

//   const modelJson = require('../models/model.json');
//   const modelWeights = require('C:\Users\Sheriff\Desktop\HCE 260\The App\GremaTec\models\combined_weights.bin');
//   //loading the model.json

//   async function bundleResourceIOExample() {
//     console.log('[+] Application started');

//     //wait for tensorflow module to be ready

//     await tf.ready();
//     console.log('ready');

//   //   const modelJson =
//   //     await require('../models/model.json');
//   //   const modelWeights =
//   //     await require('../models/combined_weights.bin');
//   //   const model = await tf.loadLayersModel(
//   //     bundleResourceIO(modelJson, modelWeights),
//   //   );
//   //   console.log('done');
//   //   model.summary();
//   // }
//   // bundleResourceIOExample();

//   const loadModel = async () => {
//     //.ts: const loadModel = async ():Promise<void|tf.LayersModel>=>{
//     console.log('[+] Application started');

//     await tf.ready(); //
//     console.log('tensorflow model is ready');

//     const model = await tf
//       .loadLayersModel(bundleResourceIO(modelJson, modelWeights))

//       .catch(e => {
//         console.log('[LOADING ERROR] info:', e);
//       });
//     console.log('done');

//     return model;
//   };

//   const transformPlease = async (url: any) => {
//     try {
//       const fileUri = url; // Replace with your image file URI
//       const imgB64 = await RNFS.readFile(fileUri, 'base64');
//       const imgBuffer = tf.util.encodeString(imgB64, 'base64').buffer;
//       const raw = new Uint8Array(imgBuffer);

//       const imageTensor = await decodeJpeg(raw);

//       console.log(`done ${imageTensor} `);
//     } catch (error) {
//       setisLoading('');
//       console.log('Error caught in image transformation', error);
//     }
//   };

//   // const imageToTensor = async (imagePath: string) => {
//   //   const imageData = await RNFS.readFile(imagePath, 'base64');

//   //   const imageTensor = await tf.tidy(() => {
//   //     const rawImageData = tf.util.encodeString(imageData);
//   //     const decodedImage = decodeJpeg(rawImageData);
//   //     const resizedImage = ResizeBilinear(decodedImage, [224, 224]);
//   //     const normalizedImage = resizedImage.div(255.0);
//   //     console.log('all done here');
//   //     return normalizedImage;
//   //   });

//   //   return imageTensor;
//   // };
//   // const getTensor = async () => {
//   //   setisLoading('false');
//   //   await tf.ready();
//   //   console.log('ready');
//   //   const model = (await loadModel()) as tf.LayersModel;
//   //   try {
//   //     const imagePath = '../images/blight.jpg';
//   //     const tensor = await imageToTensor(imagePath);
//   //     console.log('okay');
//   //     return tensor;
//   //     console.log('Get Tensor worked');
//   //   } catch (error) {
//   //     console.log('erro in new method', error);
//   //   }
//   // };

//   const transformImageToTensor = async (uri: string) => {
//     try {
//       // Read the image as base64

//       const img64 = await RNFS.readFile(uri, 'base64');
//       const imgBuffer = tf.util.encodeString(img64, 'base64').buffer;
//       const raw = new Uint8Array(imgBuffer);
//       console.log('raw');
//       let imgTensor = decodeJpeg(raw);
//       const scalarVal = tf.scalar(255);
//       console.log('scalarVal');

//       // Resize the image
//       imgTensor = tf.image.resizeNearestNeighbor(imgTensor, [224, 224]);

//       // Normalize; if a normalization layer is in the model, this step can be skipped
//       const tensorScaled = imgTensor.div(scalarVal);

//       // Final shape of the tensor
//       const img = tensorScaled.reshape([1, 224, 224, 3]);
//       return img;
//     } catch (error) {
//       Alert.alert('Alert Title', `Error transforming image: ${error}`, [
//         {text: 'OK', onPress: () => console.log('OK Pressed')},
//       ]);
//       setisLoading('');
//       console.log('Error transforming image:', error);
//       throw error;
//     }
//   };
//   const makePredictions = async (
//     batch: number,
//     model: tf.LayersModel,
//     imagesTensor: tf.Tensor<tf.Rank>,
//   ) => {
//     //.ts: const makePredictions = async (batch:number, model:tf.LayersModel,imagesTensor:tf.Tensor<tf.Rank>):Promise<tf.Tensor<tf.Rank>[]>=>{
//     //cast output prediction to tensor
//     const predictionsdata = model.predict(imagesTensor);
//     //.ts: const predictionsdata:tf.Tensor = model.predict(imagesTensor) as tf.Tensor
//     console.log('Making a Prediction');
//     let pred = predictionsdata.split(batch); //split by batch size
//     //return predictions
//     return pred;
//   };

//   const getPredictions = async (image: string) => {
//     setisLoading('false');
//     console.log(image);
//     await tf.ready();
//     const model = (await loadModel()) as tf.LayersModel;
//     const tensor_image = await transformImageToTensor(image);
//     // const tensor_image = await transformPlease(image);
//     const predictions = await makePredictions(1, model, tensor_image);
//     setisLoading('');
//     console.log(predictions);
//     return predictions;
//   };

//   const img = require('../images/blight.jpg');

//   const [selectImage, setSelectImage] = useState('');
//   const [pickerResponse, setPickerResponse] = useState(null);

//   // const onImageGalleryClick = useCallback(() => {
//   //   const options = {
//   //     selectionLimit: 1,
//   //     mediaType: 'photo',
//   //     includeBase64: true,
//   //   };

//   //   ImagePicker.launchImageLibrary(options, res => {
//   //     try {
//   //       setPickerResponse(res);
//   //       setSelectImage(res.assets[0].uri);
//   //     } catch (error) {}
//   //   });
//   // }, []);

//   const onCameraPress = useCallback(() => {
//     const options = {
//       compressImageMaxWidth: 300,
//       compressImageMaxHeight: 300,
//       cropping: true,
//       saveToPhotos: true,
//       mediaType: 'photo',
//       includeBase64: true,
//     };

//     ImagePicker.launchCamera(options, res => {
//       try {
//         const response = res?.assets[0]?.uri;
//         setSelectImage(response);
//         const dataToPass = {url: response};
//         console.log(response);
//         getPredictions(response);
//       } catch (error) {}
//     });
//   }, []);

//   // useEffect(() => {
    
//   //   (async () => {
//   //     try {
//   //       const model = await tf.loadLayersModel(
//   //         bundleResourceIO(modelJson, modelWeights),
//   //       );
//   //       console.log('Model loaded');
//   //     } catch (e) {
//   //       console.log(e);
//   //     }
//   //   })();
//   //   (async () => {
//   //     await tf.ready();
//   //     console.log("TF ready")
//   //   })();
//   //   // console.log(isTFReady);
//   // }, []);

//   return (
//     <SafeAreaView>
//       <TouchableOpacity
//       onPress={()=>{onCameraPress()}}
//         style={{margin: 20, backgroundColor: '#ff2292', width: '20%'}}
//        >
//         <Text>Predict</Text>
//       </TouchableOpacity>
//       {isloading ? (
//         <ActivityIndicator size="large" color="blue" />
//       ) : (
//         <Text style={{margin: 20}}>Regular content goes here</Text>
//       )}
//     </SafeAreaView>
//   );
// }

// }
// export default Jsonload;
