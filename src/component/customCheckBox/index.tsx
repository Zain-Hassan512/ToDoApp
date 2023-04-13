import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

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
  const defaultColor = '#F2F2F2';
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
                  selectedValue === option.value ? '#2196F3' : '#F2F2F2',
              },
            ]}
            onPress={() => handleOptionClick(option.value)}>
            <Text style={styles.checkboxLabel}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    alignSelf: 'center',
    paddingLeft: '7%',
    marginTop: 10,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  selected: {
    backgroundColor: 'grey',
  },
  checkboxLabel: {
    fontSize: 16,
    marginLeft: 8,
    color: '#000000',
  },
});

export default MyCheckBoxPicker;
