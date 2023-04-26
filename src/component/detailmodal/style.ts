import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/index';
import allColors from '../../utils/color';
import AppColors from '../../utils/color';
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.detailModalBG,
  },
  modalContent: {
    backgroundColor: AppColors.white,
    padding: width(6),
    borderRadius: 5,
    alignItems: 'center',
    elevation: 5,
    shadowColor: AppColors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: width(80),
    maxHeight: height(70),
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: height(1),
    color: AppColors.white,
    backgroundColor: AppColors.lightPrimary,
    width: width(40),
    textAlign: 'center',
    padding: width(2),
    //height: height(7),
    borderRadius: 10,
  },
  modalNote: {
    fontSize: 20,
    marginBottom: height(1),
    color: AppColors.darkGray,
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
    backgroundColor: AppColors.lightPrimary,
    width: width(70),
    marginVertical: height(2),
  },
  modalButtonContainer: {
    //: 'flex-end',
    marginTop: height(6),
    width: width(65),
    backgroundColor: AppColors.lightPrimary,
  },
  highPriority: {
    color: 'red',
  },
  mediumPriority: {
    color: 'yellow',
  },
  lowPriority: {
    color: 'green',
  },
});

export default styles;
