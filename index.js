import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './src/Routes';
import './src/config/ReactotronConfig'

import {Provider} from 'react-redux';
import Store from './src/Store'

function App(){
  return(
    <>
      <StatusBar backgroundColor="#292929" barStyle="light-content"/>
      <Provider store ={Store}>
        <Routes/>
     </Provider>
    </>
  )
}

AppRegistry.registerComponent(appName, () => App);