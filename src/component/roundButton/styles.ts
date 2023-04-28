import {StyleSheet} from 'react-native';
import AppColors from '../../utils/color';
import {width} from '../../utils/index';
const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: AppColors.lightPrimary,
    borderRadius: 50,
    width: width(12.5),
    height: width(12.5),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
});
export default styles;
