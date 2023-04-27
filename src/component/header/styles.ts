import {StyleSheet} from 'react-native';
import AppColors from '../../utils/color';
import {height, width} from '../../utils/index';
const styles = StyleSheet.create({
  header: {
    paddingVertical: height(2),
    backgroundColor: AppColors.lightPrimary,
  },
  headerText: {
    fontSize: width(5.5),
    fontWeight: '700',
    color: AppColors.sepratorclr,
    marginLeft: width(1),
  },
  iconContainer: {
    position: 'absolute',
    left: 0,
    padding: width(2),
  },
  historyicon: {
    width: width(10),
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },
  innerContainer: {
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width(90),
    alignSelf: 'center',
  },
  backIconContainer: {
    paddingVertical: height(2),
    backgroundColor: AppColors.lightPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
