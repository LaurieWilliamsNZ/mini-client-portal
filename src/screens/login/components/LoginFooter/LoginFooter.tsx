import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../../../theme';

const LoginFooter = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Don't have an account?{' '}
      <Text style={styles.link}>Contact your advisor</Text>
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  text: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textLight,
  },
  link: {
    color: theme.colors.primary,
    fontWeight: '500',
  },
});

export default LoginFooter;
