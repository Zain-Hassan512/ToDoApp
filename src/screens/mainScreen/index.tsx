import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import Header from '../../component/header/index';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/index';
import {RoundButton} from '../../component';
import styles from './style';
import {ScreenNames} from '../../route';
import TaskCard from '../../component/card';
import {ScreenWrapper} from 'react-native-screen-wrapper';
interface AddTaskProps {
  navigation: any;
}
const MainScreen: React.FC<AddTaskProps> = ({navigation}) => {
  const task = useSelector((state: RootState) => state.task);

  return (
    <ScreenWrapper>
      <View style={styles.container}>
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
      </View>
    </ScreenWrapper>
  );
};

export default MainScreen;
