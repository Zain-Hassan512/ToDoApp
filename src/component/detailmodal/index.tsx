import React from 'react';
import {Text, View, Modal, Button} from 'react-native';
import Task from '../../types/taskType';
import styles from './style';
import AppColors from '../../utils/color';
import {height, width} from '../../utils';

interface DetailsModalProps {
  task: Task;
  visible: boolean;
  onDismiss: () => void;
}

const DetailsModal: React.FC<DetailsModalProps> = ({
  task,
  visible,
  onDismiss,
}) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return {color: 'red'};
      case 'medium':
        return {color: 'yellow'};
      case 'low':
        return {color: 'green'};
      default:
        return {color: 'black'};
    }
  };

  return (
    <Modal visible={visible} onRequestClose={onDismiss} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{task.title}</Text>
          <View style={styles.modalLine} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              alignSelf: 'flex-start',
            }}>
            <Text
              style={{
                fontSize: 22,
                color: AppColors.darkGray,
              }}>
              {'>>'}
            </Text>
            <Text style={styles.modalNote}>{task.note}</Text>
          </View>
          <View style={styles.modalLine} />
          <Text style={[styles.modalPriority, getPriorityColor(task.priority)]}>
            {task.priority.toLocaleUpperCase()}
          </Text>
          <View style={styles.modalButtonContainer}>
            <Button
              color={AppColors.lightPrimary}
              title="Close"
              onPress={onDismiss}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DetailsModal;
