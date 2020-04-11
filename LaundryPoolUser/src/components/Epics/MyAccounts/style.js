import {StyleSheet} from 'react-native';
import {ColorPallete, fontSize, fonts} from '../../../Utils/StylingInfo';

export const styles = StyleSheet.create({
  accountOverViewWrapper: {
    flex: 1,
  },
  userProfileContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  userProfileMenuContainer: {
    flex: 3,
  },
  userIcon: {
    resizeMode: 'contain',
    height: 110,
    width: 110,
    alignSelf: 'center',
    flex: 1.1,
  },
  userNameLocation: {
    flex: 2.2,
    alignSelf: 'center',
  },
  userName: {
    color: ColorPallete.colors.textColor,
    fontSize: fontSize.in17,
    fontFamily: fonts.seogeUISemiBold,
  },
  locationName: {
    color: ColorPallete.colors.primary,
    fontSize: fontSize.in20,
    fontFamily: fonts.seogeUISemiBold,
    marginLeft: 10,
  },
  menuWrapper: {
    backgroundColor: ColorPallete.colors.white,
  },
  singleMenu: {
    paddingLeft: 30,
    paddingVertical: 20,
  },
  menuText: {
    fontSize: fontSize.in19,
    fontFamily: fonts.seogeUISemiBold,
    marginLeft: 20,
  },
});
