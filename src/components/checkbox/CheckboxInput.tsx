import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { theme } from '../../theme';

const CheckboxInput: React.FC<{
  value: boolean;
  onValueChange: (v: boolean) => void;
}> = ({ value, onValueChange }) => (
  <View style={styles.container}>
    <Checkbox
      status={value ? 'checked' : 'unchecked'}
      onPress={() => onValueChange(!value)}
    />
    <Text style={styles.label}>Remember me for 30 days</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: theme.spacing(1),
  },
  label: {
    marginLeft: theme.spacing(1),
    fontSize: theme.fontSize.base,
    color: theme.colors.textLight,
  },
});

export default CheckboxInput;
