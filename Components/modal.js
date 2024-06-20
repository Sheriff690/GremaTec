import React, {useState} from 'react';
import {
  Text,
  View,
  Modal,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
// we render this
const ModalPopup = ({visible, children}) => {
  const [showModal, setShowModal] = useState(visible);
  //for opening animation
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      // for opening animation
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      //for closing animation
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  //customizing modal from react native
  return (
    <Modal transparent visible={true}>
      <View style={styles.modalBackground}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};
const TheModal = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ModalPopup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image
                source={require('../assets/images/istock1.jpg')} //add an x image
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          {/* Plant disease or pest image */}
          <Image
            source={require('../assets/images/istock2.jpg')}
            style={{height: 150, width: 200, marginVertical: 10}}
          />
        </View>
        <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'left'}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          eligendi aspernatur possimus culpa. Possimus veritatis quis labore.
          Perspiciatis laborum sunt, cumque, illum sit asperiores veniam quidem
          magni dolores, nobis voluptate.
        </Text>
      </ModalPopup>
      <Button title="Open Modal" onPress={() => setVisible(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRightColor: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end ',
    justifyContent: 'center',
  },
});
export default TheModal;
