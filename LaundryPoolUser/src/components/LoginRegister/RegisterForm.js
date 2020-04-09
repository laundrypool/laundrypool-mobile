import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './styles';
import {globalStyles} from '../commonComponents/commonStyles';
import CustomButton from '../commonComponents/CustomButton';

const RegisterForm = props => {
  return (
    <View>
      <View>
        <TextInput
          placeholder="Mobile Number"
          keyboardType={'numeric'}
          style={[styles.inputBody, globalStyles.mT10]}
        />
      </View>
      <View>
        <TextInput
          placeholder="Password"
          style={[styles.inputBody, globalStyles.mT20]}
        />
      </View>
      <View>
        <TextInput
          placeholder="Re-type Password"
          style={[styles.inputBody, globalStyles.mT20]}
        />
      </View>
      <CustomButton
        onPress={() => props.handleSubmit()}
        title="Register"
        btnWidth="80"
      />
    </View>
  );
};

export default RegisterForm;
