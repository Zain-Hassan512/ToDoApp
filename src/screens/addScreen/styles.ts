import {StyleSheet} from 'react-native';
import {height, width} from '../../utils';
import allColors from '../../utils/color';
import AppColors from '../../utils/color';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  innercontainer: {
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: AppColors.gray85,
    borderBottomWidth: 1,
    backgroundColor: AppColors.lightPrimary,
  },
  backimg: {
    width: width(8),
    height: height(4),
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    alignSelf: 'center',
    padding: width(4),
    color: AppColors.sepratorclr,
  },

  input: {
    padding: width(2.3),
    borderColor: AppColors.lightPrimary,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: height(2),
    backgroundColor: AppColors.white,
    width: width(90),
    alignSelf: 'center',
    color: AppColors.black,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: height(1),
    width: width(90),
    alignSelf: 'center',
    color: AppColors.primary,
  },
  noteInput: {
    marginBottom: height(3),
    borderColor: AppColors.lightPrimary,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: AppColors.white,
    width: width(90),
    alignSelf: 'center',
    padding: width(5),
    color: AppColors.black,
    textAlignVertical: 'top',
  },
  addItemButton: {
    backgroundColor: AppColors.lightPrimary,
    padding: width(4),
    borderRadius: 4,
    alignSelf: 'center',
    width: width(90),
  },
  buttonText: {
    color: AppColors.white,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
