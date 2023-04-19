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
import allColors from '../../utils/color';
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
    <>
      <ScrollView>
        <TouchableOpacity
          onPress={() => setShowDetailsModal(true)}
          activeOpacity={0.9}>
          <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.heading}>{task.title}</Text>

              <TouchableOpacity
                onPress={() => {
                  setShowConfirmationModal(true);
                }}>
                <View style={styles.dltibtn}>
                  <Deletesvg
                    width={width(6)}
                    height={height(3.3)}
                    color="red"
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={onPressEdit}>
                <View style={styles.editbtn}>
                  <Editsvg
                    width={width(6)}
                    height={height(3.3)}
                    color={allColors.colors.lightBlue}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <Text numberOfLines={3} style={styles.note}>
              {task.note}
            </Text>
            <View style={styles.modalLine} />
            <Text style={[styles.priority, getPriorityColor(task.priority)]}>
              {task.priority.toLocaleUpperCase()}
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
