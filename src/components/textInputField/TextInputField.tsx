import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { theme } from '@/src/theme';

interface Props {
  label?: string;
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  onBlur?: (e: any) => void;
  secure?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  leftIconColor?: string;
  rightIconColor?: string;
  mode?: 'flat' | 'outlined';
  onIconPress?: () => void;
  disabled?: boolean;
  error?: string | boolean;
  helperText?: string;
}

const TextInputField: React.FC<Props> = props => (
  <TextInput
    {...props}
    placeholder={props?.placeholder || props?.label}
    style={styles.input}
    contentStyle={{ fontSize: theme.fontSize.base, color: theme.colors.text }}
    secureTextEntry={props.secure}
    mode={props.mode || 'outlined'}
    disabled={props.disabled}
    error={!!props.error}
    label={typeof props.error === 'string' ? props.error : props.helperText}
    placeholderTextColor={theme.colors.placeholder}
    outlineColor={theme.colors.border}
    activeOutlineColor={theme.colors.border}
    theme={{ colors: { primary: theme.colors.label } }}
    left={
      props.leftIcon ? (
        <TextInput.Icon
          icon={props.leftIcon}
          color={props.leftIconColor || theme.colors.placeholder}
        />
      ) : null
    }
    right={
      props.rightIcon ? (
        <TextInput.Icon
          icon={props.rightIcon}
          onPress={props.onIconPress}
          color={props.rightIconColor || theme.colors.placeholder}
        />
      ) : null
    }
  />
);

const styles = StyleSheet.create({
  input: {
    marginVertical: 0,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.base,
    fontSize: theme.fontSize.base,
    color: theme.colors.text,
  },
});

export default TextInputField;
