import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/index';
import allColors from '../../utils/color';
const styles = StyleSheet.create({
  header: {
    paddingVertical: height(2),
    borderBottomWidth: 1,
    borderBottomColor: allColors.colors.gray85,
    //backgroundColor: allColors.colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: allColors.colors.lightPrimary,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '700',
    color: allColors.colors.sepratorclr,
    textAlign: 'center',
    marginHorizontal: width(1),
    //color: '#e0e0e0',
  },
  icon: {
    width: width(8),
    height: height(4),
    alignSelf: 'center',
  },
});

export default styles;
