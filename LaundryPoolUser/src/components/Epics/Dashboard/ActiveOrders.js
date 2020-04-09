import React from 'react';
import {Text, View} from 'react-native';
import {ColorPallete, fontSize, fonts} from '../../../Utils/StylingInfo';
import {styles} from './style';
import Progress from './Progress';
import CustomIcon from '../../../Utils/CustomIcon';
import {globalStyles} from '../../commonComponents/commonStyles';
import OrderStatusCardComponent from '../../commonComponents/OrderStatusCardComponent';

const ActiveOrders = () => {
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
        <View style={styles.smallPrimaryBtn}>
          <Text
            style={{
              fontSize: fontSize.in15,
              fontFamily: fonts.seogeUISemiBold,
              color: ColorPallete.colors.white,
            }}>
            View All
          </Text>
        </View>
      </View>

      <View style={{marginTop: 15}}>
        <OrderStatusCardComponent orderId="#958546" status="View Status" fontSize="in14" />
        <OrderStatusCardComponent orderId="#238546" status="View Status" fontSize="in14" />
        <OrderStatusCardComponent orderId="#947946" status="View Status" fontSize="in14" />
      </View>
    </View>
  );
};

export default ActiveOrders;
