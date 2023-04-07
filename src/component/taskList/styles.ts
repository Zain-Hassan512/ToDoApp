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
    paddingLeft: 30,
    paddingTop: 3,
  },
  priority: {
    fontSize: 17,
    fontWeight: '600',
    paddingLeft: 8,
    paddingTop: 4,
    paddingBottom: 8,
    right: -290,
  },
  form: {
    marginTop: 30,
  },
  input: {
    padding: 15,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  addItemButton: {
    backgroundColor: '#eb8634',
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontWeight: '500'},
  modalContainer: {
    //backgroundColor: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 50,
    marginVertical: 150,
    //height: '30%',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: 'white',
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
