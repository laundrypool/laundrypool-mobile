import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Feed from './Feed';
import NotificationPage from '../Notification/NotificationPage';
import CustomHeader from '../../commonComponents/CustomHeader';
const Stack = createStackNavigator();
const Dashboard = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        options={{
          headerShown: false,
        }}>
        {props => <Feed {...props} />}
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
                backTo = "Feed"
              />
            );
          },
        }}>
        {props => <NotificationPage {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Dashboard;
