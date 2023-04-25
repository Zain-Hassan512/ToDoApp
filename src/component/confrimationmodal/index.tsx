import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from './style';
import Modal from 'react-native-modal';
import AppColors from '../../utils/color';
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
    <View style={styles.viewContainer}>
      <Modal
        isVisible={visible}
        onBackButtonPress={onDismiss}
        style={styles.modalStyle}
        onBackdropPress={onDismiss}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            Are you sure you want to delete this task?
          </Text>
          <View style={styles.modalButtonsContainer}>
            <Button
              color={AppColors.lightPrimary}
              title="Cancel"
              onPress={onDismiss}
            />
            <Button
              color={AppColors.lightPrimary}
              title="Delete"
              onPress={() => onDelete(taskId)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ConfirmationModal;
