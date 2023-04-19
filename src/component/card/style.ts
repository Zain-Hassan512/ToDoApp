import {StyleSheet} from 'react-native';
import {height, width} from '../../utils/index';
import allColors from '../../utils/color';
const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: '600',
    color: allColors.colors.primary,
    paddingTop: height(0.4),
    flex: 1,
    alignSelf: 'center',
  },
  note: {
    fontSize: 18,
    fontWeight: '600',
    width: width(83),
    alignSelf: 'center',
    marginTop: height(1),
    //color: allColors.colors.gray95,
  },
  modalLine: {
    height: 1.5,
    backgroundColor: allColors.colors.primary,
    width: width(80),
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
  dltibtn: {
    // width: width(5.2),
    // height: height(2.7),
    marginTop: height(0.5),
    marginRight: width(5),
  },
  editbtn: {
    // width: width(5.2),
    // height: height(2.7),
    //right: -255,
    marginTop: height(0.5),
    marginRight: width(3),
  },
  container: {
    //justifyContent: 'space-between',
    width: width(90),
    alignSelf: 'center',
    backgroundColor: allColors.colors.white,
    marginTop: height(1),
    borderRadius: 10,
    elevation: 5,
    padding: width(2),
    marginBottom: height(2),
    shadowColor: allColors.colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: allColors.colors.primary,
    //borderColor: '#24a0ed',
  },
});

export default styles;
