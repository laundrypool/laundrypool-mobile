import React from 'react';
import {Text, View} from 'react-native';
import Notification from '../Notification';
import {createStackNavigator} from '@react-navigation/stack';
import NotificationPage from '../Notification/NotificationPage';
import CustomHeader from '../../commonComponents/CustomHeader';

const Stack = createStackNavigator();

const BookingComponent = props => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Text>Booking - Coming Soon</Text>
      <Notification {...props} />
    </View>
  );
};

const Booking = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BookingComponent"
        options={{
          headerShown: true,
        }}>
        {props => <BookingComponent {...props} />}
      </Stack.Screen>

      <Stack.Screen
        name="Notification"
        options={{
          headerShown: true,
          header: ({scene, previous, navigation}) => {
            return (
              <CustomHeader
                {...props}
                title="Notifications"
                viewNotification={true}
              />
            );
          },
        }}
        >
        {props => <NotificationPage {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Booking;
