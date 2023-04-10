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
import {AddTask, RoundButton, TaskList} from '../../component';
import styles from './style';
import AddTaskModal from '../../component/addTaskModal';
import {ScreenNames} from '../../route';
interface AddTaskProps {
  navigation: any;
}
const MainScreen: React.FC<AddTaskProps> = ({navigation}) => {
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
      {/* <View style={styles.contentWrapper}></View> */}
      <RoundButton
        onPress={() => {
          navigation.navigate(ScreenNames.ADD);
        }}
      />
      {/* <AddTaskModal
        visible={isModalVisible}
        onClose={() => {
          navigation.navigate(ScreenNames.ADD);
        }}
      /> */}
    </SafeAreaView>
  );
};

export default MainScreen;
