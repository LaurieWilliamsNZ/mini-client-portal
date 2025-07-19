import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const PrimaryButton: React.FC<{
  onPress: () => void;
  children: string;
  disabled?: boolean;
}> = ({ onPress, children, disabled }) => (
  <PaperButton
    mode="contained"
    onPress={onPress}
    disabled={disabled}
    style={styles.button}
    labelStyle={styles.label}
  >
    {children}
  </PaperButton>
);

const styles = StyleSheet.create({
  button: {
    marginVertical: 16,
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default PrimaryButton;
