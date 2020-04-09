import React from 'react';
import {Text, View} from 'react-native';
import {ColorPallete, fontSize, fonts} from '../../../Utils/StylingInfo';
import {styles} from './style';
import CustomIcon from '../../../Utils/CustomIcon';

const ServiceList = () => {
  return (
    <View style={{flex: 1, marginTop: -5}}>
      <View>
        <Text
          style={{
            fontSize: fontSize.in16,
            fontFamily: fonts.seogeUISemiBold,
            color: ColorPallete.colors.textColor,
          }}>
          Choose your type of Services
        </Text>
      </View>

      <View style={styles.cards}>
        <View style={styles.cardPcs}>
          <CustomIcon
            style={styles.cardIcons}
            size={60}
            color={ColorPallete.colors.primary}
            name={'washing-machine'}
          />
          <Text style={styles.cardText}>Washing</Text>
        </View>
        <View style={styles.cardPcs}>
          <CustomIcon
            style={styles.cardIcons}
            size={60}
            color={ColorPallete.colors.primary}
            name={'dry-cleaning'}
          />
          <Text style={styles.cardText}>Dry Cleaning</Text>
        </View>
        <View style={styles.cardPcs}>
          <CustomIcon
            style={styles.cardIcons}
            size={60}
            color={ColorPallete.colors.primary}
            name={'iron'}
          />
          <Text style={styles.cardText}>Ironing</Text>
        </View>
      </View>
    </View>
  );
};

export default ServiceList;
