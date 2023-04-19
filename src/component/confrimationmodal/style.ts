import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/index';
import allColors from '../../utils/color';
import AppColors from '../../utils/color';
const styles = StyleSheet.create({
  viewContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    //width: width(70),
    backgroundColor: 'red',
    alignContent: 'center',
    justifyContent: 'center',
  },
  modalStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    width: width(100),
  },
  modalContainer: {
    //backgroundColor: 'white',
    backgroundColor: AppColors.confrimationModalBG,
    borderRadius: 10,
    padding: width(5),
    //marginHorizontal: 50,
    //marginVertical: 150,
    //height: '30%',
    width: width(75),
  },
  modalText: {
    fontSize: 18,
    marginBottom: height(3),
    color: AppColors.white,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width(50),
    alignSelf: 'center',
    color: AppColors.lightPrimary,
  },
});

export default styles;
