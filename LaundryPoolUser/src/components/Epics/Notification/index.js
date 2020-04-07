import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './style';
import { ColorPallete } from '../../../Utils/StylingInfo';
const Notification = () => {
  return (
    <TouchableOpacity style={styles.BellPosition}>
      <View>
        <Icon color={ColorPallete.colors.white}
        size={30}
        name={'bell-outline'} />
      </View>
    </TouchableOpacity>
  );
};

export default Notification;
