import React from 'react';
import {View, TextInput} from 'react-native';

const CommonInput = () => {
  return (
    <View>
      <TextInput
        placeholder="Mobile Number"
        style={[styles.inputBody]}
        placeholderTextColor={ColorPallete.colors.disabled}
      />
    </View>
  );
};

export default CommonInput;
