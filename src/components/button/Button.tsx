import React from 'react';
import { Button as PaperButton } from 'react-native-paper';

const Button: React.FC<{
  mode?: 'contained'|'outlined';
  style?: object;
  onPress: () => void;
  children: React.ReactNode;
}> = ({ mode = 'contained', style, onPress, children }) => (
  <PaperButton
    mode={mode}
    onPress={onPress}
    style={[{ marginVertical: 8, borderRadius: 8 }, style]}
    contentStyle={{ height: 48 }} 
  >
    {children}
  </PaperButton>
);

export default Button;