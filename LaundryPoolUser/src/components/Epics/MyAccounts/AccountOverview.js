import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {ColorPallete} from '../../../Utils/StylingInfo';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import SimpleLineIconsIcon from 'react-native-vector-icons/SimpleLineIcons';

import CustomIcon from '../../../Utils/CustomIcon';

const AccountOverview = () => {
  return (
    <View style={styles.accountOverViewWrapper}>
      <View style={styles.userProfileContainer}>
        <Image
          style={styles.userIcon}
          source={require('../../../assets/app/person.png')}
        />
        <View style={styles.userNameLocation}>
          <Text style={styles.userName}>Abhishek Das</Text>
          <View style={{flexDirection: 'row', marginTop: 2}}>
            <Icon
              name={'map-marker-alt'}
              size={25}
              color={ColorPallete.colors.primary}
            />
            <Text style={styles.locationName}>Bangalore</Text>
          </View>
        </View>
      </View>

      <View style={styles.userProfileMenuContainer}>
        <View style={styles.menuWrapper}>
          <View style={styles.singleMenu}>
            <TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                <CustomIcon
                  name={'box'}
                  size={25}
                  color={ColorPallete.colors.primary}
                />
                <Text style={styles.menuText}>My Orders</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.singleMenu}>
            <TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                <EntypoIcon
                  name={'address'}
                  size={25}
                  color={ColorPallete.colors.primary}
                />
                <Text style={styles.menuText}>My address</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.singleMenu}>
            <TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                <AntDesignIcon
                  name={'warning'}
                  size={25}
                  color={ColorPallete.colors.primary}
                />
                <Text style={styles.menuText}>Terms & Conditions</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.singleMenu}>
            <TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                <SimpleLineIconsIcon
                  name={'logout'}
                  size={25}
                  color={ColorPallete.colors.primary}
                />
                <Text style={styles.menuText}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AccountOverview;
