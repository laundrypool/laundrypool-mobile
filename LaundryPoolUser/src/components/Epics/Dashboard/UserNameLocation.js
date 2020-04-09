import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ColorPallete, fonts} from '../../../Utils/StylingInfo';
const UserNameLocation = () => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 100,
        marginLeft: 100,
      }}>
      <Text
        style={{
          color: ColorPallete.colors.white,
          fontSize: 17,
          fontFamily: fonts.seogeUI,
        }}>
        Abhishek Das
      </Text>

      <View style={{flex: 1, flexDirection: 'row', marginTop: 5}}>
        <Icon name={'map-marker-alt'} size={20} color={ColorPallete.colors.white} />
        <Text
          style={{
            color: ColorPallete.colors.white,
            fontSize: 17,
            fontFamily: fonts.seogeUISemiBold,
            marginLeft: 5,
          }}>
          Bangalore
        </Text>
      </View>
    </View>
  );
};

export default UserNameLocation;
