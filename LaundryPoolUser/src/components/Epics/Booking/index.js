import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NotificationPage from '../Notification/NotificationPage';
import CustomHeader from '../../commonComponents/CustomHeader';
import BookingComponent from './Booking';
import BasketFooter from './BasketFooter';

const Stack = createStackNavigator();

const Booking = props => {
  const [selectedService, setSelectedService] = useState({
    washing: false,
    dryCleaning: false,
    ironing: false,
  });

  const serviceTypesTemp =
    props.route.params && props.route.params.serviceTypes;

  useEffect(() => {
    serviceTypesTemp && setSelectedService(serviceTypesTemp);
  }, [serviceTypesTemp]);

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
          <BasketFooter>
            <BookingComponent {...props} selectedBooking={selectedService} />
          </BasketFooter>
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
