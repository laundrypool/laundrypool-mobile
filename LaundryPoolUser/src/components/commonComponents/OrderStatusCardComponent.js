import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from './commonStyles';
import Progress from '../Epics/Dashboard/Progress';
import CustomIcon from '../../Utils/CustomIcon';
import { ColorPallete, fontSize, fonts } from '../../Utils/StylingInfo';
const OrderStatusCardComponent = (props) => {
  return (
    <View style={globalStyles.orderBox}>
      <View style={{flex: 1.5, alignItems: 'center'}}>
        <Progress>
          <CustomIcon
            name={'box'}
            size={30}
            color={ColorPallete.colors.primary}
          />
        </Progress>
      </View>
      <View style={{flex: 3}}>
        <Text
          style={{
            fontSize: fontSize.in18,
            fontFamily: fonts.seogeUISemiBold,
            color: ColorPallete.colors.textColor,
          }}>
          Order No: {props.orderId}
        </Text>
        <Text
          style={{
            fontSize: fontSize[props.fontSize],
            fontFamily: fonts.seogeUISemiBold,
            color: ColorPallete.colors.primary,
          }}>
            {props.status}
        </Text>
      </View>
    </View>
  );
};

export default OrderStatusCardComponent;
