import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '@/src/theme';

const CheckboxInput: React.FC<{
  value: boolean;
  onValueChange: (v: boolean) => void;
}> = ({ value, onValueChange }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => onValueChange(!value)}
    activeOpacity={0.7}
  >
    <View style={[styles.checkbox, value && styles.checkboxChecked]}>
      {/* TODO: fix ts */}
      {/* @ts-ignore */}
      {value && <Icon name="check" size={14} color={theme.colors.primary} />}
    </View>
    <Text style={styles.label}>Remember me for 30 days</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24.1,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.checkboxBorder,
    borderWidth: 0.5,
    backgroundColor: theme.colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.checkboxCheckedBg,
  },
  label: {
    marginLeft: 8,
    fontSize: theme.fontSize.sm,
    color: theme.colors.textLight,
  },
});

export default CheckboxInput;
