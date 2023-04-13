import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: '80%',
    //height: '50%',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
    color: 'black',
  },
  modalNote: {
    fontSize: 20,
    marginBottom: 5,
    color: 'black',
    alignSelf: 'flex-start',
    paddingLeft: 20,
  },
  modalPriority: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  modalLine: {
    height: 1,
    backgroundColor: '#e0e0e0',
    width: '100%',
    marginVertical: 10,
  },
  modalButtonContainer: {
    //: 'flex-end',
    marginTop: 50,
    width: '90%',
  },
});

export default styles;
