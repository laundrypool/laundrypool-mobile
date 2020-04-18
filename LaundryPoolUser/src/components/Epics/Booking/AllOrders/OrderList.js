import React from 'react';
import {Text, View} from 'react-native';
import OrderStatusCardComponent from '../../../commonComponents/OrderStatusCardComponent';
import {ScrollView} from 'react-native-gesture-handler';

const OrderList = props => {
  return (
    <ScrollView style={{marginTop: 20}}>
      {props.orders.map((value, index) => {
        return (
          <View key={'Orders' + index}>
            <OrderStatusCardComponent
              orderId={value.orderNo}
              status={props.active ? 'View Status' : 'Completed'}
              fontSize="in14"
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default OrderList;
