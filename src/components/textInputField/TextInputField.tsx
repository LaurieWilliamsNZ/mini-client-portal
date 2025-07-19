import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { theme } from '@/src/theme';

interface Props {
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  onBlur?: (e: any) => void;
  leftIcon?: string;
  rightIcon?: string;
  onIconPress?: () => void;
  disabled?: boolean;
  error?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

const TextInputField: React.FC<Props> = props => (
  <TextInput
    value={props.value}
    placeholder={props.placeholder}
    onChangeText={props.onChangeText}
    onBlur={props.onBlur}
    disabled={props.disabled}
    error={!!props.error}
    label={props.error}
    autoCapitalize={props.autoCapitalize}
    style={styles.input}
    contentStyle={{ fontSize: theme.fontSize.base, color: theme.colors.text }}
    mode="outlined"
    placeholderTextColor={theme.colors.placeholder}
    outlineColor={theme.colors.border}
    activeOutlineColor={theme.colors.border}
    theme={{ colors: { primary: theme.colors.label } }}
    left={
      props.leftIcon ? (
        <TextInput.Icon
          icon={props.leftIcon}
          color={theme.colors.placeholder}
        />
      ) : null
    }
    right={
      props.rightIcon ? (
        <TextInput.Icon
          icon={props.rightIcon}
          onPress={props.onIconPress}
          color={theme.colors.placeholder}
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
