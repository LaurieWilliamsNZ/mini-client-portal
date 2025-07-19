import React, { useState } from 'react';
import TextInputField from '../textInputField';
import { theme } from '@/src/theme';

interface PasswordInputProps {
  value: string;
  onChangeText: (text: string) => void;
  label?: string;
  placeholder?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChangeText,
  label = 'Password',
  placeholder = 'Enter your password',
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <TextInputField
      value={value}
      onChangeText={onChangeText}
      secure={!visible}
      leftIcon="lock"
      rightIcon={visible ? 'eye-off' : 'eye'}
      onIconPress={() => setVisible(v => !v)}
      placeholder={placeholder || label}
      mode="outlined"
      leftIconColor={theme.colors.placeholder}
      rightIconColor={theme.colors.placeholder}
    />
  );
};

export default PasswordInput;
