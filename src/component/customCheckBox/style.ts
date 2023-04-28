import {StyleSheet} from 'react-native';
import {width, height} from '../../utils';
import allColors from '../../utils/color';
import AppColors from '../../utils/color';
const styles = StyleSheet.create({
  container: {
    marginTop: height(2),
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: height(0.5),
    width: width(90),
    alignSelf: 'center',
    color: AppColors.primary,
  },
  checkboxContainer: {
    flexDirection: 'row',
    //flexWrap: 'wrap',
    width: width(90),
    alignSelf: 'center',
    marginTop: height(1),
  },
  checkbox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: AppColors.lightPrimary,
    borderRadius: 8,
    paddingVertical: height(1),
    marginRight: width(3),
    marginBottom: height(1),
    width: width(28),
  },

  checkboxLabel: {
    fontSize: 16,
    color: AppColors.black,
  },
});
export default styles;
