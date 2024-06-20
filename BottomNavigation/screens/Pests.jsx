import { View, TouchableOpacity,StyleSheet, Text,SafeAreaView ,useColorScheme, useWindowDimensions, ScrollView, Image, Modal, FlatList} from 'react-native'
import {React, useState, useContext} from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { DUMMY_DATA } from '../../assets/PestsDetails';



const Pests = ({navigation}) =>{
  const [isVisible, setIsVisible] = useState(false);
  const [imgActive, setImgActive] = useState();
  const [idActive, setIdActive] = useState()
  const [desctriptionActive, setDesctriptionActive] = useState();
  const [managementActive, setmanagementActive] = useState();

  const WIDTH = useWindowDimensions().width;
  const HEIGHT = useWindowDimensions().height;
  // const {useColorScheme, toggleColorScheme} = useColorScheme();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    width: '100%',
    alignItems:'center',
    justifyContent:'center',
};

  const renderList = ({item}) => {
    return (
      <View>
        <View style={backgroundStyle}>
          <ScrollView>
            <View style={{
              width:WIDTH * .96,
              height: HEIGHT * .4,
              flex: 1,
              flexDirection: 'column',
              backgroundColor:'#898989',
              alignSelf: 'center',
              padding: 8,
              marginBottom:10,
              borderTopRightRadius: 140,
              borderBottomLeftRadius:100,
            }}>
              <View style={{
                flexDirection:'row',
                alignItems: 'center',
                justifyContent:'space-between',
              }}>
                <View style={{margin:0}}>
                  <TouchableOpacity
                    onPress={() => {
                      setIsVisible(true);
                      setImgActive(item.url);
                      setIdActive(item.id);
                      setDesctriptionActive(item.description);
                      setmanagementActive(item.management);
                    }}>
                    <Image source={item.url}
                    style={{width:200, height:200,borderRadius:30,
                      marginBottom:15, alignSelf:'flex-start',
                    }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{
                    height: 100,
                    width: 100,
                    justifyContent: 'center',
                  }}>
                  <Text style={{
                      color: 'yellow',
                      fontSize: 22,
                      fontFamily: 'HindSiliguri-Bold',
                    }}>
                  {item.id}
                  </Text>
                </View>
              </View>
              <View style={{height:80}}>
                <Text style={{color: '#ffffff', alignSelf: 'flex-start'}}>
                  {item.overview}
                </Text>
              </View>
            </View>
          </ScrollView>
          <View style={{alignItems:'center', flex:1}} >
            <Modal 
              visible={isVisible}
              animationType='fade'
              transparent={false}
              onRequestClose={() => {setIsVisible(false)}}>
                <View style ={styles.modelView}>
                  <View style={{flexDirection:'row',backgroundColor:'white',
                    width:WIDTH* .9,
                    justifyContent:'space-between',
                    borderRadius: 20,
                    padding: 10,
                  }}>
                    <TouchableOpacity onPress={() =>{setIsVisible(false)}}>
                      <Image source={require('../../assets/images/backIcon.png')} style={{width:25, height:25}} />
                    </TouchableOpacity>
                    <Text style={{marginRight:10, color:'black'}}> {idActive} </Text>

                  </View>
                  <View style ={styles.modalBody}>
                    
                      <Image source={imgActive} 
                      style={{width:WIDTH*.94, height: HEIGHT* .4, borderRadius:30, 
                      marginBottom:15}}/>
                    <ScrollView showsVerticalScrollIndicator={false}>
                      <View style={{marginBottom: 80}}>
                        <Text style={{
                          color:'black'
                          ,lineHeight:22, textAlign:'justify',
                          fontSize: 16,
                          fontFamily: 'HindSiliguri-Bold',
                        }}>
                          {desctriptionActive}

                        </Text>
                        <Text style={{color:'red',marginTop: 10,
                          fontSize: 22,}}>
                          Control Measures
                        </Text>
                        <Text style={{color: 'green',lineHeight:22, textAlign:'justify'}}>
                          {managementActive}
                        </Text>
                      </View>

                    </ScrollView>
                  </View>

                </View>
            </Modal>
          </View>
        </View>
      </View>
    )
  }

 

  return (
  <View style={{flexDirection:'column', backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,}}>
    <View style={{
          marginBottom: 10,
          // backgroundColor: '#cccc',
          borderRadius: 10,
          padding: 5,
          marginHorizontal: 5,
        }}>
      <Text style={{
            fontSize: 22,
            fontFamily: 'HindSiliguri-Bold',
            color:isDarkMode? 'white' : 'black',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
        Common Maize Pests
      </Text>
    </View>
    <View style={{marginBottom: 100}} >
      <FlatList
      data={DUMMY_DATA}
      
      keyExtractor={item => item.id}
      renderItem={renderList}/>
    </View>
  </View>
);
};



const styles = StyleSheet.create({
  modelView: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#eeeeff',
    flexDirection: 'column',
    padding: 10,
  },
  modalBody: {
    marginTop: 20,
    flexDirection: 'column',
  },
  ScrollView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
});

export default Pests;


