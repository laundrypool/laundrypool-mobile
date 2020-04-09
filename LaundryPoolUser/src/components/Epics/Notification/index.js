import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './style';
import {ColorPallete, fonts} from '../../../Utils/StylingInfo';
const Notification = ({navigation, color = 'primary'}) => {
  const onPress = () => {
    navigation.push('Notification', {});
  };
  return (
    <TouchableOpacity style={styles.BellPosition} onPress={() => onPress()}>
      <View
        style={{
          position: 'relative',
        }}>
        <View style={{position: 'absolute'}}>
          <View
            style={{
              height: 14,
              width: 14,
              backgroundColor: ColorPallete.colors.red,
              borderRadius: 100,
              right: -18,
              top: -10,
            }}
          />
          <View style={{position: 'absolute'}}>
            <Text
              style={{
                fontSize: 10,
                color: ColorPallete.colors.white,
                right: -22,
                top: -11.2,
                fontFamily: fonts.seogeUISemiBold,
              }}>
              9
            </Text>
          </View>
        </View>
        <Icon
          color={ColorPallete.colors[color]}
          size={30}
          name={'bell-outline'}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Notification;
