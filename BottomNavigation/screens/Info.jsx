import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Linking,
  Alert,
  Modal,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';



function AboutTab() {
  const isDarkMode = useColorScheme() === "dark";
  const WIDTH = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const [isVisible, setisVisible] = useState(false);

  const facebookUrl = 'https://www.facebook.com/groups/4571393569612730';

  const openFaceBookGroup = groupLink => {
    // const url = `facebook://send?phone=${groupLink}`;
    Linking.openURL(groupLink)
      .then(() => {
        console.log('WhatsApp opened successfully');
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Alert Title', `Error in opening whatsApp`, [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      });
  };

  const url = 'https://chat.whatsapp.com/HD0GzX9AO075LXQuXWJ78R';

  const openGmail = () => {
    const recipientEmail = 'maizedoctor@gmail.com'; // Replace with the recipient's email address
    // const subject = 'Hello from my app';
    // const body = 'This is the body of the email';

    Linking.openURL(`mailto:${recipientEmail}`);
  };

  const openWhatsAppGroup = groupLink => {
    // const url = `whatsapp://send?phone=${groupLink}`; for phone number
    Linking.openURL(groupLink)
      .then(() => {
        console.log('WhatsApp opened successfully');
      })
      .catch(err => {
        console.log(err);
        Alert.alert(
          'Failure in Loarding Whatsapp',
          `Error in opening whatsApp`,
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        );
      });
  };
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: isDarkMode? 'grey': 'white',
        height: height,
        flex: 1,
      }}>
      <View style={{backgroundColor: isDarkMode? Colors.darker : Colors.lighter, padding: 20}}>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Barlow-Black',
            fontSize: 24,
            color: isDarkMode? 'white': 'black',
          }}>
          INFOMATION DESK
        </Text>
      </View>
      <View
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical:'12%'
        }}>
          <Text style={styles.more} >
            Want to know more on how to use this application? 
          </Text>
        <TouchableOpacity
        onPress={() => {navigation.navigate('Tutorial')}}
          >
          
            <Text
              style={{
                color: 'pink',
                fontFamily: 'Barlow-Black',
                textDecorationLine: 'underline',
                fontSize: 20,
                
              }}>
              Tutorial
            </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '14%',
        }}>
          <Text style ={styles.more} >
            Want to know more on the people who developed this application?
          </Text>
        <TouchableOpacity
        onPress={() => navigation.navigate('Developers')}
         > 
          
            <Text
              style={{
                color: 'pink',
                fontFamily: 'Barlow-Black',
                textDecorationLine: 'underline',
                textDecorationStyle: 'dotted',
                fontSize: 20,
                
              }}>
              Developers
            </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'column',
          width: WIDTH,
          padding: 10,
          position: 'absolute',
          justifyContent: 'space-around',
          bottom: '0%',
        }}>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Lora-Italic-VariableFont_wght',
              fontSize: 24,
              color: 'black',
              marginVertical:14,
            }}>
            Contact Us
          </Text>
        </View>


        <View style={{flexDirection: 'row', justifyContent: 'space-around',marginVertical:16,}}>
          <TouchableOpacity onPress={() => openFaceBookGroup(facebookUrl)}>
             <Image source={require('../../assets/images/icons/facebook.png')}
             style={{width:40, height:40,}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openGmail()}>
            <Image source={require('../../assets/images/icons/gmail.png')}
            style={{width:40, height:40,}}  />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWhatsAppGroup(url)}>
            <Image source={require('../../assets/images/icons/whatsapp.png')}
            style={{
              width:40, height:40,
              }}  />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => setisVisible(true)}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Lora-Italic-VariableFont_wght',
                fontSize: 12,
                color: 'black',
                marginTop:14,
              }}>
              version 1.0
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{alignItems: 'center', justifyContent: 'center', height: 100}}>
          <Modal
            visible={isVisible}
            animationType="slide"
            transparent={true}
            // for bluring background use react native -blur library or others
            onRequestClose={() => setisVisible(false)}>
            <View style={[styles.modalContent, {
              marginTop:height*.1 ,
              height: height*.66, 
              width: WIDTH * .9
            }]}>
              <Image source={require('../../assets/images/istock4.jpg')}
                style={{
                  width: "100%",
                  height: '40%',
                  borderRadius: 10,
                }}
               />
              <Text style={{fontSize: 22, color: 'black', textAlign:'center'}}>
                This is the first version of this App
              </Text>
              
              <TouchableOpacity
                style={styles.version}
                onPress={() => setisVisible(false)}>
                <Text style={{color: 'white'}}>Exit</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  version: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'red',
    marginBottom: 5,
    width: '20%',
    height: 40,
    position: 'relative',
    right:-121,
  },
  modalContent: {
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'grey',
    opacity:.96,
    padding: 20,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 6,
    // top: '50%',
    // left: '50%',
    // position: 'absolute',
    // marginLeft: -100,
    // marginTop: -50,
  },
  more: {
    color: 'black',
    textAlign:'center',
    fontSize:18
  }
});

export default AboutTab;
