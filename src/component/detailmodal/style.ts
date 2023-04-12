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
    width: '70%',
    //height: '50%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: 'black',
  },
  modalNote: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
    alignSelf: 'flex-start',
    paddingLeft: 20,
  },
  modalPriority: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'flex-end',
    paddingRight: 20,
  },
  modalLine: {
    height: 1,
    backgroundColor: '#333',
    width: '100%',
    marginVertical: 10,
  },
  modalButtonContainer: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
});

export default styles;
