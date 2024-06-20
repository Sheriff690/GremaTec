// import React, { Component } from 'react';
// import { View, TouchableOpacity, Text, Alert } from 'react-native';
// import ImagePicker from 'react-native-image-picker';

// class ImageCapture extends Component {
//   selectFromGallery = () => {
//     const options = {
//       mediaType: 'photo',
//       quality: 0.5,
//       includeBase64: true,
//     };

//     ImagePicker.launchImageLibrary(options, (response) => {
//       if (response.didCancel) {
//         // console.log('Image selection canceled');
//         Alert('Image selection cancelled');
//       } else if (response.error) {
//         // console.log('Image picker error:', response.error);
//         Alert('Image picker error:', response.error );
//       } else {
//         this.props.onImageCapture(response.base64);
//       }
//     });
//   };

//   captureImage = () => {
//     const options = {
//       mediaType: 'photo',
//       quality: 0.5,
//       includeBase64: true,
//     };

//     ImagePicker.launchCamera(options, (response) => {
//       if (response.didCancel) {
//         console.log('Image capture canceled');
//       } else if (response.error) {
//         console.log('Image capture error:', response.error);
//       } else {
//         this.props.onImageCapture(response.base64);
//       }
//     });
//   };

//   render() {
//     return (
//       <View>
//         <TouchableOpacity onPress={this.selectFromGallery}>
//           <Text>From Gallery</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={this.captureImage}>
//           <Text>Capture</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// export default ImageCapture;