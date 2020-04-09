import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../commonStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ColorPallete} from '../../../Utils/StylingInfo';
import Notification from '../../Epics/Notification';
import {TouchableOpacity} from 'react-native-gesture-handler';
const CustomHeader = props => {
  return (
    <View style={globalStyles.headerBackground}>
      <View style={globalStyles.headerIcon}>
        <TouchableOpacity onPress={() => props.navigation.push('Feed')}>
          <Icon
            style={{textAlign: 'center'}}
            color={ColorPallete.colors.primary}
            size={35}
            name={'arrow-back'}
          />
        </TouchableOpacity>
      </View>

      <Text style={globalStyles.headerText}>{props.title}</Text>
      {props.viewNotification && <Notification {...props} />}
    </View>
  );
};

export default CustomHeader;
