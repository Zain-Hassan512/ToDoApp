import React, {useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useDispatch} from 'react-redux';
import {addTask} from '../../store/taskSlice';
import Task from '../../types/taskType';
import styles from './styles';
import ScreenNames from '../../route/routes';
interface AddTaskProps {
  navigation: any;
}

const AddTaskScreen: React.FC<AddTaskProps> = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [priority, setPriority] = useState<'high' | 'medium' | 'low'>('low');

  const dispatch = useDispatch();
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  const handleAddTask = () => {
    const task: Task = {
      id: Date.now(),
      title,
      note,
      priority,
    };
    dispatch(addTask(task));
    setTitle('');
    setNote('');
    setPriority('low');
    navigation.navigate(ScreenNames.MAIN);
  };

  return (
    <ScrollView contentContainerStyle={styles.form}>
      <Text style={styles.title}>Add New Task</Text>
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
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addItemButton}
        onPress={() => {
          navigation.navigate(ScreenNames.MAIN);
        }}>
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddTaskScreen;
