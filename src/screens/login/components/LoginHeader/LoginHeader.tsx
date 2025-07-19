import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LogoSvg from '@/assets/logo.svg';
import { theme } from '../../../../theme';

const LoginHeader = () => (
  <View style={styles.container}>
    <LogoSvg width={400} />
    <Text style={styles.subtitle}>Investment Advisory Client Portal</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  subtitle: {
    fontSize: theme.fonts.regular.fontSize,
    color: theme.colors.textHint,
    marginTop: theme.spacing(0.5),
  },
});

export default LoginHeader;
