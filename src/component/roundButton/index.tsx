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
import AppColors from '../../utils/color';
interface RoundButtonProps {
  onPress: () => void;
}

const RoundButton: FC<RoundButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <AddSVG
        width={width(15)}
        height={width(15)}
        color={AppColors.sepratorclr}
      />
    </TouchableOpacity>
  );
};

export default RoundButton;
