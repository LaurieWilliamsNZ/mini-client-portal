import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { theme } from '../../theme';

interface Props {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secure?: boolean;
  rightIcon?: string;
  onIconPress?: () => void;
}

const TextInputField: React.FC<Props> = props => (
  <TextInput
    {...props}
    style={styles.input}
    contentStyle={{ fontSize: theme.fontSize.base }}
    label={props.label}
    secureTextEntry={props.secure}
    right={
      props.rightIcon ? (
        <TextInput.Icon name={props.rightIcon} onPress={props.onIconPress} />
      ) : null
    }
  />
);

const styles = StyleSheet.create({
  input: {
    marginVertical: theme.spacing(1),
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.base,
  },
});

export default TextInputField;
