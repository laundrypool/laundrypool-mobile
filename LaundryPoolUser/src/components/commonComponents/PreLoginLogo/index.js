import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {globalStyles} from '../commonStyles';
export default class PreLoginLogo extends Component {
  render() {
    return (
      <View style={globalStyles.logoContainer}>
        <Image
          style={globalStyles.mainLogo}
          source={require('../../../assets/app/logo.png')}
        />
      </View>
    );
  }
}
