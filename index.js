/**
 * @format
 */

import {AppRegistry} from 'react-native'
import {registerPlaybackService} from 'react-native-track-player'

import App from './App'
import {name as appName} from './app.json'

AppRegistry.registerComponent(appName, () => App)
// eslint-disable-next-line global-require
registerPlaybackService(() => require('./src/services/trackPlayerServices'))
