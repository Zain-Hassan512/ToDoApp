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
  onPressBack?(): void;
}
const Header: React.FC<Props> = ({
  title,
  backIcon = false,
  onPressBack,
}) => {
  return backIcon ? (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPressBack} style={styles.iconContainer}>
        <Backsvg
          width={width(8)}
          height={width(8)}
          color={AppColors.sepratorclr}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  ) : (
    <View style={styles.header}>
      <Notesvg width={35} height={35} color="#e0e0e0" />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};
export default Header;
