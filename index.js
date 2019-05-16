/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {StackContainer} from './src/routes/StackRoot'
import {name as appName} from './app.json';
import Employee from './src/screen/ListEmployeeScreen'
import Edit from './src/screen/EditEmployeeScreen'
import App from './App'
AppRegistry.registerComponent(appName, () => App);
