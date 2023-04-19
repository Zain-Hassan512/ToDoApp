import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/index';
import allColors from '../../utils/color';
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: allColors.colors.detailModalBG,
  },
  modalContent: {
    backgroundColor: allColors.colors.white,
    padding: width(6),
    borderRadius: 5,
    alignItems: 'center',
    elevation: 5,
    shadowColor: allColors.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: width(80),
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: height(1),
    color: allColors.colors.white,
    backgroundColor: allColors.colors.lightPrimary,
    width: width(40),
    textAlign: 'center',
    padding: width(2),
    //height: height(7),
    borderRadius: 10,
  },
  modalNote: {
    fontSize: 20,
    marginBottom: height(1),
    color: allColors.colors.darkGray,
    alignSelf: 'flex-start',
    paddingLeft: width(5),
  },
  modalPriority: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: height(1),
  },
  modalLine: {
    height: 1,
    backgroundColor: allColors.colors.lightPrimary,
    width: width(70),
    marginVertical: height(2),
  },
  modalButtonContainer: {
    //: 'flex-end',
    marginTop: height(6),
    width: width(65),
    backgroundColor: allColors.colors.lightPrimary,
  },
});

export default styles;
