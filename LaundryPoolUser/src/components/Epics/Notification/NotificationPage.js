import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';
import {ScrollView} from 'react-native-gesture-handler';
import OrderStatusCardComponent from '../../commonComponents/OrderStatusCardComponent';
const NotificationPage = () => {
  return (
    <ScrollView>
      <View style={styles.notificationContainer}>
        {/* <OrderStatusCardComponent orderId="#958546" status="Order Confirmed" fontSize="in16"/>
        <OrderStatusCardComponent orderId="#958546" status="On the way" fontSize="in16"/>
        <OrderStatusCardComponent orderId="#958546" status="Picking up" fontSize="in16"/> */}
      </View>
    </ScrollView>
  );
};

export default NotificationPage;
