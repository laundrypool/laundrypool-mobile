import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {globalStyles} from '../commonStyles';
export default class CustomButton extends Component {
  render() {
    const {
      marginTop = 'mT40',
      onPress,
      title = '',
      primary = true,
      btnWidth = '100',
    } = this.props;
    return (
      <View
        style={[
          globalStyles[marginTop],
          {width: `${btnWidth}%`, alignSelf: 'center'},
        ]}>
        <TouchableOpacity onPress={onPress ? onPress : null}>
          <View
            style={primary ? globalStyles.primaryBtn : globalStyles.blankBtn}>
            <Text
              style={
                primary
                  ? globalStyles.primaryBtnText
                  : globalStyles.blankBtnText
              }>
              {title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
