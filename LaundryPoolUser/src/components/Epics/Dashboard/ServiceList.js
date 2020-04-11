import React, {useState} from 'react';
import {Text, View, TouchableHighlightBase} from 'react-native';
import {ColorPallete, fontSize, fonts} from '../../../Utils/StylingInfo';
import {styles} from './style';
import CustomIcon from '../../../Utils/CustomIcon';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const ServiceList = props => {
  const [serviceType, setServiceType] = useState({
    washing: false,
    dryCleaning: false,
    ironing: false,
  });

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
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('Booking', {
              serviceTypes: {...serviceType, washing: true},
            })
          }
          style={styles.cardPcs}>
          <>
            <CustomIcon
              style={styles.cardIcons}
              size={60}
              color={ColorPallete.colors.primary}
              name={'washing-machine'}
            />
            <Text style={styles.cardText}>Washing</Text>
          </>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('Booking', {
              serviceTypes: {...serviceType, dryCleaning: true},
            })
          }
          style={styles.cardPcs}>
          <CustomIcon
            style={styles.cardIcons}
            size={60}
            color={ColorPallete.colors.primary}
            name={'dry-cleaning'}
          />
          <Text style={styles.cardText}>Dry Cleaning</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate('Booking', {
              serviceTypes: {...serviceType, ironing: true},
            })
          }
          style={styles.cardPcs}>
          <CustomIcon
            style={styles.cardIcons}
            size={60}
            color={ColorPallete.colors.primary}
            name={'iron'}
          />
          <Text style={styles.cardText}>Ironing</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ServiceList;
