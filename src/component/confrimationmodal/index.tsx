import React from 'react';
import {Text, View, Modal, StyleSheet, Button} from 'react-native';
import styles from './style';
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
    <Modal visible={visible} onRequestClose={onDismiss} transparent={true}>
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
  );
};

export default ConfirmationModal;
