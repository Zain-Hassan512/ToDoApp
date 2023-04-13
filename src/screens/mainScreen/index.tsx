import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import Header from '../../component/header/index';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/index';
import TaskType from '../../types/taskType';
import {RoundButton} from '../../component';
import styles from './style';
import {ScreenNames} from '../../route';
import TaskCard from '../../component/card';
import Task from '../../types/taskType';
interface AddTaskProps {
  navigation: any;
}
const MainScreen: React.FC<AddTaskProps> = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const task = useSelector((state: RootState) => state.task);
  console.log(tasks);
  const handleDeleteTask = (taskId: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const handleEditTask = (taskId: number) => {
    // Handle edit task logic
  };

  const handleDetailsTask = (taskId: number) => {
    // Handle details task logic
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="TODO APP" />
      <ScrollView>
        <View style={styles.contentWrapper}>
          {task.tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onPressEdit={() => {
                navigation.navigate(ScreenNames.ADD, {task});
              }}
            />
          ))}
        </View>
      </ScrollView>
      <RoundButton
        onPress={() => {
          navigation.navigate(ScreenNames.ADD, {});
        }}
      />
    </SafeAreaView>
  );
};

export default MainScreen;
