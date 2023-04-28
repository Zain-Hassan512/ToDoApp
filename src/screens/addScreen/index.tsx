import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {height, width} from '../../utils';
import {useDispatch} from 'react-redux';
import {addTask, editTask} from '../../store/taskSlice';
import Task, {Priority} from '../../types/taskType';
import styles from './styles';
import ScreenNames, {RootParamsList} from '../../route/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import MyCheckBoxPicker from '../../component/customCheckBox';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import AppColors from '../../utils/color';
import {Header, Input} from '../../component';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {TaskFormValidation} from './utils';

interface Option {
  label: string;
  value: Priority;
}
const priorityOptions: Option[] = [
  {label: 'Low', value: 'low'},
  {label: 'Medium', value: 'medium'},
  {label: 'High', value: 'high'},
];

const AddTaskScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<RootParamsList, ScreenNames.ADD>) => {
  const {task} = route.params;
  const [title, setTitle] = useState(task?.title ?? '');
  const [note, setNote] = useState(task?.note ?? '');
  const [priority, setPriority] = useState<Priority>(task?.priority ?? 'low');
  const dispatch = useDispatch();

  const handleAddTask = (values: {title: string; note: string}) => {
    const newTask: Task = {
      id: task?.id || Date.now(),
      title: values.title,
      note: values.note,
      priority,
      completed: false,
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

  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({
    mode: 'all',
    defaultValues: {
      title: task?.title ?? '',
      note: task?.note ?? '',
    },
    resolver: yupResolver(TaskFormValidation),
  });
  return (
    <ScreenWrapper
      scrollType="keyboard"
      barStyle="light-content"
      statusBarColor={AppColors.lightPrimary}>
      <View style={styles.container}>
        <Header
          backIcon={true}
          title={task ? 'Edit Task' : 'Add Task'}
          onPressBack={() => navigation.goBack()}
        />
        <View style={{marginTop: 20}}>
          <Text style={styles.label}>Title</Text>
          {/* <TextInput
            style={styles.input}
            placeholder="Enter Title"
            value={title}
            onChangeText={setTitle}
            placeholderTextColor={AppColors.gray85}
          /> */}
          <Input control={control} name="title" placeholder="Enter Title" />
        </View>
        <MyCheckBoxPicker
          options={priorityOptions}
          onSelectionChange={handlePriorityChange}
          defaultValue={priority}
        />

        <View style={{}}>
          <Text style={styles.label}>Note</Text>
          {/* <TextInput
            style={styles.noteInput}
            placeholder="Type your notes here..."
            placeholderTextColor={AppColors.gray85}
            value={note}
            onChangeText={setNote}
            multiline={true}
            numberOfLines={10}
            returnKeyType="done"
          /> */}
          <Input
            control={control}
            name="note"
            placeholder="Enter Title"
            multilines={true}
            textinputstyle={styles.noteInput}
          />
        </View>
        <TouchableOpacity
          style={styles.addItemButton}
          onPress={handleSubmit(handleAddTask)}
          disabled={!isValid}>
          <Text style={styles.buttonText}>
            {task ? 'Save Changes' : 'Add Task'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default AddTaskScreen;
