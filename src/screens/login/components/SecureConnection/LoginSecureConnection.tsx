import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../../../theme';
import ShieldSVG from './components';

const LoginSecureConnection = () => (
  <View style={styles.container}>
    <ShieldSVG width={theme.spacing(1.75)} height={theme.spacing(1.75)} />
    <Text style={styles.text}>Secure, encrypted connection</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  text: {
    marginLeft: theme.spacing(1),
    fontSize: theme.fontSize.sm,
    color: theme.colors.placeholder,
  },
});

export default LoginSecureConnection;
