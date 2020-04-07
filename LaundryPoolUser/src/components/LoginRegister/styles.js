import {StyleSheet} from 'react-native';
import {ColorPallete, fonts, fontSize} from '../../Utils/StylingInfo';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorPallete.backgroundColors.main,
  },
  topContainer: {
    height: '45%',
  },
  bottomContainer: {
    height: '55%',
  },
  logoContainer: {
    position: 'relative',
    flex: 1,
  },
  mainLogo: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    height: 250,
    width: 250,
  },
  tabHeadingContainer: {
    marginTop: 40,
    flexDirection: 'row',
  },
  tabStyle: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  tabHeading: {
    fontFamily: fonts.seogeUISemiBold,
    fontSize: 21,
    color: ColorPallete.colors.primary,
  },
  disabledHeading: {
    fontFamily: fonts.seogeUISemiBold,
    fontSize: 21,
    color: ColorPallete.fontColors.disabled,
  },
  activeBorder: {
    position: 'absolute',
    width: '20%',
    height: '100%',
    top: 5,
    left: 0,
    borderRadius: 4,
    borderBottomWidth: 4,
    borderColor: ColorPallete.colors.primary,
  },
  disabledBorder: {
    borderTopWidth: 2,
    width: '50%',
    borderColor: ColorPallete.colors.disabled,
  },
  tabBody: {
    marginTop: 90,
  },
  inputBody: {
    height: 40,
    borderColor: ColorPallete.colors.disabled,
    borderBottomWidth: 1,
    fontFamily: fonts.seogeUI,
    fontSize: fontSize.in17,
    color: ColorPallete.fontColors.darkGrey,
  },
});
