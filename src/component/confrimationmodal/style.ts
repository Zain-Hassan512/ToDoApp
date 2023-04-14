import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  viewContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'red',
    alignContent: 'center',
    justifyContent: 'center',
  },
  modalStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
  },
  modalContainer: {
    //backgroundColor: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 10,
    padding: 20,
    //marginHorizontal: 50,
    //marginVertical: 150,
    //height: '30%',
    width: '70%',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: 'white',
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    alignSelf: 'center',
  },
});

export default styles;
