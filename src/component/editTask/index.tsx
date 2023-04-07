import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import {editTask} from '../../store/taskSlice';
import Task from '../../types/taskType';

interface EditTaskProps {
  task: Task;
  onClose: () => void;
}

const EditTask = ({task, onClose}: EditTaskProps) => {
  const [title, setTitle] = useState(task.title);
  const [note, setNote] = useState(task.note);
  const [priority, setPriority] = useState(task.priority);

  const dispatch = useDispatch();

  const handleEditTask = () => {
    const updatedTask: Task = {
      ...task,
      title,
      note,
      priority,
    };
    dispatch(editTask(updatedTask));
    onClose();
  };

  return (
    <View>
      <Text>Title:</Text>
      <TextInput value={title} onChangeText={setTitle} />
      <Text>Note:</Text>
      <TextInput value={note} onChangeText={setNote} />
      <Text>Priority:</Text>
      <Picker
        selectedValue={priority}
        onValueChange={value => setPriority(value)}>
        <Picker.Item label="High" value="high" />
        <Picker.Item label="Medium" value="medium" />
        <Picker.Item label="Low" value="low" />
      </Picker>
      <Button title="Save Changes" onPress={handleEditTask} />
      <Button title="Cancel" onPress={onClose} />
    </View>
  );
};

export default EditTask;
