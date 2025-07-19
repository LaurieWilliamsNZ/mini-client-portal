import React, { useState } from 'react';
import TextInputField from '../textInputField';
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
    <TextInputField
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      secure={!visible}
      leftIcon="lock"
      rightIcon={visible ? 'eye-off' : 'eye'}
      onIconPress={() => setVisible(v => !v)}
      placeholder={placeholder || label}
      mode="outlined"
      leftIconColor={theme.colors.placeholder}
      rightIconColor={theme.colors.placeholder}
      error={error}
    />
  );
};

export default PasswordInput;
