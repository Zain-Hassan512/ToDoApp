import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Task from '../../types/taskType';
import styles from './style';
import DetailsModal from '../detailmodal';
import ConfirmationModal from '../confrimationmodal';
import {useDispatch} from 'react-redux';
import {deleteTask} from '../../store/taskSlice';
import {Deletesvg, Editsvg} from '../../assets/svgs';
import {height, width} from '../../utils/index';
import AppColors from '../../utils/color';
interface TaskCardProps {
  task: Task;
  onPressEdit(): void;
}

const TaskCard: React.FC<TaskCardProps> = ({task, onPressEdit}) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const dispatch = useDispatch();
  const handleDeleteConfirmation = (id: number) => {
    dispatch(deleteTask(id));
    setShowConfirmationModal(false);
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
    <View>
      <TouchableOpacity
        onPress={() => setShowDetailsModal(true)}
        style={styles.container}
        activeOpacity={0.9}>
        <View style={styles.topRowContainer}>
          <View>
            <Text style={styles.heading}>{task.title}</Text>
          </View>
          <View style={styles.rightIcons}>
            <TouchableOpacity
              onPress={() => {
                setShowConfirmationModal(true);
              }}>
              <Deletesvg width={width(6)} height={height(3.3)} color="red" />
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressEdit}>
              <Editsvg
                width={width(6)}
                height={height(3.3)}
                color={AppColors.lightBlue}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text numberOfLines={3} style={styles.note}>
          {task.note}
        </Text>
        <View style={styles.modalLine} />
        <Text style={[styles.priority, getPriorityColor(task.priority)]}>
          {task.priority.toLocaleUpperCase()}
        </Text>
      </TouchableOpacity>
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
    </View>
  );
};

export default TaskCard;
