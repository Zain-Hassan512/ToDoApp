import React, {useEffect, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useDispatch} from 'react-redux';
import {addTask, editTask} from '../../store/taskSlice';
import Task from '../../types/taskType';
import styles from './styles';
import ScreenNames from '../../route/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Params = {
  Screen: {
    task?: Task;
  };
};
const AddTaskScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<Params, 'Screen'>) => {
  const {task} = route.params;
  const [title, setTitle] = useState(task?.title ?? '');
  const [note, setNote] = useState(task?.note || '');
  const [priority, setPriority] = useState<'high' | 'medium' | 'low'>(
    task?.priority || 'low',
  );
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const newTask: Task = {
      id: task?.id || Date.now(),
      title,
      note,
      priority,
    };
    if (task) {
      dispatch(editTask(newTask));
    } else {
      dispatch(addTask(newTask));
    }
    setTitle('');
    setNote('');
    setPriority('low');
    //@ts-ignore
    navigation.navigate(ScreenNames.MAIN);
  };
  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setNote(task.note);
      setPriority(task.priority);
    }
  }, [task]);

  return (
    <ScrollView contentContainerStyle={styles.form}>
      <View
        style={{
          alignContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            //@ts-ignore
            navigation.navigate(ScreenNames.MAIN);
          }}>
          <Image
            source={require('../../utils/images/back.png')}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{task ? 'Edit Task' : 'Add New Task'}</Text>
      </View>
      <View style={styles.input}>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Title"
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <View style={styles.input}>
        <Text style={styles.label}>Priority:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={priority}
            onValueChange={value => setPriority(value)}
            style={styles.picker}>
            <Picker.Item label="High" value="high" />
            <Picker.Item label="Medium" value="medium" />
            <Picker.Item label="Low" value="low" />
          </Picker>
        </View>
      </View>

      <View style={styles.noteInput}>
        <Text style={styles.label}>Note:</Text>
        <TextInput
          style={styles.noteInput}
          placeholder="Enter Note"
          value={note}
          onChangeText={setNote}
          multiline={true}
          numberOfLines={4}
          returnKeyType="done"
        />
      </View>

      <TouchableOpacity style={styles.addItemButton} onPress={handleAddTask}>
        <Text style={styles.buttonText}>
          {task ? 'Save Changes' : 'Add Task'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddTaskScreen;
