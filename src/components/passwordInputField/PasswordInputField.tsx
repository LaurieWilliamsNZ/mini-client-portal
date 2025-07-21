import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { theme } from '@/src/theme';

interface PasswordInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: (e: any) => void;
  label?: string;
  placeholder?: string;
  error?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChangeText,
  onBlur,
  label = 'Password',
  placeholder = 'Enter your password',
  error,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      secureTextEntry={!visible}
      autoCapitalize="none"
      placeholder={placeholder || label}
      mode="outlined"
      error={!!error}
      label={error}
      style={styles.input}
      contentStyle={{ fontSize: theme.fontSize.base, color: theme.colors.text }}
      placeholderTextColor={theme.colors.placeholder}
      outlineColor={theme.colors.border}
      activeOutlineColor={theme.colors.border}
      theme={{ colors: { primary: theme.colors.label } }}
      left={<TextInput.Icon icon="lock" color={theme.colors.placeholder} />}
      right={
        <TextInput.Icon
          icon={visible ? 'eye-off' : 'eye'}
          onPress={() => setVisible(v => !v)}
          color={theme.colors.placeholder}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 0,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.base,
    fontSize: theme.fontSize.base,
    color: theme.colors.text,
  },
});

export default PasswordInput;
