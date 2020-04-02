import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/components/Home';
import LoginRegister from './src/components/LoginRegister';
import Epics from './src/components/Epics';

// gradlew assembleRelease -x bundleReleaseJsAndAssets  

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  LoginRegister: {
    screen: LoginRegister,
    navigationOptions: {
      headerShown: false,
    },
  },
  Epics: {
    screen: Epics,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const AppContainer = createAppContainer(AppNavigator);

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#DBDBDB" />
      <AppContainer />
    </>
  );
};

export default App;
