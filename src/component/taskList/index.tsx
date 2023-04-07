import React from 'react';
import {
  FlatList,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {deleteTask} from '../../store/taskSlice';
import Task from '../../types/taskType';
import styles from './styles';
const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.task);

  const handleDeleteTask = (taskId: number) => {
    dispatch(deleteTask(taskId));
  };

  const renderItem = ({item}: {item: Task}) => (
    <ScrollView>
      <View
        style={{
          width: '94%',
          alignSelf: 'center',
          height: 120,
          backgroundColor: '#fff',
          marginTop: 10,
          borderRadius: 10,
          elevation: 1,
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
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
          <TouchableOpacity>
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
        <Text style={styles.note}>{item.note.substring(0, 4) + '...'}</Text>
        <Text style={[styles.priority, getPriorityColor(item.priority)]}>
          {item.priority}
        </Text>
        {/* <Button title="Delete" onPress={() => handleDeleteTask(item.id)} /> */}
      </View>
    </ScrollView>
  );

  return (
    <FlatList
      data={tasks.tasks}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default TaskList;
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
