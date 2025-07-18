import * as React from 'react';
import { StyleSheet } from 'react-native';
import shield from '@/assets/shield.svg';

const ShieldSVGComponent = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  // @ts-ignore
  return React.createElement(shield, { width, height, style: styles.shield });
};

const styles = StyleSheet.create({
  shield: {
    width: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    flex: 1,
    height: 14,
  },
});

export default ShieldSVGComponent;
