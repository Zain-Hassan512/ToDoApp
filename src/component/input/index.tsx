import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {TextInputProps, View, ViewStyle} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {height, width} from '../../utils';
import AppColors from '../../utils/color';
import styles from './styles';

type Props = {
  control: Control | any;
  name: string;
  textinputstyle?: ViewStyle;
  multilines?: boolean;
  placeholder?: string;
};

const Input: React.FC<Props> = ({
  control,
  name,
  textinputstyle,
  multilines,
  placeholder,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({field, fieldState: {error}}) => (
        <View>
          <TextInput
            {...field}
            style={[styles.textInputStyle, textinputstyle]}
            error={Boolean(error)}
            mode="outlined"
            onChangeText={field.onChange}
            value={field.value}
            placeholder={placeholder}
            placeholderTextColor={AppColors.gray85}
            multiline={multilines}
          />
          {error && (
            <>
              <Text style={styles.errortext}>{error.message}</Text>
            </>
          )}
        </View>
      )}
    />
  );
};

export default Input;
