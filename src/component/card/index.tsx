import React, {useState, useMemo} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Task from '../../types/taskType';
import styles from './style';
import DetailsModal from '../detailmodal';
import ConfirmationModal from '../confrimationmodal';
import {useDispatch} from 'react-redux';
import {deleteTask, markTaskCompleted} from '../../store/taskSlice';
import {Deletesvg, Donesvg, Editsvg} from '../../assets/svgs';
import {height, width} from '../../utils/index';
import AppColors from '../../utils/color';
interface TaskCardProps {
  task: Task;
  onPressEdit(): void;
  pending?: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onPressEdit,
  pending = false,
}) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const dispatch = useDispatch();
  const handleDeleteConfirmation = (id: number) => {
    dispatch(deleteTask(id));
    setShowConfirmationModal(false);
  };
  const handleTaskDone = (id: number) => {
    dispatch(markTaskCompleted(id));
    console.log(task.completed);
  };
  const getPriorityColor = useMemo(() => {
    const priorityColors = {
      high: {color: 'red'},
      medium: {color: 'yellow'},
      low: {color: 'green'},
    };

    return priorityColors[task.priority];
  }, [task.priority]);

  const getPriorityStyles = useMemo(() => {
    return {
      priorityStyles: {
        ...styles.priority,
        ...(task.priority === 'high'
          ? styles.highPriority
          : task.priority === 'medium'
          ? styles.mediumPriority
          : styles.lowPriority),
      },
    };
  }, [task.priority]);

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
            {!pending && (
              <>
                <TouchableOpacity onPress={() => handleTaskDone(task.id)}>
                  <Donesvg width={width(7)} height={width(7)} />
                </TouchableOpacity>

                <TouchableOpacity onPress={onPressEdit}>
                  <Editsvg
                    width={width(6)}
                    height={height(3.3)}
                    color={AppColors.lightBlue}
                  />
                </TouchableOpacity>
              </>
            )}
            <TouchableOpacity
              onPress={() => {
                setShowConfirmationModal(true);
              }}>
              <Deletesvg width={width(6)} height={height(3.3)} color="red" />
            </TouchableOpacity>
          </View>
        </View>

        <Text numberOfLines={3} style={styles.note}>
          {task.note}
        </Text>
        <View style={styles.modalLine} />
        {/* <Text style={[styles.priority, getPriorityColor]}>
          {task.priority.toLocaleUpperCase()}
        </Text> */}
        <Text style={getPriorityStyles.priorityStyles}>
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
        onDelete={() => handleDeleteConfirmation(task.id)}
      />
    </View>
  );
};

export default TaskCard;
