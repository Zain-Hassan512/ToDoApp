import React from 'react';
import {FlatList, Text, View} from 'react-native';
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

const MainScreen = ({
  navigation,
}: NativeStackScreenProps<RootParamsList, ScreenNames.MAIN>) => {
  const task = useSelector((state: RootState) => state.task.tasks);

  return (
    <ScreenWrapper
      scrollType="none"
      barStyle="light-content"
      statusBarColor={AppColors.lightPrimary}>
      <View style={styles.container}>
        <Header title="TODO APP" />
        <FlatList
          data={task}
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
    </ScreenWrapper>
  );
};

export default MainScreen;
