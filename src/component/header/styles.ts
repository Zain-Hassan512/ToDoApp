import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  header: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
    backgroundColor: '#fff',
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
    //color: '#4B5563',
    textAlign: 'center',
    marginHorizontal: 5,
  },
  icon: {
    width: 25,
    height: 25,
    alignSelf: 'center',
  },
});

export default styles;
