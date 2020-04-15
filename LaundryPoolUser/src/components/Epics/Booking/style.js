import {StyleSheet} from 'react-native';
import {ColorPallete, fontSize, fonts} from '../../../Utils/StylingInfo';

export const styles = StyleSheet.create({
  bookingContainerParent: {
    flex: 1,
  },
  childrenContainer: {flex: 10},
  basketContainer: {
    flex: 1,
    backgroundColor: ColorPallete.colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  basketText: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  basketTextStyle: {
    fontFamily: fonts.seogeUISemiBold,
    fontSize:fontSize.in18,
    color: ColorPallete.colors.white
  },
  basketAmount: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 80,
    alignSelf: 'center',
    position: 'relative',
  },
  plusMinus: {
    top: 4,
  },
  bookingContainer: {
    flex: 1,
    width: '100%',
  },
  serviceTypeContainer: {
    // padding: 20,
    paddingTop: 15,
    paddingHorizontal: 20,
    flex: 1,
  },
  cardCheckboxContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardPcs: {
    backgroundColor: ColorPallete.colors.white,
    marginRight: 15,
    marginBottom: 15,
    width: 100,
    alignItems: 'center',
    borderRadius: 10,
    elevation: 4,

    position: 'relative',
  },
  cardIcons: {
    marginTop: 15,
  },
  cardText: {
    marginVertical: 10,
    fontSize: fontSize.in12,
    fontFamily: fonts.seogeUISemiBold,
    color: ColorPallete.colors.textColor,
  },
  tickIcon: {
    position: 'absolute',
    right: 8,
    zIndex: 5,
    top: -8,
    backgroundColor: ColorPallete.colors.white,
  },
  searchBoxTabsContainer: {
    backgroundColor: ColorPallete.colors.white,
    flex: 2.5,
    position: 'relative',
  },
  tabsContainerSelection: {
    marginTop: 20,
    backgroundColor: ColorPallete.colors.white,
    flex: 5,
  },
  searchBox: {
    paddingTop: 20,
    paddingBottom: 5,
    paddingHorizontal: 30,
    flexDirection: 'row',
    // borderColor:'red',

    // borderWidth : 1
  },
  searchIcon: {
    height: 40,
    backgroundColor: ColorPallete.backgroundColors.inputField,
    width: '10%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
  },
  inputBody: {
    height: 40,
    borderColor: ColorPallete.colors.disabled,
    fontFamily: fonts.seogeUI,
    fontSize: fontSize.in14,
    color: ColorPallete.fontColors.darkGrey,
    backgroundColor: ColorPallete.backgroundColors.inputField,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: '90%',
  },
  userTabsContainer: {
    paddingHorizontal: 10,
  },
  userTabs: {},
  tabText: {
    textAlign: 'center',
    paddingTop: 10,
    color: ColorPallete.colors.counterColor,
    fontSize: fontSize.in13,
    fontFamily: fonts.seogeUISemiBold,
  },
});
