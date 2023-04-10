// import React, {useState} from 'react';
// import {Button, Text, TextInput, View, TouchableOpacity} from 'react-native';
// import {Picker} from '@react-native-picker/picker';
// import {useDispatch} from 'react-redux';
// import {addTask} from '../../store/taskSlice';
// import Task from '../../types/taskType';
// import styles from './styles';
// const AddTask = () => {
//   const [title, setTitle] = useState('');
//   const [note, setNote] = useState('');
//   const [priority, setPriority] = useState<'high' | 'medium' | 'low'>('low');

//   const dispatch = useDispatch();

//   const handleAddTask = () => {
//     const task: Task = {
//       id: Date.now(),
//       title,
//       note,
//       priority,
//     };
//     dispatch(addTask(task));
//     setTitle('');
//     setNote('');
//     setPriority('low');
//   };

//   return (
//     <View style={styles.form}>
//       <Text style={styles.heading}>Title:</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Title"
//         value={title}
//         onChangeText={setTitle}
//       />

//       <Text style={styles.heading}>Priority:</Text>
//       <Picker
//         selectedValue={priority}
//         onValueChange={value => setPriority(value)}>
//         <Picker.Item label="High" value="high" />
//         <Picker.Item label="Medium" value="medium" />
//         <Picker.Item label="Low" value="low" />
//       </Picker>
//       <Text style={styles.heading}>Note:</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Note"
//         value={note}
//         onChangeText={setNote}
//       />
//       <TouchableOpacity style={styles.addItemButton} onPress={handleAddTask}>
//         <Text style={styles.buttonText}>Add Task</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default AddTask;
