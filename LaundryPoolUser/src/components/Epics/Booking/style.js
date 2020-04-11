import {StyleSheet} from 'react-native';
import {ColorPallete, fontSize, fonts} from '../../../Utils/StylingInfo';

export const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 80,
    alignSelf: 'center',
    position: 'relative',
  },
  plusMinus: {
    top: 5,
  },
  serviceTypeContainer: {
    padding: 20,
  },
  cardCheckboxContainer: {
    marginTop: 20,
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
    paddingHorizontal: 30,
  },
  searchBox: {
    paddingVertical: 20,
    flexDirection: 'row',
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
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  userTabs: {
    borderBottomWidth: 5,
    borderColor: ColorPallete.colors.primary,
    paddingBottom: 10,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  tabText: {
    textAlign: 'center',
    paddingTop: 10,
    color: ColorPallete.colors.counterColor
  }
});
