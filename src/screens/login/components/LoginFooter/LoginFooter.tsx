import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '@/src/theme';

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
    backgroundColor: theme.colors.backgroundLight,
    borderTopWidth: 1,
    borderColor: theme.colors.border,
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -85,
    marginLeft: 16,
    marginRight: 16,
    borderBottomLeftRadius: theme.borderRadius.lg,
    borderBottomRightRadius: theme.borderRadius.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 24,
    elevation: 16,
  },
  text: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textHint,
    fontFamily: theme.fonts.regular.fontFamily,
    fontWeight: theme.fonts.regular.fontWeight,
    textAlign: 'center',
  },
  link: {
    color: theme.colors.primary,
    fontWeight: theme.fonts.medium.fontWeight,
    fontFamily: theme.fonts.medium.fontFamily,
    fontSize: theme.fontSize.sm,
    textAlign: 'center',
  },
});

export default LoginFooter;
