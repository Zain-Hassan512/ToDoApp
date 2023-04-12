import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  StyleSheet,
  Button,
} from 'react-native';
import Task from '../../types/taskType';
import styles from './style';
import DetailsModal from '../detailmodal';
import ConfirmationModal from '../confrimationmodal';
import {useDispatch} from 'react-redux';
import {deleteTask} from '../../store/taskSlice';
interface TaskCardProps {
  task: Task;
  onDelete: () => void;
  onEdit: () => void;
  onDetails: () => void;
  onPressEdit(): void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onDelete,
  onEdit,
  onPressEdit,
}) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const dispatch = useDispatch();
  const handleDeleteConfirmation = (id: number) => {
    dispatch(deleteTask(id));
    setShowConfirmationModal(false);
    onDelete();
  };

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
    <>
      <ScrollView>
        <TouchableOpacity onPress={() => setShowDetailsModal(true)}>
          <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  setShowConfirmationModal(true);
                }}>
                <Image
                  source={require('../../utils/images/d.png')}
                  style={styles.dltibtn}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressEdit}>
                <Image
                  source={require('../../utils/images/edit.png')}
                  style={styles.editbtn}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.heading}>{task.title}</Text>
            <Text numberOfLines={2} style={styles.note}>
              {task.note}
            </Text>
            <Text style={[styles.priority, getPriorityColor(task.priority)]}>
              {task.priority}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <DetailsModal
        task={task}
        visible={showDetailsModal}
        onDismiss={() => setShowDetailsModal(false)}
      />
      <ConfirmationModal
        visible={showConfirmationModal}
        onDismiss={() => setShowConfirmationModal(false)}
        onDelete={handleDeleteConfirmation}
        taskId={task.id}
      />
    </>
  );
};

export default TaskCard;