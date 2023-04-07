import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import Header from '../../component/header/index';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/index';
import TaskType from '../../types/taskType';
import {AddTask, EditTask, RoundButton, TaskList} from '../../component';
import styles from './style';
import AddTaskModal from '../../component/addTaskModal';

const MainScreen: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const tasks = useSelector((state: RootState) => state.task);
  console.log(tasks);
  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title="TODO APP" />
      <TaskList />
      <View style={styles.contentWrapper}></View>
      <RoundButton onPress={handleOpenModal} />
      <AddTaskModal visible={isModalVisible} onClose={handleCloseModal} />
    </SafeAreaView>
  );
};

export default MainScreen;
