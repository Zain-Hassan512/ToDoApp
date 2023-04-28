import React, {useMemo} from 'react';
import {Text, View, Modal, Button, ScrollView} from 'react-native';
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
  const getPriorityStyles = useMemo(() => {
    return {
      priorityStyles: {
        ...styles.modalPriority,
        ...(task.priority === 'high'
          ? styles.highPriority
          : task.priority === 'medium'
          ? styles.mediumPriority
          : styles.lowPriority),
      },
    };
  }, [task.priority]);

  return (
    <Modal visible={visible} onRequestClose={onDismiss} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{task.title}</Text>
          <View style={styles.modalLine} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{width: width(70)}}>
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
          </ScrollView>
          <View style={styles.modalLine} />
          <Text style={getPriorityStyles.priorityStyles}>
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
