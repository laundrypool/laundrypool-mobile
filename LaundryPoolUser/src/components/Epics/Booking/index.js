import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NotificationPage from '../Notification/NotificationPage';
import CustomHeader from '../../commonComponents/CustomHeader';
import BookingComponent from './MainScreen/Booking';
import BasketFooter from './BasketFooter';
import DateTime from './DateTime/DateTime';
import AllOrders from './AllOrders';

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
          <BasketFooter
            contents="1"
            navigateTo="DateTime_BookingComponent"
            {...props}>
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

      <Stack.Screen
        name="DateTime_BookingComponent"
        options={{
          headerShown: true,
          header: ({scene, previous, navigation}) => {
            return (
              <CustomHeader
                {...props}
                title="Select Date & Time"
                viewNotification={true}
                backTo="BookingComponent"
                backPage="Notification_BookingComponent"
              />
            );
          },
        }}>
        {props => (
          <BasketFooter
            contents="2"
            navigateTo="DateTime_BookingComponent"
            {...props}>
            <DateTime {...props} />
          </BasketFooter>
        )}
      </Stack.Screen>

      <Stack.Screen
        name="AllOrders_BookingComponent"
        options={{
          headerShown: true,
          header: ({scene, previous, navigation}) => {
            return (
              <CustomHeader
                {...props}
                navigation={navigation}
                title="Orders"
                viewNotification={true}
                backPage="Notification_BookingComponent"
                backTo={scene.router ? scene.router.name : 'BookingComponent'}
              />
            );
          },
        }}>
        {props => <AllOrders {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Booking;
