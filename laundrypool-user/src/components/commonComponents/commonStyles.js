import {StyleSheet} from 'react-native';
import {ColorPallete, fonts} from '../../Utils/StylingInfo';

let btn = {
  height: 53,
  borderRadius: 40,
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 18,
  borderColor: ColorPallete.colors.primary,
  borderWidth: 2,
};

let btnText = {
  fontSize: 18,
  fontFamily: fonts.seogeUISemiBold,
};

export const globalStyles = StyleSheet.create({
  mT10: {
    marginTop: 10
  },
  mT20: {
    marginTop: 20
  },
  mT30: {
    marginTop: 30
  },
  mT40: {
    marginTop: 40
  },
  mB20: {
    marginBottom: 20
  },
  mB40: {
    marginBottom: 40
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
  primaryBtn: {
    ...btn,
    backgroundColor: ColorPallete.backgroundColors.primaryButton,
    shadowColor: ColorPallete.backgroundColors.primaryButton,
  },
  primaryBtnText: {
    ...btnText,
    color: ColorPallete.colors.white,
  },
  blankBtn: {
    ...btn,
    shadowColor: ColorPallete.backgroundColors.primaryButton,
  },
  blankBtnText: {
    ...btnText,
    color: ColorPallete.colors.primary,
  },
});
