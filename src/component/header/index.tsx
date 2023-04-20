import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

//import {Homesvg} from '../../utils/svgs';
import {Backsvg, Notesvg} from '../../assets/svgs';
import {width} from '../../utils';
import AppColors from '../../utils/color';
import Task from '../../types/taskType';
import {useNavigation} from '@react-navigation/native';
import ScreenNames from '../../route/routes';
interface Props {
  title?: string;
  backIcon?: Boolean;
  task?: Task;
}
const Header: React.FC<Props> = ({title, backIcon, task}) => {
  const navigation = useNavigation();
  if (backIcon) {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            //@ts-ignore
            navigation.navigate(ScreenNames.MAIN);
          }}
          style={styles.iconContainer}>
          <Backsvg
            width={width(8)}
            height={width(8)}
            color={AppColors.sepratorclr}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {task ? 'Edit Task' : 'Add New Task'}
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.header}>
      <Notesvg width={35} height={35} color="#e0e0e0" />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};
export default Header;
