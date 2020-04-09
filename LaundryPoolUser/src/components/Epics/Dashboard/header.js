import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './style';
import {ColorPallete} from '../../../Utils/StylingInfo';

const Header = ({navigation}) => {
  return <HamburgerMenu navigation={navigation} />;
};

function HamburgerMenu({navigation}) {
  return (
    <TouchableOpacity style={styles.hamburgerMenuPosition}>
      <Icon
        color={ColorPallete.colors.white}
        size={35}
        name={'menu'}
        onPress={() => navigation.toggleDrawer()}
      />
    </TouchableOpacity>
  );
}

export default Header;
