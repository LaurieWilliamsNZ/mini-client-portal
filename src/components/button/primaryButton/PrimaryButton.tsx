import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const PrimaryButton: React.FC<{
  onPress: () => void;
  children: string;
  disabled?: boolean;
  loading?: boolean;
}> = ({ onPress, children, disabled, loading }) => (
  <PaperButton
    mode="contained"
    onPress={onPress}
    disabled={disabled || loading}
    style={styles.button}
    labelStyle={styles.label}
    loading={loading}
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
