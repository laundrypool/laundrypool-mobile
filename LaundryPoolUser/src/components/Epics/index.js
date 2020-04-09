import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ColorPallete, fonts} from '../../Utils/StylingInfo';
import CustomIcon from '../../Utils/CustomIcon';
import Dashboard from './Dashboard';
import Booking from './Booking';
import MyAccount from './MyAccounts';

const MaterialBottomTabs = createMaterialBottomTabNavigator();

const Epics = () => {
  return (
    <>
      <MaterialBottomTabs.Navigator
        activeColor={ColorPallete.colors.primary}
        barStyle={{backgroundColor: ColorPallete.colors.white}}>


        <MaterialBottomTabs.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: null,
            headerShown: false,
            tabBarIcon: ({color}) => (
              <CustomIcon color={color} size={25} name={'home'} />
            ),
          }}
        />


        <MaterialBottomTabs.Screen
          name="Booking"
          component={Booking}
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
          name="MyAccount"
          component={MyAccount}
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
    </>
  );
};

export default Epics;
