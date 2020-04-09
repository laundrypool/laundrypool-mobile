import React from 'react';
import {StatusBar} from 'react-native';
import Home from './src/components/Home';
import LoginRegister from './src/components/LoginRegister';
import Epics from './src/components/Epics';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { ColorPallete } from './src/Utils/StylingInfo';

// gradlew assembleRelease -x bundleReleaseJsAndAssets

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={ColorPallete.backgroundColors.main} />
      {/* <AppContainer /> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}>
          {props => <Home {...props} />}
        </Stack.Screen>

        <Stack.Screen
          name="LoginRegister"
          options={{
            headerShown: false,
          }}>
          {props => <LoginRegister {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Epics" options={{headerShown: false}}>
          {props => <Epics {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;