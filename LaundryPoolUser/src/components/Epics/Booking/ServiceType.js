import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './style';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {ColorPallete, fonts, fontSize} from '../../../Utils/StylingInfo';
import CustomIcon from '../../../Utils/CustomIcon';
const ServiceType = props => {
  const [serviceType, setServiceType] = useState({
    washing: false,
    dryCleaning: false,
    ironing: false,
  });

  useEffect(() => {
    setServiceType(props.selectedService);
  }, [
    props.selectedService.washing,
    props.selectedService.dryCleaning,
    props.selectedService.ironing,
  ]);

  return (
    <View style={styles.serviceTypeContainer}>
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

      <View style={styles.cardCheckboxContainer}>
        <View>
          {serviceType.washing && (
            <AntDesignIcon
              name={'checkcircle'}
              style={styles.tickIcon}
              color={ColorPallete.colors.primary}
              size={20}
            />
          )}
          <TouchableOpacity
            onPress={() => {
              // setServiceType({...serviceType, washing: !serviceType.washing});
              props.setServiceType({
                ...serviceType,
                washing: !serviceType.washing,
              });
            }}
            style={
              serviceType.washing
                ? [
                    styles.cardPcs,
                    {borderColor: ColorPallete.colors.primary, borderWidth: 2},
                  ]
                : styles.cardPcs
            }>
            <CustomIcon
              style={styles.cardIcons}
              size={60}
              color={ColorPallete.colors.primary}
              name={'washing-machine'}
            />
            <Text style={styles.cardText}>Washing</Text>
          </TouchableOpacity>
        </View>

        <View>
          {serviceType.dryCleaning && (
            <AntDesignIcon
              name={'checkcircle'}
              style={styles.tickIcon}
              color={ColorPallete.colors.primary}
              size={20}
            />
          )}
          <TouchableOpacity
            onPress={() => {
              // setServiceType({...serviceType,dryCleaning: !serviceType.dryCleaning,});
              props.setServiceType({
                ...serviceType,
                dryCleaning: !serviceType.dryCleaning,
              });
            }}
            style={
              serviceType.dryCleaning
                ? [
                    styles.cardPcs,
                    {borderColor: ColorPallete.colors.primary, borderWidth: 2},
                  ]
                : styles.cardPcs
            }>
            <CustomIcon
              style={styles.cardIcons}
              size={60}
              color={ColorPallete.colors.primary}
              name={'dry-cleaning'}
            />
            <Text style={styles.cardText}>Dry Cleaning</Text>
          </TouchableOpacity>
        </View>

        <View>
          {serviceType.ironing && (
            <AntDesignIcon
              name={'checkcircle'}
              style={styles.tickIcon}
              color={ColorPallete.colors.primary}
              size={20}
            />
          )}
          <TouchableOpacity
            onPress={() => {
              // setServiceType({...serviceType, ironing: !serviceType.ironing});
              props.setServiceType({
                ...serviceType,
                ironing: !serviceType.ironing,
              });
            }}
            style={
              serviceType.ironing
                ? [
                    styles.cardPcs,
                    {borderColor: ColorPallete.colors.primary, borderWidth: 2},
                  ]
                : styles.cardPcs
            }>
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
    </View>
  );
};

export default ServiceType;
