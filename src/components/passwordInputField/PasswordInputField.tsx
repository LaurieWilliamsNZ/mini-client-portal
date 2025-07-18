import React, { useState } from 'react';
import TextInputField from '../textInputField';

const PasswordInput: React.FC<{
  value: string;
  onChangeText: (t: string) => void;
}> = ({ value, onChangeText }) => {
  const [visible, setVisible] = useState(false);
  return (
    <TextInputField
      label="Password"
      value={value}
      onChangeText={onChangeText}
      secure={!visible}
      rightIcon={visible ? 'eye-off' : 'eye'}
      onIconPress={() => setVisible(v => !v)}
    />
  );
};

export default PasswordInput;
