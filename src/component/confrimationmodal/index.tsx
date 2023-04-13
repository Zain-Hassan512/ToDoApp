import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import styles from './style';
import Modal from 'react-native-modal';
interface ConfirmationModalProps {
  visible: boolean;
  onDismiss: () => void;
  onDelete: (id: number) => void;
  taskId: number;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  visible,
  onDismiss,
  onDelete,
  taskId,
}) => {
  const handleDelete = () => {
    onDelete(taskId);
  };
  return (
    <View
      style={{
        alignSelf: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'red',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <Modal
        isVisible={visible}
        onBackButtonPress={onDismiss}
        //transparent={true}
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          width: '100%',
        }}
        onBackdropPress={onDismiss}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            Are you sure you want to delete this task?
          </Text>
          <View style={styles.modalButtonsContainer}>
            <Button title="Cancel" onPress={onDismiss} />
            <Button title="Delete" onPress={() => onDelete(taskId)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ConfirmationModal;
