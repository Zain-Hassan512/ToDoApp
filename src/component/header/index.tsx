import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './styles';

interface Props {
  title: string;
}
const Header: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};
export default Header;
