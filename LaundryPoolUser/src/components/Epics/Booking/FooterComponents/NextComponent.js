import React from 'react';
import {Text, View} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {ColorPallete} from '../../../../Utils/StylingInfo';
import {styles} from '../style';
const NextComponent = () => {
  return (
    <View style={[styles.basketText,{justifyContent: 'center'}]}>
      <Text style={[styles.basketTextStyle]}>NEXT</Text>
      <AntDesignIcon
          name={'right'}
          size={22}
          style={{top: 3, marginLeft: 10 }}
          color={ColorPallete.colors.white}
        />
    </View>
  );
};

export default NextComponent;
