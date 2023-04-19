import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/index';
import allColors from '../../utils/color';
const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: allColors.colors.primary,
    borderRadius: 50,
    width: width(12.5),
    height: height(6.3),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    //borderWidth: 1,
    //borderColor: allColors.colors.primary,
  },
});
export default styles;
