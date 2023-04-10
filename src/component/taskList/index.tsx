import React, {useState} from 'react';
import {
  FlatList,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {deleteTask} from '../../store/taskSlice';
import Task from '../../types/taskType';
import styles from './styles';
import AddTaskModal from '../addTaskModal';
import EditTaskModal from '../edit';

const TaskList: React.FC = () => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.task);

  const handleDeleteTask = (task: Task) => {
    setTaskToDelete(task);
    setShowConfirmationModal(true);
  };
  const handleDeleteConfirmation = () => {
    if (taskToDelete) {
      dispatch(deleteTask(taskToDelete.id));
      setTaskToDelete(null);
      setShowConfirmationModal(false);
    }
  };
  const handleConfirmationModalDismiss = () => {
    setTaskToDelete(null);
    setShowConfirmationModal(false);
  };

  const handleDetailsPress = () => {
    setShowDetailsModal(true);
  };

  const handleEditPress = (task: Task) => {
    setSelectedTask(task);
    setIsEditModalVisible(true);
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
  const renderItem = ({item}: {item: Task}) => (
    <>
      <ScrollView>
        <TouchableOpacity onPress={handleDetailsPress}>
          <View
            style={{
              width: '94%',
              alignSelf: 'center',
              //height: 120,
              backgroundColor: '#fff',
              marginTop: 10,
              borderRadius: 10,
              elevation: 1,
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => handleDeleteTask(item)}>
                <Image
                  source={require('../../utils/images/d.png')}
                  style={{
                    width: 20,
                    height: 20,
                    right: -340,
                    marginTop: 10,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleEditPress(item)}>
                <Image
                  source={require('../../utils/images/edit.png')}
                  style={{
                    width: 20,
                    height: 20,
                    right: -280,
                    marginTop: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.heading}>{item.title}</Text>
            <Text numberOfLines={2} style={styles.note}>
              {item.note}
            </Text>
            <Text style={[styles.priority, getPriorityColor(item.priority)]}>
              {item.priority}
            </Text>
            {/* <Button title="Delete" onPress={() => handleDeleteTask(item.id)} /> */}
          </View>
        </TouchableOpacity>
      </ScrollView>
      <Modal
        visible={showDetailsModal}
        onRequestClose={() => setShowDetailsModal(false)}
        transparent={true}>
        <View style={styless.modalContainer}>
          <View style={styless.modalContent}>
            <Text style={styless.modalTitle}>{item.title}</Text>
            <View style={styless.modalLine} />
            <Text style={styless.modalNote}>{item.note}</Text>
            <Text
              style={[styless.modalPriority, getPriorityColor(item.priority)]}>
              {item.priority}
            </Text>
            <View style={styless.modalLine} />
            <View style={styless.modalButtonContainer}>
              <Button
                title="Close"
                onPress={() => setShowDetailsModal(false)}
                //color="#FFFFFF"
              />
            </View>
          </View>
        </View>
      </Modal>
      <EditTaskModal
        visible={isEditModalVisible}
        onClose={() => setIsEditModalVisible(false)}
        task={selectedTask}
      />
    </>
  );

  return (
    <>
      <FlatList
        data={tasks.tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <Modal
        visible={showConfirmationModal}
        onRequestClose={handleConfirmationModalDismiss}
        transparent={true}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            Are you sure you want to delete this task?
          </Text>
          <View style={styles.modalButtonsContainer}>
            <Button title="Cancel" onPress={handleConfirmationModalDismiss} />
            <Button title="Delete" onPress={handleDeleteConfirmation} />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default TaskList;

const styless = StyleSheet.create({
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
    height: '50%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalNote: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalPriority: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  modalLine: {
    height: 1,
    backgroundColor: '#EEEEEE',
    width: '100%',
    marginVertical: 10,
  },
  modalButtonContainer: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
});
