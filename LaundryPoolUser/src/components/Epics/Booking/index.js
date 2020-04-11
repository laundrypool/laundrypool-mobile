import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NotificationPage from '../Notification/NotificationPage';
import CustomHeader from '../../commonComponents/CustomHeader';
import BookingComponent from './Booking';

const Stack = createStackNavigator();

const Booking = props => {
  const [selectedService, setSelectedService] = useState({
    washing: false,
    dryCleaning: false,
    ironing: false,
  });

  useEffect(() => {
    setSelectedService(props.route.params.serviceTypes);
  }, [props.route.params.serviceTypes]);

  return (
    <Stack.Navigator initialRouteName="BookingComponent">
      <Stack.Screen
        name="BookingComponent"
        options={{
          headerShown: true,
          header: ({scene, previous, navigation}) => {
            return (
              <CustomHeader
                {...props}
                title="Select Clothes"
                viewNotification={true}
                backTo="Feed"
                backPage="Notification_BookingComponent"
              />
            );
          },
        }}>
        {props => (
          <BookingComponent {...props} selectedBooking={selectedService} />
        )}
      </Stack.Screen>

      <Stack.Screen
        name="Notification_BookingComponent"
        options={{
          headerShown: true,
          header: ({scene, previous, navigation}) => {
            return (
              <CustomHeader
                {...props}
                title="Notifications"
                viewNotification={false}
                backTo="BookingComponent"
              />
            );
          },
        }}>
        {props => <NotificationPage {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Booking;
