import React from 'react';
import { View, StyleSheet } from 'react-native';
import LogoSVG from '@/assets/logo.svg';
import { theme } from '@/src/theme';

export const Logo: React.FC = () => (
  <View style={styles.container}>
    <LogoSVG width={theme.spacing(3)} height={theme.spacing(3)} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: theme.borderRadius.base,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    // iOS shadow
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Android elevation
    elevation: 4,
  },
});

export default Logo;
