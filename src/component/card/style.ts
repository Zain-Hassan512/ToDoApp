import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/index';
import AppColors from '../../utils/color';
const styles = StyleSheet.create({
  heading: {
    fontSize: width(5.5),
    fontWeight: '600',
    color: AppColors.primary,
    flex: 1,
  },
  note: {
    fontSize: 15,
    fontWeight: '200',
    width: width(85),
    alignSelf: 'center',
    marginTop: height(1),
    color: AppColors.black,
  },
  modalLine: {
    height: 1.5,
    backgroundColor: AppColors.primary,
    width: width(85),
    marginVertical: height(2),
    marginTop: height(2),
    alignSelf: 'center',
  },
  priority: {
    fontSize: 20,
    fontWeight: '600',
    paddingBottom: height(1),
    alignSelf: 'center',
    textAlign: 'center',
  },
  container: {
    width: width(90),
    backgroundColor: AppColors.white,
    borderRadius: width(3),
    margin: width(1),
    shadowColor: AppColors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,

    marginBottom: height(4),
  },
  topRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height(1),
    width: width(85),
    alignSelf: 'center',
  },
  rightIcons: {
    width: width(20),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  highPriority: {
    color: 'red',
  },
  mediumPriority: {
    color: 'yellow',
  },
  lowPriority: {
    color: 'green',
  },
});

export default styles;
