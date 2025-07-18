import * as React from 'react';
import { StyleSheet } from 'react-native';
import LogoSVG from '@/assets/logo.svg';

const Div = () => {
  return <LogoSVG style={styles.divIcon} />;
};

const styles = StyleSheet.create({
  divIcon: {
    width: '100%',
    borderRadius: 8,
    maxWidth: '100%',
    overflow: 'hidden',
    flex: 1,
    height: 56,
  },
});

export default Div;
