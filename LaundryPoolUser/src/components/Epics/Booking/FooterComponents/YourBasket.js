import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../style';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {ColorPallete} from '../../../../Utils/StylingInfo';
const YourBasket = () => {
  return (
    <>
      <View style={styles.basketText}>
        <Text style={[styles.basketTextStyle]}>Your basket</Text>
      </View>
      <View style={styles.basketAmount}>
        <Text style={[styles.basketTextStyle]}>₹ 0.00</Text>
        <AntDesignIcon
          name={'right'}
          size={22}
          color={ColorPallete.colors.white}
        />
      </View>
    </>
  );
};

export default YourBasket;
