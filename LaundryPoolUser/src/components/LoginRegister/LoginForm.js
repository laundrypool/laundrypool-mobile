import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './styles';
import {globalStyles} from '../commonComponents/commonStyles';
import CustomButton from '../commonComponents/CustomButton';

const LoginForm = props => {
  return (
    <View>
      <View>
        <TextInput
          placeholder="Mobile Number"
          style={[styles.inputBody, globalStyles.mT10]}
          keyboardType={'numeric'}
        />
      </View>
      <View>
        <TextInput
          placeholder="Password"
          style={[styles.inputBody, globalStyles.mT20]}
        />
      </View>
      <CustomButton
        title="Login"
        btnWidth="80"
        onPress={() => props.handleSubmit()}
      />
    </View>
  );
};

export default LoginForm;
