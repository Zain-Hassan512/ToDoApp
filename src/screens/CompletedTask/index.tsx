import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {useSelector} from 'react-redux';
import TaskCard from '../../component/card';
import Header from '../../component/header/index';
import {ScreenNames} from '../../route';
import {RootState} from '../../store/index';
import styles from './styles';
import AppColors from '../../utils/color';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamsList} from '../../route/routes';

const CompletedTaskScreen = ({
  navigation,
}: NativeStackScreenProps<RootParamsList, ScreenNames.COMPLETED>) => {

  const completedTasks = useSelector((state: RootState) =>
    state.task.tasks.filter(task => task.completed),
  );
  
  return (
    <ScreenWrapper
      scrollType="none"
      barStyle="light-content"
      statusBarColor={AppColors.lightPrimary}>
      <View style={styles.container}>
        <Header
          backIcon={true}
          title="History"
          onPressBack={() => navigation.goBack()}
        />
        <FlatList
          data={completedTasks}
          style={styles.flatlist}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No History to show</Text>
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
    </ScreenWrapper>
  );
};

export default CompletedTaskScreen;
