import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/index';
import allColors from '../../utils/color';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: allColors.colors.white,
  },
  contentWrapper: {
    paddingHorizontal: height(3),
    paddingVertical: height(2),
  },
});
export default styles;
