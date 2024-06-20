import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';

// importing screens
import Diseases from "./screens/Diseases";
import Pests from "./screens/Pests";
import Home from "./screens/Home";
import Info from "./screens/Info";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Image,View, useColorScheme, useWindowDimensions } from "react-native";
import Developers from "./screens/Developers";
import Tutorial from "./screens/Tutorial";
import Predictions from "./screens/Predictions";

const homeName = 'Home';
const diseasesName = 'Diseases';
const pestsName = 'Pests';
const infoName = 'Info';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigation = () => {
  const HEIGHT = useWindowDimensions().height;
  const WIDTH = useWindowDimensions().width;
  const isDarkMode = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={{
        headerShown: false,
        tabBarStyle:{
          // backgroundColor: isDarkMode? '#607812' : 'white',
          backgroundColor: isDarkMode? Colors.darker : Colors.lighter,
          height: HEIGHT * .11,
        },
        tabBarActiveTintColor: '#4F8EF7',
        tabBarInactiveTintColor: '#748c94',
        tabBarLabelStyle: {
          fontSize: 14, paddingBottom:10,
    
        },
      }}
    
      >
    
          <Tab.Screen name={homeName} options={{
            tabBarIcon:()=>(
              <View>
                <Image source={require('../assets/images/home.png')}
              resizeMode="contain"
              style = {{
                marginTop:8,
                width:25,
                height:25,
                tintColor: isDarkMode? 'white' : 'black',
              }}
              />
              </View>
            ),
            tabBarLabel: 'Home',
          }} component={Home}/>
    
        <Tab.Screen name= {diseasesName} options={{
          tabBarIcon:() => (
            <View>
                <Image source={require('../assets/images/leaf.png')}
              resizeMode="contain"
              style = {{
                marginTop:12,
                width:25,
                height:25,
                tintColor: isDarkMode? 'white' : 'black',
              }}
              />
              </View>
          ),
          tabBarLabel: 'Diseases',
        }}  component={Diseases}/>
        <Tab.Screen name={pestsName} options={{
          tabBarIcon:() => (
            <View>
                <Image source={require('../assets/images/pest1.png')}
              resizeMode="contain"
              style = {{
                marginTop:8,
                width:25,
                height:25,
                tintColor: isDarkMode? 'white' : 'black',
              }}
              />
              </View>
          ),
          tabBarLabel: 'Pests',
        }} component={Pests}/>
        <Tab.Screen name={infoName} options={{
          tabBarIcon:() => (
            <View>
                <Image source={require('../assets/images/infoIcon.png')}
              resizeMode="contain"
              style = {{
                marginTop:8,
                width:25,
                height:25,
                tintColor: isDarkMode? 'white' : 'black',
              }}
              />
              </View>
          ),
          tabBarLabel: 'INFO',
        }} component={Info}/>
      </Tab.Navigator>
  )
}

const MainNavigation = () => {
  const HEIGHT = useWindowDimensions().height;
  const WIDTH = useWindowDimensions().width;
  const isDarkMode = useColorScheme() === "dark";
  return (
     
    <NavigationContainer>

      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="TabNavigation" component={TabNavigation}/>
        <Stack.Screen name="Tutorial" component={Tutorial}/>
        <Stack.Screen name="Developers" component={Developers}/>
        <Stack.Screen name="Predictions" component={Predictions} />
      </Stack.Navigator>
    
    </NavigationContainer>
      
      
    
  )
};
export default MainNavigation;
