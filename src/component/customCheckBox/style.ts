import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    width: '90%',
    alignSelf: 'center',
    color: 'black',
  },
  checkboxContainer: {
    flexDirection: 'row',
    //flexWrap: 'wrap',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  checkbox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    paddingVertical: 6,
    marginRight: 10,
    marginBottom: 10,
    width: '31%',
  },
  selected: {
    backgroundColor: 'grey',
  },
  checkboxLabel: {
    fontSize: 16,
    marginLeft: 8,
    color: '#000000',
  },
});
export default styles;
