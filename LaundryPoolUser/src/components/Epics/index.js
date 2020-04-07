import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {ColorPallete, fonts} from '../../Utils/StylingInfo';
import CustomIcon from '../../Utils/CustomIcon';
import Dashboard from './Dashboard';

const MaterialBottomTabs = createMaterialBottomTabNavigator();

const Epics = () => {
  return (
    <NavigationContainer>
      <MaterialBottomTabs.Navigator
        activeColor={ColorPallete.colors.primary}
        barStyle={{backgroundColor: ColorPallete.colors.white}}
        >
        <MaterialBottomTabs.Screen
          name="Tab 1"
          component={Dashboard}
          options={{
            tabBarLabel: null,
            tabBarIcon: ({color}) => (
              <CustomIcon
                color={color}
                size={25}
                name={'home'}
              />
            ),
          }}
        />
        <MaterialBottomTabs.Screen
          name="Tab 2"
          component={Dashboard}
          options={{
            tabBarLabel: null,
            tabBarIcon: ({color}) => (
              <CustomIcon
                // style={[{color: ColorPallete.colors.inputBorder}]}
                color={color}
                size={25}
                name={'box'}
              />
            ),
          }}
        />
        <MaterialBottomTabs.Screen
          name="Tab 3"
          component={Dashboard}
          options={{
            tabBarLabel: null,
            tabBarIcon: ({color}) => (
              <Icon
                // style={[{color: ColorPallete.colors.inputBorder}]}
                color={color}
                size={26}
                name={'account-outline'}
              />
            ),
          }}
        />
      </MaterialBottomTabs.Navigator>
    </NavigationContainer>
  );
};

export default Epics;
