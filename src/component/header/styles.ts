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
    alignContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: '700',
    color: AppColors.sepratorclr,
    textAlign: 'center',
    alignSelf: 'center',
    marginLeft: width(1),
  },
  iconContainer: {
    position: 'absolute',
    left: 0,
    padding: width(2),
  },
  historyicon: {
    width: width(10),
  },
  innerContainer: {
    flexDirection: 'row',
    width: width(80),
  },
});

export default styles;
