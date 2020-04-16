import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {ColorPallete} from '../../../Utils/StylingInfo';
import {TouchableOpacity} from 'react-native-gesture-handler';
const BasketFooter = props => {
  return (
    <View style={styles.bookingContainerParent}>
      <View style={styles.childrenContainer}>{props.children}</View>
      <View style={styles.basketContainer}>
        <View style={styles.basketText}>
          <Text style={[styles.basketTextStyle]}>Your basket</Text>
        </View>
        <TouchableOpacity
          style={styles.basketAmount}
          onPress={() => props.navigation.navigate(props.navigateTo)}>
          <Text style={[styles.basketTextStyle]}>₹ 0.00</Text>
          <AntDesignIcon
            name={'right'}
            size={22}
            color={ColorPallete.colors.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasketFooter;
