import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styles from './styles';

interface Props {
  title: string;
}
const Header: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <Image
        source={require('../../utils/images/to-do-list.png')}
        style={styles.icon}
      />
    </View>
  );
};
export default Header;
