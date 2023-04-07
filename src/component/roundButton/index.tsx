import React, {FC} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';
import styles from './styles';

interface RoundButtonProps {
  onPress: () => void;
}

const RoundButton: FC<RoundButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};

export default RoundButton;
