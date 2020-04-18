import React from 'react';
import {Text, View} from 'react-native';
import {ColorPallete, fontSize, fonts} from '../../../Utils/StylingInfo';
import {styles} from './style';
import OrderStatusCardComponent from '../../commonComponents/OrderStatusCardComponent';
import {TouchableHighlight} from 'react-native-gesture-handler';

const ActiveOrders = props => {
  return (
    <View style={{flex: 1, marginTop: 20}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              fontSize: fontSize.in16,
              fontFamily: fonts.seogeUISemiBold,
              color: ColorPallete.colors.textColor,
            }}>
            Active Orders
          </Text>
        </View>
        <TouchableHighlight
          style={[styles.smallPrimaryBtn, {borderColor: 'red'}]}
          activeOpacity={0.6}
          underlayColor={ColorPallete.colors.primary}
          onPress={() =>
            props.navigation.navigate('Booking', {
              screen: 'AllOrders_BookingComponent',
            })
          }>
          <Text
            style={{
              fontSize: fontSize.in15,
              fontFamily: fonts.seogeUISemiBold,
              color: ColorPallete.colors.white,
            }}>
            View All
          </Text>
        </TouchableHighlight>
      </View>

      <View style={{marginTop: 15}}>
        <OrderStatusCardComponent
          orderId="#958546"
          status="View Status"
          fontSize="in14"
        />
        <OrderStatusCardComponent
          orderId="#238546"
          status="View Status"
          fontSize="in14"
        />
        <OrderStatusCardComponent
          orderId="#947946"
          status="View Status"
          fontSize="in14"
        />
      </View>
    </View>
  );
};

export default ActiveOrders;
