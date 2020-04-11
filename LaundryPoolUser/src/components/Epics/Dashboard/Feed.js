import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {ColorPallete} from '../../../Utils/StylingInfo';
import {styles} from './style';
import Hamburger from './header';
import Notification from '../Notification';
import UserNameLocation from './UserNameLocation';
import ServiceList from './ServiceList';
import ActiveOrders from './ActiveOrders';

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

const FeedView = props => {
  return (
    <View
      style={{
        width: '100%',
        position: 'relative',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: ColorPallete.backgroundColors.main,
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
        <View style={styles.smallCircle} />
        <UserNameLocation />
      </View>

      <View
        style={{
          backgroundColor: ColorPallete.backgroundColors.main,
          flex: 3,
          zIndex: 3,
        }}>
        <ScrollView>
          <View
            style={{
              width: 280,
              alignSelf: 'center',
              position: 'relative',
              flex: 1,
            }}>
            <ServiceList {...props} />
            <ActiveOrders />
          </View>
        </ScrollView>
      </View>
      <View style={styles.dashboardHeaderContainer}>
        <Hamburger navigation={props.navigation} />
        <Notification {...props} backPage="Notification_Feed" color="white" />
      </View>
    </View>
  );
};

const Feed = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Feed"
        component={FeedView}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default Feed;
