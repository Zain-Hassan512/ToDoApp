import {StyleSheet} from 'react-native';
import {height, width} from '../../utils';
import allColors from '../../utils/color';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: allColors.colors.white,
  },
  innercontainer: {
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: allColors.colors.lightBlue,
    borderBottomColor: allColors.colors.gray85,
    borderBottomWidth: 1,
    backgroundColor: allColors.colors.lightPrimary,
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
    color: allColors.colors.sepratorclr,
  },

  input: {
    padding: width(2.3),
    borderColor: allColors.colors.lightPrimary,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: height(2),
    backgroundColor: allColors.colors.white,
    width: width(90),
    alignSelf: 'center',
    color: allColors.colors.black,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: height(1),
    width: width(90),
    alignSelf: 'center',
    color: allColors.colors.primary,
  },
  noteInput: {
    marginBottom: height(3),
    borderColor: allColors.colors.lightPrimary,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: allColors.colors.white,
    width: width(90),
    alignSelf: 'center',
    padding: width(5),
    textAlignVertical: 'top',
  },
  addItemButton: {
    backgroundColor: allColors.colors.lightPrimary,
    padding: width(4),
    borderRadius: 4,
    //margin: 5,
    alignSelf: 'center',
    width: width(90),
    marginTop: height(28),
    //bottom: 5,
    //position: 'absolute',
    //marginBottom: 50,
  },
  buttonText: {
    color: allColors.colors.white,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
