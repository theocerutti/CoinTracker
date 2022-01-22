import './shim.js';
import 'node-libs-react-native/globals';
import 'react-native-gesture-handler';
// THOSE MUST BE AT THE TOP
import {AppRegistry} from 'react-native';
import RootApp from './src/App';

const APP_KEY = 'cointracker';

AppRegistry.registerComponent(APP_KEY, () => RootApp);
