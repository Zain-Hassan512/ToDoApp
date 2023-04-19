import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/index';
import allColors from '../../utils/color';
import AppColors from '../../utils/color';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  flatlist: {
    alignSelf: 'center',
    marginTop: height(2),
  },
  viewContainer: {
    width: width(90),
    padding: width(10),
    // backgroundColor: AppColors.gray85,
    alignSelf: 'center',
    marginTop: height(2),
    borderRadius: width(2),
    borderColor: AppColors.black,
    borderWidth: width(0.2),
  },
  emptyContainer: {
    width: width(90),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: height(65),
  },
  emptyText: {
    color: AppColors.black,
    fontSize: width(5),
    borderBottomColor: AppColors.black,
    borderBottomWidth: width(0.2)
  },
});
export default styles;
