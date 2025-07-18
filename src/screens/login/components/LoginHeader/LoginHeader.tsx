import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LogoSvg from '@/assets/logo.svg';
import { theme } from '../../../../theme';

const LoginHeader = () => (
  <View style={styles.container}>
    <LogoSvg width={theme.spacing(6)} height={theme.spacing(7)} />
    <Text style={styles.title}>WealthWise</Text>
    <Text style={styles.subtitle}>Investment Advisory Client Portal</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  title: {
    fontSize: theme.fontSize.xl,
    fontWeight: '700',
    color: theme.colors.text,
    marginTop: theme.spacing(1),
  },
  subtitle: {
    fontSize: theme.fontSize.base,
    color: theme.colors.textHint,
    marginTop: theme.spacing(0.5),
  },
});

export default LoginHeader;
