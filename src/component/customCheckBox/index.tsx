import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './style';
import allColors from '../../utils/color';
import AppColors from '../../utils/color';
interface Option {
  label: string;
  value: string;
}

interface MyCheckBoxPickerProps {
  onSelectionChange: (selectedValue: string) => void;
  options: Option[];
  defaultValue?: string;
}

const MyCheckBoxPicker: React.FC<MyCheckBoxPickerProps> = ({
  onSelectionChange,
  options,
  defaultValue = '',
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
  const handleOptionClick = (value: string) => {
    if (value === selectedValue) {
      setSelectedValue('');
      onSelectionChange('');
    } else {
      setSelectedValue(value);
      onSelectionChange(value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Priority</Text>
      <View style={styles.checkboxContainer}>
        {options.map(option => (
          <TouchableOpacity
            key={option.value}
            style={[
              styles.checkbox,
              {
                backgroundColor:
                  selectedValue === option.value
                    ? AppColors.lightPrimary
                    : AppColors.white,
              },
            ]}
            onPress={() => handleOptionClick(option.value)}>
            <Text
              style={[
                styles.checkboxLabel,
                {
                  color:
                    selectedValue === option.value
                      ? AppColors.white
                      : AppColors.black,
                },
              ]}>
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default MyCheckBoxPicker;
