import {StyleSheet} from 'react-native';
import {ColorPallete, fontSize, fonts} from '../../../../Utils/StylingInfo';

export const styles = StyleSheet.create({
  dateTimeContainer: {flex: 1},
  dateTimeHeadingContainer: {
    paddingVertical: 20,
    marginLeft: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingContainer: {
    marginLeft: 20,
  },
  headingTextContainer: {
    fontSize: fontSize.in27,
    fontFamily: fonts.seogeUISemiBold,
    color: ColorPallete.colors.primary,
  },
  pickUpDateContainer: {
    backgroundColor: ColorPallete.colors.white,
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 25,
  },
  pickUpDateHeadingContainer: {},
  pickUpDateTextContainer: {
    fontFamily: fonts.seogeUISemiBold,
    fontSize: fontSize.in16,
    color: ColorPallete.colors.textColor,
  },
  touchableIcons: {
    paddingHorizontal: 10,
    marginRight: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: ColorPallete.colors.lightborder,
    flex: 2,
  },
  touchableIconsDate: {
    borderRadius: 10,
    flex: 1,
    borderWidth: 1,
    borderColor: ColorPallete.colors.lightborder,
  },
  touchableIconsDateText: {
    fontFamily: fonts.seogeUISemiBold,
    fontSize: fontSize.in13,
    color: ColorPallete.colors.textColor,
    paddingVertical: 5
  },
  activeIcons: {
    backgroundColor: ColorPallete.colors.primary,
    borderColor: ColorPallete.colors.primary,
  },

  pickUpTimeContainer: {
    marginTop: 15,
    backgroundColor: ColorPallete.colors.white,
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 25,
  },
  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
  },
  timeItems: {
    width: '48%',
    borderWidth: 1,
    borderColor: ColorPallete.colors.lightborder,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center'
   },
});
