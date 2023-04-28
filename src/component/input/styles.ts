import {StyleSheet} from 'react-native';
import AppColors from '../../utils/color';
import {height, width} from '../../utils/index';
const styles = StyleSheet.create({
  textInputStyle: {
    borderColor: AppColors.lightPrimary,
    borderRadius: 5,
    backgroundColor: AppColors.white,
    width: width(90),
    alignSelf: 'center',
    color: AppColors.black,
  },
  errortext: {
    color: 'red',
    width: width(90),
    alignSelf: 'center',
    marginTop: height(0.5),
  },
});

export default styles;
