import React from 'react';
import {View, Text,Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ColorPallete, fonts} from '../../Utils/StylingInfo';

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: fonts.seogeUISemiBold
      }}>
      <Text style={{fontSize: 21}}>Coming Soon !</Text>
    </View>
  );
}

const MaterialBottomTabs = createMaterialBottomTabNavigator();

const Epics = () => {
  return (
    <NavigationContainer>
      <MaterialBottomTabs.Navigator
        // activeColor={ColorPallete.colors.primary}
        // barStyle={{backgroundColor: 'red'}}
        >
        <MaterialBottomTabs.Screen
          name="Tab 1"
          component={HomeScreen}
          options={{
            tabBarLabel: null,
            tabBarIcon: ({color}) => (
              <Icon
                color={color}
                size={28}
                name={'home'}
              />
            ),
          }}
        />
        <MaterialBottomTabs.Screen
          name="Tab 2"
          component={HomeScreen}
          options={{
            tabBarLabel: null,
            tabBarIcon: ({color}) => (
              <Icon
                // style={[{color: ColorPallete.colors.inputBorder}]}
                color={color}
                size={28}
                name={'local-car-wash'}
              />
            ),
          }}
        />
        <MaterialBottomTabs.Screen
          name="Tab 3"
          component={HomeScreen}
          options={{
            tabBarLabel: null,
            tabBarIcon: ({color}) => (
              <Icon
                // style={[{color: ColorPallete.colors.inputBorder}]}
                color={color}
                size={28}
                name={'account-box'}
              />
            ),
          }}
        />
      </MaterialBottomTabs.Navigator>
    </NavigationContainer>
  );
};

export default Epics;
