import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Wallet from '@/assets/wallet.svg';
import Investment from '@/assets/investment.svg';
import Return from '@/assets/return.svg';
import UpArrow from '@/assets/upArrow.svg';
import { theme } from '@/src/theme';
import AnimatedCounter from '@/src/components/AnimatedCounter';

interface InfoCardProps {
  title?: string;
  value?: string;
  change?: string;
  icon?: 'wallet' | 'investment' | 'return';
  textStyle?: 'standard' | 'theme';
  animated?: boolean;
  animationDelay?: number;
  testID?: string;
}

const InfoCard = ({
  title,
  value,
  change,
  icon = 'wallet',
  textStyle = 'theme',
  animated = false,
  animationDelay = 0,
  testID = 'info-card',
}: InfoCardProps) => {
  const getIconComponent = () => {
    switch (icon) {
      case 'investment':
        return <Investment style={styles.icon} width={44} height={44} />;
      case 'return':
        return <Return style={styles.icon} width={44} height={44} />;
      case 'wallet':
      default:
        return <Wallet style={styles.icon} width={44} height={44} />;
    }
  };

  const getTextStyles = () => {
    if (textStyle === 'standard') {
      return {
        label: [styles.label, styles.labelLayout],
        value: styles.value,
        changeText: [
          styles.changeText,
          styles.labelLayout,
          styles.standardChangeText,
          styles.standardChangeTextPosition,
        ],
      };
    }
    return {
      label: [styles.label, styles.labelLayout],
      value: styles.value,
      changeText: [styles.changeText, styles.labelLayout],
    };
  };

  const textStyles = getTextStyles();

  return (
    <View style={styles.card} testID={testID}>
      <View style={[styles.cardContent, styles.contentLayout]}>
        <View style={[styles.textContent, styles.contentLayout]}>
          {title && <Text style={textStyles.label}>{title}</Text>}
          {value && (
            animated ? (
              <AnimatedCounter 
                value={value} 
                style={textStyles.value}
                delay={animationDelay}
                testID="animated-value"
              />
            ) : (
              <Text style={textStyles.value}>{value}</Text>
            )
          )}
          {change && <Text style={textStyles.changeText}>{change}</Text>}
          {textStyle !== 'standard' && (
            <UpArrow style={styles.changeIcon} width={11} height={14} />
          )}
        </View>
        {getIconComponent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: theme.colors.surface,
    shadowColor: theme.colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.05,
    borderRadius: theme.borderRadius.lg,
    borderStyle: 'solid',
    borderColor: theme.colors.border,
    borderWidth: 1,
    height: 138,
  },
  contentLayout: {
    height: 88,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',
  },
  labelLayout: {
    height: 20,
    lineHeight: 20,
    fontSize: theme.fontSize.sm,
    textAlign: 'left',
    position: 'absolute',
  },
  label: {
    top: -1,
    ...theme.fonts.medium,
    color: theme.colors.textHint,
    width: 135,
    left: 0,
  },
  value: {
    top: 19,
    ...theme.fonts.bold,
    color: theme.colors.text,
    width: 137,
    height: 36,
    textAlign: 'left',
    left: 0,
    position: 'absolute',
  },
  changeText: {
    top: 67,
    left: 15,
    ...theme.fonts.regular,
    color: '#16a34a',
    width: 150,
  },
  changeIcon: {
    top: 71,
    width: 11,
    height: 14,
    overflow: 'hidden',
    left: 0,
    position: 'absolute',
  },
  textContent: {
    top: 0,
    width: 166,
    left: 0,
  },
  icon: {
    top: 22,
    right: 25,
    borderRadius: theme.borderRadius.base,
    width: 44,
    height: 44,
    position: 'absolute',
  },
  cardContent: {
    top: 25,
    left: 25,
    width: 339,
  },
  standardChangeText: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Inter-Regular',
    color: '#6b7280',
  },
  standardChangeTextPosition: {
    left: 0,
  },
});

export default InfoCard;
