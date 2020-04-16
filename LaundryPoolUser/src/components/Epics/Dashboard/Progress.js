import React from 'react';
import {View} from 'react-native';
import {ColorPallete} from '../../../Utils/StylingInfo';
const Progress = props => {
  return (
    <View
      style={{
        position: 'relative',
        width: props.big ? props.big : 60,
        height: props.big ? props.big : 60,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          borderWidth: 3,
          padding: 15,
          borderRadius: 100,
          borderColor: ColorPallete.colors.disabled,
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
        {props.children}
      </View>
      <View
        style={{
          borderWidth: 3,
          padding: 15,
          borderRadius: 100,
          borderTopColor: ColorPallete.colors.primary,
          borderLeftColor: ColorPallete.colors.primary,
          borderBottomColor: 'transparent',
          borderRightColor: 'transparent',
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
      />
    </View>
  );
};

export default Progress;
