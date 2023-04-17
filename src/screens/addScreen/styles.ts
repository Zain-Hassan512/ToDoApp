import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innercontainer: {
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backimg: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 20,
    color: 'black',
  },

  input: {
    padding: 10,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#F2F2F2',
    width: '90%',
    alignSelf: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    width: '90%',
    alignSelf: 'center',
    color: 'black',
  },
  noteInput: {
    marginBottom: 20,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#F2F2F2',
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    textAlignVertical: 'top',
  },
  addItemButton: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 4,
    //margin: 5,
    alignSelf: 'center',
    width: '90%',
    marginTop: 220,
    //bottom: 5,
    //position: 'absolute',
    //marginBottom: 50,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
