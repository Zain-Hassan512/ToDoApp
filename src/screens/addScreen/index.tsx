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
  KeyboardAvoidingView,
} from 'react-native';
import {height, width} from '../../utils';
import {useDispatch} from 'react-redux';
import {addTask, editTask} from '../../store/taskSlice';
import Task, {Priority} from '../../types/taskType';
import styles from './styles';
import ScreenNames from '../../route/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import MyCheckBoxPicker from '../../component/customCheckBox';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {Backsvg} from '../../assets/svgs';
import AppColors from '../../utils/color';
import {Header} from '../../component';

interface Option {
  label: string;
  value: Priority;
}
const priorityOptions: Option[] = [
  {label: 'Low', value: 'low'},
  {label: 'Medium', value: 'medium'},
  {label: 'High', value: 'high'},
];
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
  const [note, setNote] = useState(task?.note ?? '');
  const [priority, setPriority] = useState<Priority>(task?.priority ?? 'low');
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

  const handlePriorityChange = (selectedValue: Priority) => {
    setPriority(selectedValue);
  };

  return (
    <ScreenWrapper
      scrollType="keyboard"
      barStyle="light-content"
      statusBarColor={AppColors.lightPrimary}>
      <View style={styles.container}>
        {/* <View style={styles.innercontainer}>
          <TouchableOpacity
            onPress={() => {
              //@ts-ignore
              navigation.navigate(ScreenNames.MAIN);
            }}>
            <Backsvg
              width={width(8)}
              height={width(8)}
              color={AppColors.sepratorclr}
            />
          </TouchableOpacity>
          <Text style={styles.title}>
            {task ? 'Edit Task' : 'Add New Task'}
          </Text>
        </View> */}
        <Header backIcon={true} task={task} />
        <View style={{marginTop: 20}}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Title"
            value={title}
            onChangeText={setTitle}
            placeholderTextColor={AppColors.gray85}
          />
        </View>
        <MyCheckBoxPicker
          options={priorityOptions}
          onSelectionChange={handlePriorityChange}
          defaultValue={priority}
        />

        <View style={{marginTop: 20}}>
          <Text style={styles.label}>Note</Text>
          <TextInput
            style={styles.noteInput}
            placeholder="Type your notes here..."
            placeholderTextColor={AppColors.gray85}
            value={note}
            onChangeText={setNote}
            multiline={true}
            numberOfLines={10}
            returnKeyType="done"
          />
        </View>
        <TouchableOpacity style={styles.addItemButton} onPress={handleAddTask}>
          <Text style={styles.buttonText}>
            {task ? 'Save Changes' : 'Add Task'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default AddTaskScreen;
