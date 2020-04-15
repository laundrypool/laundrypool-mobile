import React, {useState, useEffect} from 'react';
import {Text, View, Alert, Image} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {styles} from './style';
import CounterInput from './CounterInput';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ColorPallete, fonts, fontSize} from '../../../Utils/StylingInfo';
import ServiceType from './ServiceType';
import CustomIcon from '../../../Utils/CustomIcon';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const CustomTabs = ({bucketList}) => {
  const getPathName = (bool, index) => {
    switch (index) {
      case 0:
        return !bool
          ? require('../../../assets/app/shirt.png')
          : require('../../../assets/app/PillowCovers.png');
        break;
      case 1:
        return !bool
          ? require('../../../assets/app/Tshirt.png')
          : require('../../../assets/app/Curtains.png');
        break;
      case 2:
        return !bool
          ? require('../../../assets/app/Trousers.png')
          : require('../../../assets/app/Aprons.png');
        break;
      case 3:
        return !bool
          ? require('../../../assets/app/shorts.png')
          : require('../../../assets/app/BedSheets.png');
        break;
    }
  };

  const addCounter = e => {
    console.log(e);
  };
  const decCounter = e => {
    console.log(e);
  };

  return (
    <View>
      {bucketList.lists.map((data, index) => {
        let path = getPathName(bucketList.index == 4, index);
        return (
          <View
            style={{
              backgroundColor: ColorPallete.colors.white,
              paddingHorizontal: 20,
              paddingVertical: 15,
              marginTop: 2,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
            onPress={e => console.log(e)}>
            {/* <CustomIcon name={'man'} size={30} style={{textAlign: 'center'}} /> */}
            <View style={styles.iconsitems}>
              <Image source={path} style={{width: 40, height: 40}} />
            </View>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  justifyContent: 'center',
                  fontSize: fontSize.in14,
                  color: ColorPallete.colors.inputBorder,
                  fontFamily: fonts.seogeUISemiBold,
                }}>
                {data}
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'center',
              }}>
              <CounterInput
                bucketList={bucketList}
                addCounter={e => addCounter(e)}
                decCounter={e => decCounter(e)}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default CustomTabs;
