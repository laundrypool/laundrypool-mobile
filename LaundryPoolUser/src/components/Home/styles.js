import {StyleSheet} from 'react-native';
import {ColorPallete,fonts} from '../../Utils/StylingInfo';

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
  
  heading: {
    marginTop: 25,
    alignItems: 'center',
  },
  headingText: {
    color: ColorPallete.fontColors.darkGrey,
    fontSize: 28,
    fontFamily: fonts.seogeUISemiBold,
  },
  subHeading: {
    marginTop: 20,
  },
  subHeadingText: {
    color: ColorPallete.fontColors.darkGrey,
    fontSize: 18,
    fontFamily: fonts.seogeUI,
    textAlign: 'center',
  },
});