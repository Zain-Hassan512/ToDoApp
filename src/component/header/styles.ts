import {StyleSheet} from 'react-native';
import AppColors from '../../utils/color';
import {height, width} from '../../utils/index';
const styles = StyleSheet.create({
  header: {
    paddingVertical: height(2),
    borderBottomWidth: 1,
    borderBottomColor: AppColors.gray85,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: AppColors.lightPrimary,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '700',
    color: AppColors.sepratorclr,
    textAlign: 'center',
    alignSelf: 'center',
    marginLeft: width(1)
  },
  icon: {
    width: width(8),
    height: width(8),
    alignSelf: 'center',
  },
});

export default styles;
