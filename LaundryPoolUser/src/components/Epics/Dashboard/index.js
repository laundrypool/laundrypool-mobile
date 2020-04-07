import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {ColorPallete, fonts} from '../../../Utils/StylingInfo';

import {styles} from './style';
import Hamburger from './header';
import Notification from '../Notification';
import {color} from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

function Feed({navigation}) {
  return (
    <View
      style={{
        width: '100%',
        position: 'relative',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: ColorPallete.colors.disabled,
      }}>
      <View
        style={{
          zIndex: 3,
          position: 'relative',
          flex: 1.5,
        }}>
        <Image
          style={{
            position: 'absolute',
            bottom: 0,
            top: 0,
            height: 200,
            resizeMode: 'stretch',
          }}
          source={require('../../../assets/app/Union.png')}
        />
        <Image
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            height: 100,
            width: 100,
            resizeMode: 'contain',
          }}
          source={require('../../../assets/app/Ellipse.png')}
        />

        {/* Small Circle */}
        <View
          style={{
            height: 40,
            width: 40,
            position: 'absolute',
            bottom: 100,
            right: 80,
            backgroundColor: 'rgba(255, 255, 255, 0.19)',
            borderRadius: 50 / 2,
          }}
        />
        {/* Name Locatioon */}
        <View
          style={{
            position: 'absolute',
            bottom: 100,
            marginLeft: 100,
          }}>
          <Text
            style={{
              color: ColorPallete.colors.white,
              fontSize: 17,
              fontFamily: fonts.seogeUI,
            }}>
            Abhishek Das
          </Text>

          <View style={{flex: 1, flexDirection: 'row', marginTop: 5}}>
            <Icon
              name={'crosshairs-gps'}
              size={25}
              color={ColorPallete.colors.white}
            />
            <Text
              style={{
                color: ColorPallete.colors.white,
                fontSize: 17,
                fontFamily: fonts.seogeUISemiBold,
                marginLeft: 5,
              }}>
              Bangalore
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: ColorPallete.colors.disabled,
          flex: 3,
          zIndex: 3,
        }}>
        <Text>Choose your type of Services</Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          position: 'absolute',
          marginTop: 20,
          zIndex: 5,
        }}>
        <Hamburger navigation={navigation} />
        <Notification />
      </View>
    </View>
  );
}

const Dashboard = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" component={Feed} />
    </Drawer.Navigator>
  );
};

export default Dashboard;
