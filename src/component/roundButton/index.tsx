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
import AddSVG from '../../assets/svgs/add-svg';
import {height, width} from '../../utils/index';
interface RoundButtonProps {
  onPress: () => void;
}

const RoundButton: FC<RoundButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <AddSVG width={width(15)} height={height(7)} color="white" />
    </TouchableOpacity>
  );
};

export default RoundButton;
