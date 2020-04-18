import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {ColorPallete} from '../../../Utils/StylingInfo';
import {
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import YourBasket from './FooterComponents/YourBasket';
import NextComponent from './FooterComponents/NextComponent';
const BasketFooter = props => {
  return (
    <View style={styles.bookingContainerParent}>
      <View style={styles.childrenContainer}>{props.children}</View>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor={ColorPallete.colors.primary}
        onPress={() => props.navigation.navigate(props.navigateTo)}
        style={{
          backgroundColor: ColorPallete.colors.primary,
        }}>
        <View style={styles.basketContainer}>
          {props.contents === '1' ? <YourBasket /> : <NextComponent />}
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default BasketFooter;
