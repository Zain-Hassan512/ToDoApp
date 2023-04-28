import {StyleSheet} from 'react-native';
import {height, width} from '../../utils';
import AppColors from '../../utils/color';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //To be discussed
    height: height(100),
    backgroundColor: AppColors.white,
  },
  innercontainer: {
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.lightPrimary,
    padding: width(2),
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    alignSelf: 'center',
    color: AppColors.sepratorclr,
    width: width(80),
    textAlign: 'center',
  },

  input: {
    paddingHorizontal: width(1),
    paddingVertical: height(1),
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
    alignSelf: 'center',
    height: height(20),
    color: AppColors.black,
    textAlignVertical: 'top',
  },
  addItemButton: {
    backgroundColor: AppColors.lightPrimary,
    padding: width(4),
    borderRadius: 4,
    alignSelf: 'center',
    width: width(90),
    position: 'absolute',
    bottom: height(2),
  },
  buttonText: {
    color: AppColors.white,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
