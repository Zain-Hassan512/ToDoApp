import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styles from './styles';

//import {Homesvg} from '../../utils/svgs';
import {Notesvg} from '../../assets/svgs';
interface Props {
  title: string;
}
const Header: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.header}>
      <Notesvg width={35} height={35} color="#e0e0e0" />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};
export default Header;
