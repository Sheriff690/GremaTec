/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Host from './Components/Model_host';
import Jsonload from './Components/Jsonload';
import SliderBoxer from './Components/SliderBoxer';
import TheModal from './Components/modal';
import AboutTab from './BottomNavigation/screens/Info';

AppRegistry.registerComponent(appName, () => App); //Can change the app to render here
