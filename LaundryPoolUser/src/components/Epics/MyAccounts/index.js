import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CustomHeader from '../../commonComponents/CustomHeader';
import AccountOverview from './AccountOverview';
import NotificationPage from '../Notification/NotificationPage';

const Stack = createStackNavigator();

const MyAccount = props => {
  return (
    <Stack.Navigator  initialRouteName="AccountDetails">
      <Stack.Screen
        name="AccountDetails"
        options={{
          headerShown: true,
          header: ({scene, previous, navigation}) => {
            return (
              <CustomHeader
                {...props}
                title="Account"
                viewNotification={true}
                backTo = "Feed"
                backPage="Notification_AccountDetails"
              />
            );
          },
        }}>
        {props => <AccountOverview {...props} />}
      </Stack.Screen>

      <Stack.Screen
        name="Notification_AccountDetails"
        options={{
          headerShown: true,
          header: ({scene, previous, navigation}) => {
            return (
              <CustomHeader
                {...props}
                title="Notifications"
                viewNotification={false}
                backTo = "AccountDetails"
              />
            );
          },
        }}>
        {props => <NotificationPage {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
export default MyAccount;
