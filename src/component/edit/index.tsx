import React, {useState, useEffect} from 'react';
import {
  Button,
  Modal,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useDispatch} from 'react-redux';
import {addTask, editTask} from '../../store/taskSlice';
import Task from '../../types/taskType';
import styles from './styles';

interface AddTaskProps {
  visible: boolean;
  onClose: () => void;
  task?: Task | null;
}

const EditTaskModal: React.FC<AddTaskProps> = ({visible, onClose, task}) => {
  const [id, setId] = useState<number | undefined>(undefined);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [priority, setPriority] = useState<'high' | 'medium' | 'low'>('low');

  const dispatch = useDispatch();
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setNote(task.note);
      setPriority(task.priority);
    }
  }, [task]);

  const handleAddTask = () => {
    const newTask: Task = {
      id: id ? id : Date.now(),
      title,
      note,
      priority,
    };
    if (id !== undefined) {
      dispatch(editTask(newTask));
    } else {
      dispatch(addTask(newTask));
    }
    setTitle('');
    setNote('');
    setPriority('low');
    onClose();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <Modal visible={visible} animationType="slide">
        <View style={styles.form}>
          <Text style={styles.title}>{id ? 'Edit Task' : 'Add New Task'}</Text>
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

          <TouchableOpacity
            style={styles.addItemButton}
            onPress={handleAddTask}>
            <Text style={styles.buttonText}>
              {id ? 'Edit Task' : 'Add Task'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addItemButton} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </TouchableWithoutFeedback>
  );
};

export default EditTaskModal;
