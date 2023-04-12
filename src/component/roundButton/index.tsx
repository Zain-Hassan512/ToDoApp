import React, {FC} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
  Image,
} from 'react-native';
import styles from './styles';

interface RoundButtonProps {
  onPress: () => void;
}

const RoundButton: FC<RoundButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        source={require('../../utils/images/add.png')}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

export default RoundButton;
