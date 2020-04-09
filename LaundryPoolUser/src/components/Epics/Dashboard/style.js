import {StyleSheet} from 'react-native';
import {ColorPallete, fontSize, fonts} from '../../../Utils/StylingInfo';
export const styles = StyleSheet.create({
  hamburgerMenuPosition: {
    marginLeft: 20,
  },
  smallCircle: {
    height: 40,
    width: 40,
    position: 'absolute',
    bottom: 100,
    right: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.19)',
    borderRadius: 50 / 2,
  },
  dashboardHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    marginTop: 20,
    zIndex: 5,
  },
  cards: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardPcs: {
    backgroundColor: ColorPallete.colors.white,
    marginRight: 15,
    marginBottom: 15,
    paddingVertical: 20,
    paddingHorizontal: 15,
    width: 120,
    alignItems: 'center',
    borderRadius: 10,
    elevation: 4,
  },
  cardText: {
    marginTop: 6,
    fontSize: fontSize.in12,
    fontFamily: fonts.seogeUISemiBold,
    color: ColorPallete.colors.textColor,
  },
  smallPrimaryBtn: {
    backgroundColor: ColorPallete.colors.primary,
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 20
  },
  
});
