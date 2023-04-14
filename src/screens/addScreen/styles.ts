import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  form: {
    flex: 1,
    //padding: 10,
    backgroundColor: '#fff',
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 20,
    color: 'black',
  },
  closeButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
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
    //backgroundColor: 'red',
    width: '90%',
    alignSelf: 'center',
    color: 'black',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  picker: {
    height: 40,
    backgroundColor: '#F2F2F2',
  },
  noteInput: {
    marginBottom: 20,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#F2F2F2',
    width: '90%', // increase container width to 100%
    alignSelf: 'center',
    padding: 20, // add padding to the TextInput
    textAlignVertical: 'top', // align text to top
    //height: '40%',
  },
  noteInputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  noteInputField: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    //height: 100,
    backgroundColor: '#F2F2F2',
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
