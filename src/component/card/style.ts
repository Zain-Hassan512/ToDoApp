import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    paddingLeft: 8,
    paddingTop: 2,
  },
  note: {
    fontSize: 16,
    fontWeight: '600',
    //paddingLeft: 30,
    paddingTop: 3,
    //backgroundColor: 'red',
    width: '80%',
    alignSelf: 'center',
  },
  priority: {
    fontSize: 17,
    fontWeight: '600',
    paddingLeft: 8,
    paddingTop: 8,
    paddingBottom: 8,
    right: -230,
  },
  dltibtn: {
    width: 20,
    height: 20,
    right: -310,
    marginTop: 10,
  },
  editbtn: {
    width: 20,
    height: 20,
    right: -255,
    marginTop: 10,
  },
  container: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 10,
    elevation: 2,
    padding: 12,
    marginBottom: 5,
  },
});

export default styles;
