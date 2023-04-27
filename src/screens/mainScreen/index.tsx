import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {useSelector} from 'react-redux';
import {RoundButton} from '../../component';
import TaskCard from '../../component/card';
import Header from '../../component/header/index';
import {ScreenNames} from '../../route';
import {RootState} from '../../store/index';
import styles from './style';
import AppColors from '../../utils/color';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamsList} from '../../route/routes';
import {height, width} from '../../utils';

const MainScreen = ({
  navigation,
}: NativeStackScreenProps<RootParamsList, ScreenNames.MAIN>) => {

  const uncompletedTasks = useSelector((state: RootState) =>
    state.task.tasks.filter(task => !task.completed),
  );
  
  return (
    <ScreenWrapper
      scrollType="none"
      barStyle="light-content"
      statusBarColor={AppColors.lightPrimary}>
      <View style={styles.container}>
        <Header title="TODO APP" />
        <FlatList
          data={uncompletedTasks}
          style={styles.flatlist}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No Tasks to show</Text>
            </View>
          }
          renderItem={({item}) => {
            return (
              <TaskCard
                task={item}
                onPressEdit={() => {
                  navigation.navigate(ScreenNames.ADD, {task: item});
                }}
                pending={item.completed}
              />
            );
          }}
        />
      </View>
      <RoundButton
        onPress={() => {
          navigation.navigate(ScreenNames.ADD, {});
        }}
      />
      <TouchableOpacity
        style={{
          width: width(25),
          height: width(12),
          backgroundColor: AppColors.primary,
          position: 'absolute',
          bottom: 20,
          left: 20,
          borderRadius: 8,
          justifyContent: 'center',
        }}
        onPress={() => {
          navigation.navigate(ScreenNames.COMPLETED);
        }}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: width(4)}}>
          Completed Tasks
        </Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

export default MainScreen;
